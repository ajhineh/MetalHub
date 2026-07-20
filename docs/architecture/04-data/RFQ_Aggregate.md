# RFQ Aggregate

## Overview
The Request for Quotation (RFQ) Aggregate manages the lifecycle of a buyer's request, from drafting through evaluation to the final award, acting as the nexus for technical specs and supplier matching.

## Aggregate Root: `RFQ`
- **Id**: `RFQId` (UUID)
- **BuyerId**: `BuyerId`
- **Title**: `String`
- **Status**: `RFQStatus` (Draft, Published, Evaluating, Awarded, Closed)
- **SubmissionDeadline**: `Timestamp`
- **CreatedAt**: `Timestamp`

## Entities
### `LineItem`
Specific parts or services requested.
- **Id**: `LineItemId`
- **Description**: `String`
- **Quantity**: `Integer`
- **TargetPrice**: `Money` (Optional)
- **RequiredCertifications**: `List<String>`

### `ClarificationThread`
Q&A between suppliers and the buyer regarding the RFQ.
- **Id**: `ThreadId`
- **Question**: `String`
- **Answer**: `String`
- **IsPublic**: `Boolean`

## Value Objects
### `RFQStatus`
Enum: `Draft`, `Published`, `Evaluating`, `Awarded`, `Closed`

### `CommercialTerms`
- **Incoterms**: `String`
- **PaymentTerms**: `String`
- **DeliveryLocation**: `Address`

## Domain Events
- `RFQDrafted` { RFQId, BuyerId }
- `RFQPublished` { RFQId, Deadline }
- `LineItemAdded` { RFQId, LineItemId }
- `ClarificationRequested` { RFQId, Question }
- `RFQAwarded` { RFQId, SupplierId, OfferId }

## Write Model (Commands)
- `CreateRFQ(BuyerId, Title)`
- `AddLineItem(RFQId, Details)`
- `PublishRFQ(RFQId, CommercialTerms)`
- `RequestClarification(RFQId, Question)`
- `AwardRFQ(RFQId, OfferId, SupplierId)`

## Read Model (Projections)
- **RFQ Marketplace View**: Filtered projection of Published RFQs accessible to eligible Suppliers.
- **Buyer Dashboard View**: Summary of all RFQs owned by a buyer with active Offer counts.
- **RFQ Details**: Full technical and commercial payload for deep review.
