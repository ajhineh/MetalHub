# Workflow

## Definition
A defined, orchestrated sequence of states, tasks, and events that govern a specific business, engineering, or commercial process within MetalHub. Philosophically, a Workflow is the digital physics of the platform—ensuring order, compliance, and predictable progression of complex collaborative efforts.

## Responsibilities
- Enforce the sequence of operations (e.g., RFQ Creation -> Publication -> Bidding -> Award).
- Automate state transitions based on rules and AI evaluations.
- Coordinate the handoff of responsibilities between Human Actors and System Agents.
- Ensure no steps are skipped, particularly regarding compliance and Evidence gathering.

## Relationships
- Orchestrates `Task`s.
- Transitions the `State` of domain objects like `RFQ`, `Offer`, and `Contract`.
- Triggered by `Event`s.
- Monitored by the `Coordination Reasoning Engine`.

## States
- `Initiated`: The workflow has started.
- `Running`: Tasks are actively being executed.
- `Blocked`: Waiting on external input, evidence, or a critical decision.
- `Completed`: The sequence has successfully finished.
- `Terminated`: Halted abnormally.

## Business Rules
- Workflows must be resilient, capable of handling edge cases, revisions, and rollbacks.
- Must maintain a comprehensive audit log of every transition.
- Certain transitions require multi-party consensus (e.g., Contract Signing).

## Events
- `WorkflowStarted`
- `StepCompleted`
- `WorkflowBlocked`
- `WorkflowCompleted`
