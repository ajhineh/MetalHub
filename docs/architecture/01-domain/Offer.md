# Offer

## Definition
A comprehensive proposal submitted by a Supplier in response to an RFQ, detailing price, lead time, technical approach, and terms. Philosophically, the Offer is a commitment of capability and capacity, a promise to transform the Buyer's requirement into reality.

## Responsibilities
- Provide transparent and accurate cost breakdowns and delivery schedules.
- Detail the manufacturing or engineering process to be utilized.
- Highlight any deviations, assumptions, or alternative technical proposals.
- Serve as the foundational document for a potential Contract.

## Relationships
- Responds to a specific `RFQ`.
- Authored by a `Supplier`.
- Evaluated by the `Buyer` (often with assistance from the `Cost` and `Risk` Engines).
- Evolves into a `Contract` if accepted.

## States
- `Draft`: Being formulated by the Supplier.
- `Submitted`: Officially locked and presented to the Buyer.
- `UnderReview`: Being evaluated.
- `Accepted`: Chosen by the Buyer.
- `Rejected`: Not selected.
- `Withdrawn`: Retracted by the Supplier before acceptance.

## Business Rules
- Once `Submitted`, it cannot be modified without a formal revision requested by the Buyer.
- Must remain valid for a specified validity period.
- Acceptance of an Offer automatically triggers the `Contract` generation workflow.

## Events
- `OfferSubmitted`
- `OfferRevised`
- `OfferAccepted`
- `OfferRejected`
