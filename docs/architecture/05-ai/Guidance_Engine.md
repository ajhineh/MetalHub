# Guidance Engine

## Purpose
The Guidance Engine is the core component responsible for manifesting the "Silent Mentor" and "Calm Intelligence" philosophies within MetalHub. It provides actionable, context-aware recommendations that empower users without overwhelming them.

## Core Responsibilities
- **Contextual Awareness**: Understand the current state of the user's workflow (e.g., drafting an RFQ, evaluating a proposal).
- **Proactive Assistance**: Identify potential errors, missing evidence, or compliance gaps before they become issues.
- **Silent Education**: Elevate the user's domain knowledge through timely, in-context hints rather than disruptive tutorials.
- **Human Empowerment**: Offer recommendations, but always defer to human judgment for final decisions. 

## Architectural Components
- **Context Analyzer**: Evaluates the current state (UI context, draft data).
- **Rule Engine**: Applies static business rules and domain logic.
- **AI Recommender**: Utilizes the Knowledge Graph to generate insights based on historical patterns.
- **Delivery Formatter**: Structures the guidance to adhere to the Calm Intelligence guidelines (non-intrusive, clear, empowering).

## Integration Points
- Consumes events from the `State Management` layer.
- Queries the `Knowledge Graph` for historical context.
- Outputs `Guidance` objects consumed by the `07-ui` layer.
