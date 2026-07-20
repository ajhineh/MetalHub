# POST /api/v1/rfqs

## Purpose
Creates a new Request for Quotation (RFQ). This endpoint not only stores the data but also triggers the Guidance and Decision engines to provide immediate, proactive feedback on the draft.

## Request
- **Headers**: `Authorization`, `Content-Type: application/json`
- **Body**:
  - `projectId` (string, required)
  - `title` (string, required)
  - `specifications` (array of objects, required)
  - `deadline` (string, ISO 8601 date, required)
  - `attachments` (array of strings, optional)

## Response
- **Status 201 Created**
- **Body**:
  - `rfqId` (string)
  - `status` (string: "DRAFT")
  - `initialGuidance` (array of objects)
    - `type` (string: "WARNING" | "SUGGESTION" | "INFO")
    - `message` (string)
    - `context` (string)

## Interface Logic
1. **Validation**: Ensure all mandatory fields are present and valid.
2. **Persistence**: Save the initial RFQ draft to the primary database.
3. **Async Trigger**: Emit an `RFQCreated` event.
4. **Synchronous Analysis**: Call the `Guidance Engine` synchronously with the provided specifications to identify immediate anomalies (e.g., missing critical tolerances) and return them in `initialGuidance`.
5. **Knowledge Graph Update**: Register the new RFQ node in the Knowledge Graph.
