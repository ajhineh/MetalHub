# Decision

## Definition
A recorded, immutable choice made by a Human Actor or an AI Engine, along with its context, alternatives considered, and expected outcomes. Philosophically, a Decision is the atomic unit of agency and trajectory change within the architecture, capturing *why* something happened, not just *what* happened.

## Responsibilities
- Document the rationale, evidence, and trade-offs behind a specific action (e.g., selecting a supplier, approving a deviation).
- Facilitate the "Decision Feedback Loop" by comparing expected outcomes against actual results.
- Create an audit trail for accountability and Trust.

## Relationships
- Made by an `Identity` or `System Actor`.
- Driven by `Guidance` and supported by `Evidence`.
- Impacts `Project`s, `Contract`s, and `Risk`s.
- Contributes to `Knowledge` and `Experience`.

## States
- `Proposed`: A decision is recommended but not yet finalized.
- `Committed`: The choice is made and locked.
- `Evaluated`: The outcome of the decision has been measured against expectations.
- `Reverted`: The decision was overturned (requires a new decision record to explain why).

## Business Rules
- Strategic and high-risk decisions require a formal Architecture Decision Record (ADR) or Decision Card.
- Must explicitly link to the Evidence used to make the choice.
- Decisions affecting contracts require cryptographic signature.

## Events
- `DecisionProposed`
- `DecisionCommitted`
- `OutcomeEvaluated`
