# Experience

## Definition
The accumulated, contextual, and verified track record of an Actor (Supplier or Buyer) over time. Philosophically, Experience is the digital footprint of competence and reliability, moving beyond static claims to proven, lived reality.

## Responsibilities
- Aggregate historical performance metrics (on-time delivery, defect rates, responsiveness).
- Serve as the foundation for the Trust Capital and Industrial Maturity Index.
- Provide contextual proof of a Supplier's capability to execute complex or novel requirements.

## Relationships
- Attached to an `Identity` (Supplier or Buyer).
- Built from completed `Project`s, `Contract`s, and validated `Evidence`.
- Informs the `Supplier Matching Engine` and `Decision Review Board`.

## States
- `Emergent`: New actor with limited history; baseline experience.
- `Established`: Consistent track record with predictable performance.
- `Expert/Master`: Deep, proven capability in specialized domains.

## Business Rules
- Experience cannot be self-asserted; it must be derived from actual platform activity and verified `Evidence`.
- Recent experience carries a higher weighting than historical experience (decay function).
- Negative experiences (failures, disputes) are recorded immutably but can be mitigated through demonstrated corrective actions (Learning Decisions).

## Events
- `ExperienceAccrued`
- `MaturityIndexUpdated`
- `PerformanceReviewCompleted`
