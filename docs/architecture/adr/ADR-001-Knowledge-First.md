# ADR-001: Knowledge-First Architecture

## Status
Accepted

## Context
Industrial platforms often fail because they treat data as a byproduct of transactions rather than the primary asset. We need an architectural approach that ensures every interaction enriches the platform.

## Decision
We will adopt a "Knowledge-First" architecture. All data models, workflows, and system interactions must be designed to capture context and build Industrial Memory.

## Rationale
- Aligns with **PRN-011: Knowledge Must Compound**.
- Ensures **Knowledge Continuity (PRN-020)** so that information is independent of individuals' memory.
- Prioritizes long-term value over short-term transactional speed.

## Consequences
- Requires more upfront design for data schemas.
- Storage costs may increase due to retaining comprehensive context and audit logs.
- Long-term platform defensibility and trust will be significantly enhanced.
