# Container Diagram (Level 2)

This document breaks down the MetalHub platform into its high-level containers, showing how the UI, APIs, specialized services, and databases interact.

## C4 Container Diagram

```mermaid
C4Container
    title Container diagram for MetalHub Platform
    
    Person(buyer, "Buyer", "Procures metal services")
    Person(supplier, "Supplier", "Provides metal services")
    
    System_Boundary(metalhub, "MetalHub Platform") {
        Container(web_app, "Web Application", "React/Next.js", "Provides the user interface for Buyers and Suppliers to interact with the platform.")
        Container(api_gateway, "API Gateway", "Kong / Nginx", "Routes incoming API requests, handles authentication and rate limiting.")
        Container(core_api, "Core Service API", "Node.js / Express or Spring Boot", "Handles standard CRUD operations for RFQs, Offers, Users, and Projects.")
        Container(decision_engine, "Decision Engine Service", "Python / FastAPI", "Provides AI-driven capabilities: Risk Detection, Tender Evaluation, and Experience Capture.")
        
        ContainerDb(relational_db, "Primary Database", "PostgreSQL", "Stores structured data: Users, RFQs, Contracts, Workflows.")
        ContainerDb(knowledge_graph, "Knowledge Graph", "Neo4j", "Stores complex relationships: Supplier capabilities, Risk patterns, past experiences, and guidance.")
        ContainerDb(doc_store, "Document Storage", "AWS S3", "Stores binary files: Contract PDFs, CAD drawings, technical specifications.")
        Container(message_bus, "Message Bus", "Apache Kafka / RabbitMQ", "Handles asynchronous event-driven communication between the Core Service and Decision Engine.")
    }

    Rel(buyer, web_app, "Uses", "HTTPS")
    Rel(supplier, web_app, "Uses", "HTTPS")
    
    Rel(web_app, api_gateway, "Makes API calls to", "JSON/HTTPS")
    Rel(api_gateway, core_api, "Routes requests to", "gRPC / REST")
    Rel(api_gateway, decision_engine, "Routes ML requests to", "gRPC / REST")
    
    Rel(core_api, relational_db, "Reads from and writes to", "SQL/TCP")
    Rel(core_api, doc_store, "Uploads/Downloads files to", "HTTPS")
    Rel(core_api, message_bus, "Publishes events to", "TCP")
    
    Rel(decision_engine, knowledge_graph, "Queries and updates", "Bolt/Cypher")
    Rel(decision_engine, message_bus, "Consumes events from", "TCP")
    Rel(decision_engine, doc_store, "Fetches documents for NLP analysis", "HTTPS")
```

## Description

- **Web Application**: The frontend portal for user interaction.
- **Core Service API**: The operational backbone for standard transactional data.
- **Decision Engine Service**: A specialized analytical engine. When an RFQ is created or a Contract is uploaded, the Core Service publishes an event. The Decision Engine picks this up, analyzes the text/data, evaluates risks against the Knowledge Graph, and updates the Primary Database with its findings.
- **Knowledge Graph**: Crucial for connecting isolated pieces of information, such as linking a specific material risk to a historical failed project, providing intelligent guidance to Buyers.
