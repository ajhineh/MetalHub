# Integration Architecture

This document describes how the primary bounded contexts within MetalHub integrate with one another, balancing immediate consistency with asynchronous decoupling.

## Integration Mechanisms

MetalHub utilizes a hybrid integration approach:
1. **Synchronous (REST/gRPC)**: Used when a user requires immediate feedback (e.g., retrieving a list of RFQs, logging in, manual risk check).
2. **Asynchronous (Event-Driven)**: Used for long-running processes (e.g., PDF text extraction) or to decouple domain side-effects (e.g., updating supplier experience score when a project finishes).

## Event-Driven Flow Diagram

```mermaid
sequenceDiagram
    participant Web as Web App (Client)
    participant Core as Core Service API
    participant Bus as Message Bus (Kafka)
    participant DE as Decision Engine
    participant Neo4j as Knowledge Graph
    participant Postgres as Primary DB

    Note over Web, Postgres: Asynchronous Contract Review Workflow
    
    Web->>Core: 1. Upload Contract PDF (POST /contracts)
    Core->>Postgres: 2. Save Contract Metadata (Status: PENDING)
    Core->>Bus: 3. Publish "ContractUploadedEvent"
    Core-->>Web: 4. HTTP 202 Accepted (Return Contract ID)
    
    Bus-->>DE: 5. Consume "ContractUploadedEvent"
    DE->>DE: 6. Download PDF & Run NLP Reviewer
    DE->>Neo4j: 7. Query Standard Clauses & Risks
    Neo4j-->>DE: 8. Return Knowledge Graph Context
    DE->>DE: 9. Generate Anomaly Report
    
    DE->>Bus: 10. Publish "ContractReviewCompletedEvent"
    Bus-->>Core: 11. Consume "ContractReviewCompletedEvent"
    Core->>Postgres: 12. Update Contract Status (Status: REVIEWED)
    
    Web->>Core: 13. Poll or WebSocket for Status Update
    Core-->>Web: 14. Return Review Results
```

## Description

The sequence diagram above illustrates the asynchronous decoupling between the Core Service and the Decision Engine using a Message Bus:
- **Decoupling**: The Core Service doesn't need to know how the Decision Engine works or wait for it to finish. It simply announces that a contract was uploaded.
- **Resilience**: If the Decision Engine is down, the Message Bus retains the event. Once the Decision Engine recovers, it resumes processing without data loss.
- **Scalability**: Heavy NLP tasks don't block the Core API's HTTP threads, ensuring the platform remains highly responsive to user requests.
