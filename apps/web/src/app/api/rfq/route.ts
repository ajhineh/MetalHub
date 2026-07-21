import { NextRequest, NextResponse } from 'next/server';

// Global in-memory IP tracking store
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

    // Extract client IP
    const forwardedFor = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const clientIp = (forwardedFor ? forwardedFor.split(',')[0].trim() : realIp) || '127.0.0.1';

    const fileNameToUse = filename || (Array.isArray(filenames) && filenames[0]) || 'technical-drawing.pdf';
    const s3KeyToUse = s3Key || `drawings/${Date.now()}-${fileNameToUse}`;

    if (!email) {
      return NextResponse.json({ message: 'Missing required contact parameter: email.' }, { status: 400 });
    }

    // Strict Anti-Spam Rate Limiting for Unauthenticated Guests (1 submission per 24h)
    if (isGuest && !isAuthenticated) {
      const now = Date.now();
      const ipRecord = guestIpStore.get(clientIp);

      if (ipRecord) {
        // Reset if 24h passed
        if (now - ipRecord.lastSubmission > 24 * 60 * 60 * 1000) {
          guestIpStore.set(clientIp, { count: 1, lastSubmission: now });
        } else {
          // Block subsequent guest submissions from this IP
          return NextResponse.json({
            success: false,
            rateLimited: true,
            message: `Guest rate limit exceeded for IP address ${clientIp}. Multiple unauthenticated submissions are restricted to prevent spam. Please sign in to submit additional RFQs.`
          }, { status: 429 });
        }
      } else {
        guestIpStore.set(clientIp, { count: 1, lastSubmission: now });
      }
    }

    const bucketName = process.env.AWS_S3_BUCKET || 'SideroHub-drawings';
    const downloadUrl = `https://${bucketName}.s3.amazonaws.com/${s3KeyToUse}`;

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
