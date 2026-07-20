# Decision Aggregate

## Overview
The Decision Aggregate encapsulates the recording of choices made within the platform, maintaining the history, context, and outcomes of these choices to drive the continuous learning and Trust engines.

## Aggregate Root: `Decision`
- **Id**: `DecisionId` (UUID)
- **ActorId**: `IdentityId` (The Human or AI that made the choice)
- **ContextType**: `String` (e.g., "Supplier Selection", "Risk Override")
- **ContextId**: `String` (UUID of the related entity like RFQId)
- **State**: `DecisionState` (Proposed, Committed, Evaluated, Reverted)
- **CreatedAt**: `Timestamp`

## Entities
### `Alternative`
Represents an option that was considered but potentially not chosen.
- **Id**: `AlternativeId`
- **Description**: `String`
- **IsSelected**: `Boolean`
- **EvaluationScore**: `Float`

### `EvidenceLink`
Links the decision to the data used to make it.
- **Id**: `EvidenceId`
- **SourceUrl / DocumentId**: `String`
- **ConfidenceScore**: `Float`

## Value Objects
### `DecisionState`
Enum: `Proposed`, `Committed`, `Evaluated`, `Reverted`

### `OutcomeMetric`
- **MetricName**: `String`
- **ExpectedValue**: `Float`
- **ActualValue**: `Float` (Populated during Evaluation)

## Domain Events
- `DecisionProposed` { DecisionId, ActorId, Context }
- `DecisionCommitted` { DecisionId, SelectedAlternativeId }
- `DecisionEvaluated` { DecisionId, OutcomeMetrics }
- `DecisionReverted` { DecisionId, Reason }

## Write Model (Commands)
- `ProposeDecision(Actor, Context, Alternatives)`
- `CommitDecision(DecisionId, SelectedAlternativeId, Evidence)`
- `EvaluateDecision(DecisionId, ActualMetrics)`
- `RevertDecision(DecisionId, Reason)`

## Read Model (Projections)
- **Decision Audit Log**: Read-optimized view for tracing the history of choices on a specific RFQ or Contract.
- **Actor Decision History**: View of all decisions made by a specific Identity.
