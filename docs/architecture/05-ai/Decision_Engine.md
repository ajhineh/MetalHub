# Decision Engine

## Purpose
The Decision Engine operationalizes the principle that "Every Decision Must Be Traceable" and "Evidence Over Claims". It is the system that evaluates risks, scores suppliers, and records the logic behind every significant action taken on the platform.

## Core Responsibilities
- **Evidence Validation**: Ensure decisions (like awarding a contract) are backed by verifiable data rather than unstructured claims.
- **Decision Traceability**: Record the context, inputs, and rationale for every decision to ensure "Decision Continuity" for future reference.
- **Risk Assessment**: Automatically evaluate the risk profile of projects, suppliers, and contracts.

## Architectural Components
- **Evidence Verifier**: Checks the completeness and validity of provided documents and data.
- **Risk Scorer**: Computes a risk score based on historical data and current inputs.
- **Audit Logger**: Immutably records the state and rationale of the decision.

## Integration Points
- Integrates with the `Knowledge Graph` to pull historical performance data.
- Interacts with the `Guidance Engine` to present risk mitigation strategies to the user.
