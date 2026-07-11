import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  let fromNumber = '';
  try {
    const formData = await request.formData();
    fromNumber = (formData.get('From') as string) || '';
  } catch {
    // Fallback if parsing form data fails (e.g., direct JSON payloads in testing)
    fromNumber = '';
  }

  // Default Fallback Mapping (Global English)
  let greetingText = "Welcome to MetalHub. Please note that this call is recorded. To speak directly in English with automatic transcription, press 1. For real-time AI voice translation in your native language, press 2.";
  let voiceLanguage = 'en-US';
  let ttsVoice = 'Polly.Joanna-Neural';

  // 1. Norway (+47)
  if (fromNumber.startsWith('+47')) {
    greetingText = "Velkommen til MetalHub. Vennligst merk at denne samtalen blir tatt opp. For å snakke direkte på engelsk med automatisk transkripsjon, trykk 1. For sanntids AI-oversettelse på ditt eget språk, trykk 2.";
    voiceLanguage = 'no-NO';
    ttsVoice = 'Polly.Ida-Neural';
  } 
  // 2. France/Belgium (+33, +32)
  else if (fromNumber.startsWith('+33') || fromNumber.startsWith('+32')) {
    greetingText = "Bienvenue chez MetalHub. Veuillez noter que cet appel est enregistré. Pour parler directement en anglais avec transcription automatique, appuyez sur 1. Pour la traduction vocale IA en temps réel dans votre langue maternelle, appuyez sur 2.";
    voiceLanguage = 'fr-FR';
    ttsVoice = 'Polly.Lea-Neural';
  }
  // 3. Germany (+49)
  else if (fromNumber.startsWith('+49')) {
    greetingText = "Willkommen bei MetalHub. Bitte beachten Sie, dass dieses Gespräch aufgezeichnet wird. Um direkt auf Englisch mit automatischer Transkription zu sprechen, drücken Sie 1. Für eine KI-Echtzeit-Sprachübersetzung in Ihrer Muttersprache drücken Sie 2.";
    voiceLanguage = 'de-DE';
    ttsVoice = 'Polly.Marlene-Neural';
  }
  // 4. Netherlands (+31)
  else if (fromNumber.startsWith('+31')) {
    greetingText = "Welkom bij MetalHub. Let op: dit gesprek wordt opgenomen. Druk op 1 om direct in het Engels te spreken met automatische transcriptie. Druk op 2 voor realtime AI-spraakvertaling in uw eigen taal.";
    voiceLanguage = 'nl-NL';
    ttsVoice = 'Polly.Lotte-Neural';
  }
  // 5. Spain (+34)
  else if (fromNumber.startsWith('+34')) {
    greetingText = "Bienvenido a MetalHub. Tenga en cuenta que esta llamada está siendo grabada. Para hablar directamente en inglés con transcripción automática, presione 1. Para traducción de voz por IA en tiempo real en su idioma nativo, presione 2.";
    voiceLanguage = 'es-ES';
    ttsVoice = 'Polly.Conchita-Neural';
  }
  // 6. Italy (+39)
  else if (fromNumber.startsWith('+39')) {
    greetingText = "Benvenuto in MetalHub. Si prega di notare che questa chiamata è registrata. Per parlare direttamente in inglese con trascrizione automatica, prema 1. Per la traduzione vocale AI in tempo reale nella sua lingua madre, prema 2.";
    voiceLanguage = 'it-IT';
    ttsVoice = 'Polly.Bianca-Neural';
  }
  // 7. Poland (+48)
  else if (fromNumber.startsWith('+48')) {
    greetingText = "Witamy w MetalHub. Informujemy, że ta rozmowa jest nagrywana. Aby rozmawiać bezpośrednio po angielsku z automatyczną transkrypcją, naciśnij 1. Aby uzyskać tłumaczenie głosowe AI w czasie rzeczywistym w swoim języku ojczystym, naciśnij 2.";
    voiceLanguage = 'pl-PL';
    ttsVoice = 'Polly.Ola-Neural';
  }
  // 8. Sweden (+46)
  else if (fromNumber.startsWith('+46')) {
    greetingText = "Välkommen till MetalHub. Observera att detta samtal spelas in. För att tala direkt på engelska med automatisk transkribering, tryck 1. För AI-röstöversättning i realtid på ditt modersmål, tryck 2.";
    voiceLanguage = 'sv-SE';
    ttsVoice = 'Polly.Astrid-Neural';
  }

  // TwiML Response connecting to IVR Gather
  const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Gather numDigits="1" action="/api/voip/menu-selection" method="POST" timeout="10">
    <Say language="${voiceLanguage}" voice="${ttsVoice}">${greetingText}</Say>
  </Gather>
  <Redirect>/api/voip/inbound</Redirect>
</Response>`;

  return new NextResponse(twiml, { 
    headers: { 'Content-Type': 'text/xml' } 
  });
}
