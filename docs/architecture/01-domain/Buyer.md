# Buyer

## Definition
An entity (client, project owner, or procurement body) that injects demand, requirements, and capital into the MetalHub ecosystem. Philosophically, the Buyer is the catalyst for creation, translating abstract needs into concrete requests that drive the industrial engine.

## Responsibilities
- Articulate clear, unambiguous engineering and commercial requirements through RFQs.
- Evaluate Offers based on a balance of cost, risk, quality, and supplier capability.
- Manage Projects and provide timely feedback, approvals, and payments.
- Contribute to Supplier evaluation and ecosystem Trust through objective reviews and Evidence submission.

## Relationships
- Creates `Project`s and issues `RFQ`s.
- Evaluates `Offer`s from `Supplier`s.
- Enters into `Contract`s to secure supply.
- Interacts with `Guidance` and `Decision` objects to optimize procurement strategies.

## States
- `Registered`: Basic identity established.
- `Verified`: Financial and organizational identity confirmed.
- `Active`: Actively sourcing and managing projects.
- `Suspended`: Temporarily halted due to payment defaults or compliance violations.

## Business Rules
- RFQs must meet minimum clarity and completeness thresholds before being broadcast to Suppliers.
- Must adhere to the contractual payment terms as recorded in the Ledger.
- Decisions made by the Buyer are recorded in the `Decision` graph for continuous learning.

## Events
- `BuyerVerified`
- `DemandInitiated`
- `FeedbackProvided`
- `BuyerSuspended`
