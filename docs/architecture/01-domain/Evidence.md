# Evidence

## Definition
Verifiable data, documents, digital signatures, or system traces that prove a claim, the completion of a task, or compliance with a standard. Philosophically, Evidence is the currency of Truth in MetalHub, combating uncertainty and replacing blind trust with cryptographic and factual certainty.

## Responsibilities
- Validate the physical reality against digital requirements.
- Build the "Evidence Graph" and prevent "Evidence Debt" in projects.
- Serve as the unassailable foundation for dispute resolution and Trust Capital calculation.

## Relationships
- Required by `Task`s, `Workflow`s, and `Contract`s.
- Supports `Decision`s and `Knowledge` creation.
- Usually takes the form of a `Document`, `Inspection Report`, or `Metadata`.

## States
- `Requested`: Required by the system but not yet provided.
- `Submitted`: Uploaded or generated but pending validation.
- `Verified`: Authenticated by AI (e.g., OCR, semantic check) or human inspectors.
- `Rejected`: Deemed invalid, incomplete, or fraudulent.

## Business Rules
- Critical evidence must be immutable once verified (e.g., anchored to a Ledger).
- The system proactively flags "Evidence Debt" when processes move forward without required proofs.
- AI Agents must perform first-pass validation on all submitted Evidence to reduce friction.

## Events
- `EvidenceRequested`
- `EvidenceSubmitted`
- `EvidenceVerified`
- `EvidenceRejected`
