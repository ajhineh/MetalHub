# Supplier

## Definition
A business entity, manufacturer, or service provider within the MetalHub ecosystem that contributes industrial capabilities, materials, and execution capacity. Philosophically, the Supplier is the backbone of the industrial ecosystem, transforming raw potential and digital requirements into physical reality.

## Responsibilities
- Accurately represent engineering capabilities, capacity, and certifications.
- Review and respond to RFQs with comprehensive, transparent, and technically sound Offers.
- Execute contracted work adhering strictly to quality standards and delivery timelines.
- Foster trust by generating transparent Evidence of work, inspections, and compliance.
- Actively participate in the industrial memory by contributing to lessons learned and capability growth.

## Relationships
- Responds to `RFQ`s created by `Buyer`s.
- Submits `Offer`s that may convert into `Contract`s.
- Collaborates on `Project`s.
- Profile and capabilities are continuously evaluated by the `Trust` and `Risk` engines.

## States
- `Onboarding`: Entity is creating their profile and submitting preliminary identity/capability data.
- `Verified`: Identity and core capabilities are confirmed by MetalHub.
- `Active`: Available for matching and actively participating in the ecosystem.
- `Restricted`: Limited participation due to quality, delivery, or compliance issues.
- `Suspended`: Removed from active matching due to severe breaches of Trust.

## Business Rules
- Must maintain a minimum Industrial Maturity Index (IMI) for premium RFQ matching.
- Any capability claim must be backed by valid `Evidence` (e.g., certificates, past performance).
- Cannot bid on RFQs if current operational capacity is exceeded.

## Events
- `SupplierOnboarded`
- `SupplierVerified`
- `CapabilityAdded`
- `TrustScoreUpdated`
