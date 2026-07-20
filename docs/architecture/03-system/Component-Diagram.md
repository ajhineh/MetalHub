# Component Diagram (Level 3) - Decision Engine

This document zooms into the **Decision Engine Service** container to show its internal structure. This service is responsible for the core intelligent capabilities of the MetalHub platform, such as capturing evidence, detecting risk, and evaluating tenders.

## C4 Component Diagram

```mermaid
C4Component
    title Component diagram for Decision Engine Service
    
    Container_Boundary(decision_engine, "Decision Engine Service") {
        Component(api_controller, "API Controller", "FastAPI Router", "Handles synchronous requests for immediate decision support.")
        Component(event_listener, "Event Listener", "Kafka Consumer", "Listens for asynchronous domain events (e.g., RFQ_CREATED, DOCUMENT_UPLOADED).")
        
        Component(risk_analyzer, "Risk Analyzer", "Python", "Evaluates project constraints against known risks in the knowledge base.")
        Component(tender_evaluator, "Tender Evaluator", "Python", "Scores supplier offers based on required capabilities and historical performance.")
        Component(contract_reviewer, "Contract Reviewer", "NLP Pipeline", "Parses contract documents to extract clauses, obligations, and anomalies.")
        Component(evidence_extractor, "Evidence Extractor", "NLP Pipeline", "Extracts structured metadata (Experience, Skills) from unstructured text.")
        
        Component(graph_connector, "Knowledge Graph Connector", "Neo4j Driver", "Abstracts Cypher queries to read/write domain entities to the graph.")
    }

    Container(message_bus, "Message Bus", "Kafka", "Message Broker")
    ContainerDb(knowledge_graph, "Knowledge Graph", "Neo4j", "Graph Database")
    ContainerDb(doc_store, "Document Storage", "S3", "Object Storage")

    Rel(event_listener, message_bus, "Consumes events from", "TCP")
    Rel(api_controller, risk_analyzer, "Invokes", "In-Process")
    Rel(api_controller, tender_evaluator, "Invokes", "In-Process")
    
    Rel(event_listener, contract_reviewer, "Triggers review on new doc", "In-Process")
    Rel(event_listener, evidence_extractor, "Triggers extraction on completion", "In-Process")

    Rel(risk_analyzer, graph_connector, "Fetches risk patterns via", "In-Process")
    Rel(tender_evaluator, graph_connector, "Fetches supplier capabilities via", "In-Process")
    Rel(evidence_extractor, graph_connector, "Writes new experiences via", "In-Process")
    
    Rel(contract_reviewer, doc_store, "Downloads PDF to analyze", "HTTPS")
    
    Rel(graph_connector, knowledge_graph, "Executes queries against", "Bolt")
```

## Description

The **Decision Engine** is highly modularized:
- **Controllers/Listeners**: It handles both real-time synchronous requests (e.g., a user requesting a manual risk check) via the `API Controller`, and asynchronous background tasks (e.g., scanning a newly uploaded PDF) via the `Event Listener`.
- **Core Domain Logic**: 
  - `Risk Analyzer` and `Tender Evaluator` leverage the graph to make recommendations.
  - `Contract Reviewer` and `Evidence Extractor` apply NLP to turn unstructured data (documents) into structured knowledge (nodes and edges).
- **Integration**: The `Knowledge Graph Connector` encapsulates all database complexity, allowing the domain components to work with pure Python objects.
