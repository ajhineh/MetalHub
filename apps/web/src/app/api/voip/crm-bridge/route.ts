import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    
    // Extract Metadata from RFQ Submission or VoIP Pipeline
    const { callerNumber, steelGrade, quantity, drawingUrl, notes } = payload;

    const cardName = `[RFQ] New Request - ${callerNumber || 'Web Portal'}`;
    const cardDescription = `
**SideroHub Automated Ingest**
---
* **Steel Grade Required:** ${steelGrade || 'Not Specified'}
* **Quantity/Volume:** ${quantity || 'Not Specified'}
* **S3 Secure Link:** [Download CAD Drawing](${drawingUrl || '#'})
* **System Call Notes:** ${notes || 'No extra notes provided.'}
    `.trim();

    // Construct Direct Trello REST API Endpoint Target
    const trelloUrl = `https://api.trello.com/1/cards?idList=${process.env.TRELLO_LIST_ID}&key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_TOKEN}&name=${encodeURIComponent(cardName)}&desc=${encodeURIComponent(cardDescription)}`;

    const trelloResponse = await fetch(trelloUrl, {
      method: 'POST',
      headers: { 'Accept': 'application/json' }
    });

    if (!trelloResponse.ok) {
      const errorText = await trelloResponse.text();
      console.error('Trello API Connection Failed:', errorText);
      return NextResponse.json({ error: 'Failed to push to CRM board' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Card successfully spawned in Trello instantly.' });
  } catch (error: any) {
    console.error('CRM Routing Exception:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
