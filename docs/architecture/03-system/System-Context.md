# System Context Diagram (Level 1)

This document describes the high-level System Context for the MetalHub platform. MetalHub is an intelligent industrial metal contracting platform that connects Buyers and Suppliers, facilitating RFQ creation, tender evaluation, and contract review while leveraging a knowledge-driven decision support system.

## C4 System Context Diagram

```mermaid
C4Context
    title System Context diagram for MetalHub
    
    Person(buyer, "Buyer", "An industrial company looking to procure metal manufacturing services or parts.")
    Person(supplier, "Supplier", "A metal manufacturer or contractor providing services and submitting offers.")
    Person(admin, "Knowledge Engineer", "An internal user managing the knowledge base, risk patterns, and platform configurations.")
    
    System(metalhub, "MetalHub Platform", "Core platform that manages RFQs, offers, contracts, and provides AI-driven decision support and risk detection.")
    
    System_Ext(erp, "External ERP Systems", "Buyer/Supplier internal ERPs for syncing procurement and inventory data.")
    System_Ext(payment, "Payment Gateway", "External system for handling subscription or transactional payments.")
    System_Ext(industry_data, "Market Data APIs", "Provides real-time metal pricing and industry standard guidelines.")

    Rel(buyer, metalhub, "Creates RFQs, reviews offers, and signs contracts using")
    Rel(supplier, metalhub, "Discovers RFQs, submits offers, and manages projects using")
    Rel(admin, metalhub, "Maintains knowledge base and monitors platform using")
    
    Rel(metalhub, erp, "Syncs data via API with")
    Rel(metalhub, payment, "Processes transactions using")
    Rel(metalhub, industry_data, "Fetches market trends and pricing from")
```

## Description

The **MetalHub Platform** acts as the central intelligence hub.
- **Actors**: 
  - **Buyers** use the platform to mitigate risk when issuing RFQs and evaluating tenders.
  - **Suppliers** use it to discover relevant RFQs matching their capabilities and to construct competitive offers.
  - **Knowledge Engineers** oversee the knowledge graph and rules engine, ensuring the decision support system remains accurate.
- **External Systems**: The platform integrates with external ERPs to seamlessly fit into existing supply chain workflows, queries Market Data APIs for live material costs, and relies on a Payment Gateway for monetization.
