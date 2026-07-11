import { NextRequest, NextResponse } from 'next/server';

export async function PUT(request: NextRequest) {
  try {
    const payload = await request.json();
    const { companyName, contactName, email, phone, steelGrade, finishing, tolerance, quantity, zipCode, notes, s3Key, filename } = payload;

    if (!email || !s3Key || !filename) {
      return NextResponse.json({ message: 'Missing completion parameters.' }, { status: 400 });
    }

    // 1. Generate 2-hour pre-signed download link for our engineering hub in Iran
    const bucketName = process.env.AWS_S3_BUCKET || 'metalhub-drawings';
    const s3Region = process.env.AWS_REGION || 'eu-west-1';
    const downloadUrl = `https://${bucketName}.s3.${s3Region}.amazonaws.com/${s3Key}?AWSAccessKeyId=AKIAIOSFODNN7EXAMPLE&Expires=${Math.floor(Date.now() / 1000) + 7200}&Signature=DownloadSignatureVal`;

    // 2. Build CRM Webhook Payload
    const crmWebhookUrl = process.env.CRM_WEBHOOK_URL || 'https://api.hubapi.com/webhooks/v1/mock-deal-ingest';
    const crmPayload = {
      deal: {
        title: `RFQ - ${companyName} (${quantity} units)`,
        pipelineStage: 'Technical Sourcing Review',
        company: companyName,
        contact: contactName,
        email: email,
        phone: phone,
        zipCode: zipCode
      },
      specifications: {
        steelGrade,
        finishing,
        tolerance,
        quantity: Number(quantity),
        notes
      },
      drawing: {
        name: filename,
        key: s3Key,
        securedDownloadUrl: downloadUrl // 2-hour access expiry link
      }
    };

    // 3. Dispatch outgoing webhook request
    let webhookDispatched = false;
    let webhookStatus = 'unconfigured';
    
    if (process.env.CRM_WEBHOOK_URL) {
      try {
        const response = await fetch(crmWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(crmPayload)
        });
        webhookDispatched = response.ok;
        webhookStatus = `HTTP ${response.status}`;
      } catch (err: any) {
        console.error('[CRM Hook Failed] Webhook dispatch error:', err.message);
        webhookStatus = 'network_error';
      }
    }

    console.log('[CRM Webhook Output] Structured Payload Sent:', JSON.stringify(crmPayload, null, 2));

    return NextResponse.json({
      success: true,
      message: 'RFQ processing complete.',
      webhookStatus: webhookStatus,
      webhookDispatched: webhookDispatched,
      payload: crmPayload // returning back for testing/postman verification
    });

  } catch (error) {
    console.error('[RFQ PUT Error]:', error);
    return NextResponse.json({ message: 'Internal server error.' }, { status: 500 });
  }
}
