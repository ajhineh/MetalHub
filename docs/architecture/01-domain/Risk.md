# Risk

## Definition
A quantifiable uncertainty or potential negative event that could impact the success of a Project, Contract, or the broader ecosystem. Philosophically, Risk is the friction of reality—the acknowledgment that engineering and supply chains operate in imperfect environments requiring constant vigilance and mitigation.

## Responsibilities
- Identify, quantify, and track potential failures in technical execution, commercial delivery, or compliance.
- Trigger preemptive Guidance and Workflow adjustments to mitigate probability or impact.
- Maintain a transparent risk profile for transparent decision-making.

## Relationships
- Identified by the `Risk Reasoning Engine` or Human `Actor`s.
- Attached to `Supplier`s, `RFQ`s, `Contract`s, or `Project`s.
- Mitigated by specific `Task`s or `Decision`s.

## States
- `Identified`: A potential risk is logged.
- `Assessed`: Probability and Impact have been quantified.
- `Mitigated`: Actions have been taken to reduce the risk.
- `Realized`: The risk event has occurred (becomes an Issue).
- `Closed`: The risk is no longer applicable.

## Business Rules
- High-severity risks must be explicitly acknowledged by the responsible Actors before a Contract can be signed.
- Risk profiles are dynamically updated based on incoming `Evidence` and `Events`.
- Risk engines must continuously scan for systemic risks across the ecosystem.

## Events
- `RiskIdentified`
- `RiskLevelChanged`
- `RiskRealized`
- `RiskMitigated`
