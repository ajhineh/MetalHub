# Knowledge Graph

## Purpose
The Knowledge Graph ensures that "Knowledge Must Compound". It is the centralized repository of all entities (Buyers, Suppliers, Contracts, RFQs, Experiences) and the relationships between them.

## Core Responsibilities
- **Semantic Relationships**: Map how different entities relate to one another (e.g., Supplier X specializes in Material Y and has successfully completed Project Z).
- **Historical Memory**: Serve as the Industrial Memory of the platform, learning from every interaction.
- **Data Enrichment**: Provide deep context to the Guidance and Decision engines.

## Architectural Components
- **Graph Database**: The physical storage of nodes (entities) and edges (relationships).
- **Ingestion Pipeline**: Continuously updates the graph based on platform events (e.g., Contract signed, RFQ completed).
- **Query Layer**: Exposes an interface for the AI and AI engines to fetch contextual sub-graphs efficiently.

## Integration Points
- Acts as the primary data source for the `AI Recommender` within the `Guidance Engine`.
- Feeds historical performance data to the `Decision Engine`.
