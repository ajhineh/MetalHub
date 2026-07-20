# Task

## Definition
A specific, bounded unit of work or action assigned to an Actor (human or system) within the context of a Workflow or Project. Philosophically, a Task is the fundamental quantum of action, translating macro-goals into actionable, trackable human or machine effort.

## Responsibilities
- Clearly define what needs to be done, by whom, and by when.
- Provide the context and tools required to complete the action.
- Serve as the collection point for `Evidence` of completion.

## Relationships
- Component of a `Workflow` or `Project`.
- Assigned to an `Identity` (Human or Agent).
- Completion often requires submitting a `Document` or `Decision`.

## States
- `Created`: Task defined but not yet ready for action.
- `Pending`: Waiting for preceding tasks to complete.
- `Assigned`: Ready and waiting for the assignee to act.
- `InProgress`: Actively being worked on.
- `InReview`: Awaiting validation of the submitted evidence.
- `Completed`: Successfully finished.
- `Overdue`: Timeline breached.

## Business Rules
- A task cannot be marked `Completed` until its required validation (Evidence) is accepted.
- Automated system tasks must complete within defined SLAs; otherwise, they escalate to human review.
- Tasks represent the primary interface for calculating "Decision Friction."

## Events
- `TaskAssigned`
- `TaskStarted`
- `TaskCompleted`
- `TaskEscalated`
