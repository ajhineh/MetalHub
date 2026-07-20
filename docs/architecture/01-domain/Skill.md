# Skill

## Definition
A specific competency, certification, or manufacturing capability possessed by an Actor. Philosophically, a Skill is the atomic unit of potential, defining what an entity is genuinely capable of executing with high quality.

## Responsibilities
- Allow precise, granular matching between Buyer requirements and Supplier capabilities.
- Track the lifecycle and validity of certifications (e.g., ISO standards, specific welding certifications).
- Form the basis of the Industrial Capability Network (ICN).

## Relationships
- Owned by an `Identity` (usually a `Supplier` or `Person`).
- Targeted by `RFQ`s.
- Validated by `Evidence` (Certificates, past Projects).

## States
- `Claimed`: Asserted by the actor but unverified.
- `Verified`: Backed by valid Evidence or successful platform execution.
- `Expired`: Certification or capability is no longer valid.

## Business Rules
- Critical skills (e.g., pressure vessel welding) remain `Claimed` (and thus unusable for critical RFQs) until strict `Evidence` is verified.
- Skills naturally decay if not utilized or re-certified over time.
- The system actively suggests Skill acquisitions based on market demand via the Learning Backlog.

## Events
- `SkillAdded`
- `SkillVerified`
- `SkillExpired`
