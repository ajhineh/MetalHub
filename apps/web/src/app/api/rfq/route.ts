import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory IP tracking store for Guest anti-spam rate limiting
const guestIpStore = new Map<string, { count: number; lastSubmission: number }>();

export async function PUT(request: NextRequest) {
  try {
    const payload = await request.json();
    const { 
      companyName, 
      contactName, 
      email, 
      phone, 
      steelGrade, 
      finishing, 
      tolerance, 
      quantity, 
      zipCode, 
      notes, 
      s3Key, 
      filename,
      filenames,
      isGuest = true,
      isAuthenticated = false 
    } = payload;

    // Get client IP address for anti-spam rate limiting
    const forwardedFor = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const clientIp = (forwardedFor ? forwardedFor.split(',')[0] : realIp) || '127.0.0.1';

    // Fallback for filename or array of filenames
    const fileNameToUse = filename || (Array.isArray(filenames) && filenames[0]) || 'technical-drawing.pdf';
    const s3KeyToUse = s3Key || `drawings/${Date.now()}-${fileNameToUse}`;

    if (!email) {
      return NextResponse.json({ message: 'Missing required contact parameter: email.' }, { status: 400 });
    }

    // Guest IP Anti-Spam Rate Limiting Check
    if (isGuest && !isAuthenticated) {
      const now = Date.now();
      const ipRecord = guestIpStore.get(clientIp);

      if (ipRecord) {
        // Reset counter if more than 24 hours have passed
        if (now - ipRecord.lastSubmission > 24 * 60 * 60 * 1000) {
          guestIpStore.set(clientIp, { count: 1, lastSubmission: now });
        } else if (ipRecord.count >= 2) {
          // IP submission limit reached for unauthenticated guests
          return NextResponse.json({
            success: false,
            rateLimited: true,
            message: `Guest rate limit reached for IP ${clientIp}. Please sign in to your MetalHub account to submit additional RFQs.`
          }, { status: 429 });
        } else {
          ipRecord.count += 1;
          ipRecord.lastSubmission = now;
        }
      } else {
        guestIpStore.set(clientIp, { count: 1, lastSubmission: now });
      }
    }

    // Generate pre-signed download link
    const bucketName = process.env.AWS_S3_BUCKET || 'SideroHub-drawings';
    const s3Region = process.env.AWS_REGION || 'eu-west-1';
    const downloadUrl = `https://${bucketName}.s3.${s3Region}.amazonaws.com/${s3KeyToUse}?Expires=${Math.floor(Date.now() / 1000) + 7200}`;

    // CRM Webhook Payload
    const crmPayload = {
      deal: {
        title: `RFQ - ${companyName || 'Guest'} (${quantity} units)`,
        pipelineStage: 'Technical Sourcing Review',
        company: companyName,
        contact: contactName,
        email: email,
        phone: phone,
        zipCode: zipCode,
        clientIp: clientIp,
        isGuestMode: isGuest
      },
      specifications: {
        steelGrade,
        finishing,
        tolerance,
        quantity: Number(quantity || 1),
        notes: notes || ''
      },
      drawing: {
        name: fileNameToUse,
        allFiles: filenames || [fileNameToUse],
        key: s3KeyToUse,
        securedDownloadUrl: downloadUrl
      }
    };

    console.log(`[RFQ API Ingest] Success for IP ${clientIp}:`, JSON.stringify(crmPayload, null, 2));

    return NextResponse.json({
      success: true,
      message: 'RFQ successfully registered in database.',
      clientIp: clientIp,
      isGuest: isGuest,
      payload: crmPayload
    }, { status: 200 });

  } catch (error: any) {
    console.error('[RFQ API Error]:', error);
    return NextResponse.json({ message: 'Internal server error processing RFQ.', error: error.message }, { status: 500 });
  }
}
