import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const steelGrade = searchParams.get('steelGrade');
  const finishing = searchParams.get('finishing');
  const tolerance = searchParams.get('tolerance');
  const quantity = Number(searchParams.get('quantity') || 0);

  const guidanceItems = [];

  // Dynamic context-aware advice based on user inputs
  if (steelGrade === 'S355J2+N') {
    guidanceItems.push({
      id: 'grade-s355',
      severity: 'LOW',
      message: 'S355J2+N has excellent weldability and toughness. Ideal choice for heavy structures.',
      actionableSteps: ['Ensure pre-heating specifications are detailed in notes.'],
      evidenceLinks: ['https://metalhub.com/en/standards/en-10025']
    });
  } else if (steelGrade === 'S235JR') {
    guidanceItems.push({
      id: 'grade-s235',
      severity: 'MEDIUM',
      message: 'S235JR is standard grade steel. For dynamic structures, S355 is recommended.',
      actionableSteps: ['Consider upgrading to S355 if load limits are high.'],
      evidenceLinks: []
    });
  }

  if (finishing === 'galvanized') {
    guidanceItems.push({
      id: 'finish-galv',
      severity: 'LOW',
      message: 'Hot-Dip Galvanizing requires vent holes in hollow sections to prevent explosion during dipping.',
      actionableSteps: ['Confirm CAD drawing contains vent holes for hollow profiles.'],
      evidenceLinks: ['https://metalhub.com/en/guidelines/galvanizing-vent-holes']
    });
  }

  if (tolerance === 'fine') {
    guidanceItems.push({
      id: 'tolerance-fine',
      severity: 'MEDIUM',
      message: 'Fine tolerances (ISO 2768-f) significantly increase machining costs.',
      actionableSteps: ['Verify if standard tolerances (ISO 2768-m) are sufficient for non-mating faces.'],
      evidenceLinks: []
    });
  }

  if (quantity > 0 && quantity < 5) {
    guidanceItems.push({
      id: 'qty-low',
      severity: 'MEDIUM',
      message: 'Low volume orders have higher setup overheads per unit.',
      actionableSteps: ['Consider increasing quantity to 10+ to optimize batch setups.'],
      evidenceLinks: []
    });
  }

  // Base indicator
  guidanceItems.push({
    id: 'base-compliance',
    severity: 'LOW',
    message: 'Form complies with ISO 9001 quality management tracking.',
    actionableSteps: [],
    evidenceLinks: []
  });

  return NextResponse.json({ guidanceItems });
}
