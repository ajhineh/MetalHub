# Project

## Definition
A bounded, temporal endeavor within MetalHub designed to achieve a specific engineering, manufacturing, or construction outcome. Philosophically, a Project is a localized universe of collaboration, combining human expertise, digital information, physical materials, and financial capital.

## Responsibilities
- Aggregate related RFQs, Contracts, Tasks, and Workflows into a coherent structure.
- Track progress, milestones, and deliverables against timelines and budgets.
- Serve as the primary context for contextualizing Decisions, Evidence, and Risks.
- Ensure end-to-end traceability of the Digital Thread from need to final delivery.

## Relationships
- Owned by a `Buyer`.
- Involves multiple `Supplier`s and internal `Actor`s.
- Contains `RFQ`s, `Contract`s, `Document`s, and `Task`s.
- Governed by `Workflow`s.

## States
- `Draft`: Project scope is being defined.
- `Planning`: Requirements are being gathered, and initial RFQs drafted.
- `Execution`: Contracts are active, and physical/intellectual work is underway.
- `Closing`: Final deliveries, inspections, and financial settlements are concluding.
- `Completed`: All obligations met, and industrial memory extracted.
- `Cancelled`: Halted before completion.

## Business Rules
- A Project cannot be marked `Completed` until all associated Contracts are closed and Evidence is fully verified.
- Access to Project data is restricted to authorized entities based on the Trust Architecture.
- Must maintain a comprehensive Decision Record for all major phase gates.

## Events
- `ProjectInitiated`
- `PhaseChanged`
- `MilestoneReached`
- `ProjectCompleted`
