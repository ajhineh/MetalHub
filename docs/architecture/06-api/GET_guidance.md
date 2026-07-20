# GET /api/v1/guidance

## Purpose
Retrieves context-aware guidance for a specific entity or user state. This endpoint is the primary mechanism through which the "Silent Mentor" communicates with the frontend UI.

## Request
- **Headers**: `Authorization`
- **Query Parameters**:
  - `entityType` (string, required, e.g., "RFQ", "CONTRACT", "SUPPLIER_PROFILE")
  - `entityId` (string, required)
  - `userContext` (string, optional, e.g., "DRAFTING", "REVIEWING")

## Response
- **Status 200 OK**
- **Body**:
  - `guidanceItems` (array of objects)
    - `id` (string)
    - `severity` (string: "LOW", "MEDIUM", "HIGH")
    - `message` (string, adhering to Calm Intelligence)
    - `actionableSteps` (array of strings)
    - `evidenceLinks` (array of strings, URLs or IDs proving the recommendation)

## Interface Logic
1. **Context Aggregation**: Fetch the current state of the requested entity from the primary database.
2. **Engine Invocation**: Pass the entity state and `userContext` to the `Guidance Engine`.
3. **Historical Enrichment**: The Guidance Engine queries the `Knowledge Graph` for similar past entities to generate insights.
4. **Formatting**: Ensure all guidance messages are formatted according to the `Prompt Strategy` and Calm Intelligence principles.
5. **Delivery**: Return the structured guidance items to the frontend for non-intrusive display.
