# Request for Quotation (RFQ)

## Definition
A formal solicitation issued by a Buyer seeking technical proposals and commercial bids. Philosophically, the RFQ is the translation of an abstract desire into a structured problem statement, seeking the optimal industrial solution from the ecosystem.

## Responsibilities
- Clearly define technical specifications, drawings, BOMs, and compliance requirements.
- Establish the commercial framework, including delivery terms (Incoterms), timelines, and payment structures.
- Act as the matching criteria for the Supplier Recommendation Engine.

## Relationships
- Belongs to a `Project` and is owned by a `Buyer`.
- Targets specific `Capability` profiles.
- Generates multiple `Offer`s from `Supplier`s.
- Incorporates `Document`s (Drawings, Specs).

## States
- `Draft`: Being prepared by the Buyer, assisted by AI Engines for completeness.
- `Published`: Broadcasted to eligible Suppliers.
- `Evaluating`: Receiving and analyzing Offers.
- `Awarded`: A Supplier has been selected.
- `Closed`: Process concluded (either awarded or cancelled).

## Business Rules
- Must pass the Engineering Reasoning Engine's completeness check before `Published`.
- Cannot be altered once `Published` without issuing a formal `Revision`.
- All interactions, Q&A, and clarifications must be recorded immutably.

## Events
- `RFQDrafted`
- `RFQPublished`
- `ClarificationRequested`
- `RFQAwarded`
