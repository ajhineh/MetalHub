import { NextRequest, NextResponse } from 'next/server';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import crypto from 'crypto';

// Initialize S3 client using environment variables
const s3Client = new S3Client({
  region: process.env.AWS_REGION || 'eu-west-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || 'mock-key-id',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || 'mock-secret-access-key',
  },
});

const ALLOWED_EXTENSIONS = ['pdf', 'dwg', 'step', 'stp', 'dxf'];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { filename, fileSize, mimeType } = body;

    if (!filename || !fileSize || !mimeType) {
      return NextResponse.json(
        { message: 'Missing filename, fileSize, or mimeType.' },
        { status: 400 }
      );
    }

    // 1. Size Validation (Max 30MB)
    const MAX_SIZE = 30 * 1024 * 1024;
    if (fileSize > MAX_SIZE) {
      return NextResponse.json(
        { message: 'File size exceeds limit of 30MB.' },
        { status: 400 }
      );
    }

    // 2. Extension validation
    const fileExt = filename.toLowerCase().split('.').pop() || '';
    if (!ALLOWED_EXTENSIONS.includes(fileExt)) {
      return NextResponse.json(
        { message: 'Unsupported file extension. Only PDF, DWG, STEP, and DXF are allowed.' },
        { status: 400 }
      );
    }

    const bucketName = process.env.AWS_S3_BUCKET || 'SideroHub-drawings';
    const fileKey = `drawings/${Date.now()}-${crypto.randomBytes(4).toString('hex')}-${filename}`;

    // 3. Generate AWS S3 Presigned PUT URL (expires in 1 hour / 3600 seconds)
    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: fileKey,
      ContentType: mimeType,
    });

    // If using mock credentials, handle a clean fallback for local dev
    let uploadUrl = '';
    if (process.env.AWS_ACCESS_KEY_ID && !process.env.AWS_ACCESS_KEY_ID.startsWith('mock')) {
      uploadUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
    } else {
      // Local Dev fallback mock signed URL
      uploadUrl = `https://${bucketName}.s3.${process.env.AWS_REGION || 'eu-west-1'}.amazonaws.com/${fileKey}?mock-presigned=true&expiresIn=3600`;
    }

    return NextResponse.json({
      success: true,
      uploadUrl,
      fileKey,
    });

  } catch (error: any) {
    console.error('[RFQ Presigned URL Error]:', error);
    return NextResponse.json(
      { message: 'Failed to generate S3 presigned URL.', error: error.message },
      { status: 500 }
    );
  }
}
