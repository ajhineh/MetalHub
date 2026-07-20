# Supplier Aggregate

## Overview
The Supplier Aggregate represents a business entity offering manufacturing capabilities, tracking their verified status, trust score, and operational capacities.

## Aggregate Root: `Supplier`
- **Id**: `SupplierId` (UUID)
- **Name**: `String`
- **TaxId**: `String`
- **Status**: `SupplierStatus` (Onboarding, Verified, Active, Restricted, Suspended)
- **TrustScore**: `TrustScore`
- **CreatedAt**: `Timestamp`

## Entities
### `Capability`
Specific manufacturing process or service the supplier offers.
- **Id**: `CapabilityId`
- **ProcessType**: `String` (e.g., CNC Milling, Laser Cutting)
- **ToleranceLevel**: `String`
- **Verified**: `Boolean`

### `Certification`
Official compliance or quality documents.
- **Id**: `CertificationId`
- **Standard**: `String` (e.g., ISO 9001, AS9100)
- **ValidUntil**: `Date`
- **VerificationStatus**: `VerificationState`

## Value Objects
### `SupplierStatus`
Enum: `Onboarding`, `Verified`, `Active`, `Restricted`, `Suspended`

### `TrustScore`
- **Value**: `Integer` (0-1000)
- **LastUpdated**: `Timestamp`
- **Trend**: `Enum (Rising, Stable, Falling)`

### `Address`
- **Street, City, Region, PostalCode, Country**

## Domain Events
- `SupplierOnboarded` { SupplierId, Name }
- `SupplierVerified` { SupplierId }
- `CapabilityAdded` { SupplierId, CapabilityId, ProcessType }
- `TrustScoreUpdated` { SupplierId, OldScore, NewScore, Reason }
- `SupplierSuspended` { SupplierId, Reason }

## Write Model (Commands)
- `OnboardSupplier(Name, Details)`
- `AddCapability(SupplierId, ProcessType, Details)`
- `VerifySupplier(SupplierId)`
- `UpdateTrustScore(SupplierId, Modifier)`
- `SuspendSupplier(SupplierId, Reason)`

## Read Model (Projections)
- **Supplier Discovery Profile**: Search-optimized projection indexed by Capabilities and TrustScore for the Recommendation Engine.
- **Supplier Capability Matrix**: View for Buyers detailing specific tolerances and historical performance.
