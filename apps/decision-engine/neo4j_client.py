from neo4j import GraphDatabase
import os

class Neo4jClient:
    def __init__(self):
        # We read from environment variables or fallback to docker-compose defaults
        uri = os.getenv("NEO4J_URI", "bolt://localhost:7687")
        user = os.getenv("NEO4J_USER", "neo4j")
        password = os.getenv("NEO4J_PASSWORD", "secure_neo4j_password")
        self.driver = GraphDatabase.driver(uri, auth=(user, password))

    def close(self):
        self.driver.close()

    def create_rfq_node(self, rfq_id: str, title: str, buyer_id: str):
        query = (
            "MERGE (b:Buyer {id: $buyer_id}) "
            "MERGE (r:RFQ {id: $rfq_id, title: $title}) "
            "MERGE (b)-[:ISSUED]->(r)"
        )
        with self.driver.session() as session:
            session.run(query, buyer_id=buyer_id, rfq_id=rfq_id, title=title)
            print(f"Created/Updated RFQ Node in Knowledge Graph: {rfq_id}")

neo4j_client = Neo4jClient()
