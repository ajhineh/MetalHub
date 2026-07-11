import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  let digits = '';
  let callSid = '';
  try {
    const formData = await request.formData();
    digits = (formData.get('Digits') as string) || '';
    callSid = (formData.get('CallSid') as string) || '';
  } catch {
    digits = '';
    callSid = '';
  }

  const centralHubNumber = process.env.CENTRAL_HUB_PHONE_NUMBER || '+37255555555';
  const domain = process.env.NEXT_PUBLIC_DOMAIN || 'localhost:3000';
  const protocol = domain.includes('localhost') ? 'ws' : 'wss';

  if (digits === '1') {
    // PATH A: Direct English Call + Native Recording & CRM Ingestion
    const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="Polly.Joanna-Neural" language="en-US">Connecting you to the engineering hub in English.</Say>
  <Record action="/api/voip/recording-complete" maxLength="1800" playBeep="true" />
  <Dial>
    <Number>${centralHubNumber}</Number>
  </Dial>
</Response>`;

    return new NextResponse(twiml, { 
      headers: { 'Content-Type': 'text/xml' } 
    });
  } 
  
  if (digits === '2') {
    // PATH B: Seamless Bi-directional AI Voice WebSocket Streaming Engine
    const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="Polly.Joanna-Neural" language="en-US">Initializing real-time AI translation voice engine.</Say>
  <Connect>
    <Stream url="${protocol}://${domain}/api/voip/stream">
      <Parameter name="callSid" value="${callSid}" />
    </Stream>
  </Connect>
</Response>`;

    return new NextResponse(twiml, { 
      headers: { 'Content-Type': 'text/xml' } 
    });
  }

  // Fallback if an invalid key is pressed or time-out occurs
  const fallbackTwiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Redirect>/api/voip/inbound</Redirect>
</Response>`;

  return new NextResponse(fallbackTwiml, { 
    headers: { 'Content-Type': 'text/xml' } 
  });
}
