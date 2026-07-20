# ADR-002: The Silent Advisor Pattern

## Status
Accepted

## Context
Users in industrial settings require guidance to navigate complex decisions, but they reject systems that attempt to replace their judgment or force them into rigid paths.

## Decision
We will implement the "Silent Advisor" pattern for all AI and recommendation systems. The system will provide context-aware, evidence-based recommendations alongside the user's workflow, but will never auto-execute critical decisions or obstruct the user from overriding the advice.

## Rationale
- Strongly supports **PRN-001: MetalHub empowers humans**.
- Adheres to **APR-001: MetalHub does not replace humans**.
- Aligns with **PRN-003: Guidance must be adaptive**.

## Consequences
- UI/UX design must carefully balance visibility of guidance without creating distraction.
- We must track when users accept or reject the advisor's recommendations to improve the models (Evidence Over Claims).
- Builds user trust gradually rather than demanding it upfront.
