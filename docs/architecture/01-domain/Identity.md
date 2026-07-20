# Identity

## Definition
The digital representation and verified attributes of an Actor (Organization, Person, or System Agent) within MetalHub. Philosophically, Identity is the anchor of accountability and reputation, reflecting not just who someone is, but their Character, Essence, and standing in the ecosystem.

## Responsibilities
- Provide secure authentication and role-based access control.
- Maintain the unified profile of capabilities, certifications, and historical performance.
- Serve as the nexus for Trust Capital, Experience, and the Identity Compass.

## Relationships
- Belongs to a `Supplier`, `Buyer`, `Engineer`, or `System`.
- Accumulates `Experience` and `Trust`.
- Governed by the `Identity Discovery Framework (IAF)` and `Identity Mirror`.

## States
- `Unverified`: Email/basic details registered, but identity not proven.
- `Verified`: KYC/KYB checks completed; identity is trusted.
- `Suspended`: Access revoked due to violations.

## Business Rules
- Identity verification is mandatory for executing Contracts or accessing sensitive RFQs.
- Organizational identities can encompass multiple Person identities (employees) with varying roles.
- Trust Capital is inherently tied to Identity and cannot be transferred.

## Events
- `IdentityCreated`
- `IdentityVerified`
- `RoleAssigned`
- `IdentitySuspended`
