# Contract

## Definition
A legally binding agreement between a Buyer and a Supplier, codifying the accepted Offer into enforceable obligations. Philosophically, the Contract is the ultimate expression of trust and alignment, transforming promises into measurable, tracked milestones.

## Responsibilities
- Define the exact scope of work, deliverables, and acceptance criteria.
- Establish the financial terms, payment milestones, and penalties/incentives.
- Govern the dispute resolution process and liability boundaries.
- Act as the ultimate source of truth for the execution phase.

## Relationships
- Binds a `Buyer` and a `Supplier`.
- Instantiated from an `Offer` and an `RFQ`.
- Drives `Workflow`s, `Task`s, and `Payment`s.
- Monitored by the `Execution Engine` and `Risk Engine`.

## States
- `Drafting`: Contract terms are being finalized and aligned.
- `PendingSignatures`: Awaiting cryptographic approval from authorized representatives.
- `Active`: In full effect and execution.
- `InDispute`: Execution halted or contested due to disagreements.
- `Fulfilled`: All obligations met and closed.
- `Terminated`: Ended prematurely.

## Business Rules
- Must be cryptographically signed by verified Identities representing both parties.
- Any change in scope requires a formal Change Order process, generating a new `Decision`.
- Milestones are explicitly tied to the submission and validation of `Evidence`.

## Events
- `ContractGenerated`
- `ContractSigned`
- `MilestoneAchieved`
- `ContractFulfilled`
