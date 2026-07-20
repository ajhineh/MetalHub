# Deployment Diagram

This document illustrates how the MetalHub platform is deployed across cloud infrastructure, highlighting scaling and high-availability considerations.

## C4 Deployment Diagram

```mermaid
C4Deployment
    title Deployment diagram for MetalHub Platform (Cloud Environment)
    
    Deployment_Node(cloud, "Cloud Provider (AWS / Azure)", "Cloud Region") {
        
        Deployment_Node(cdn, "CDN & WAF", "Cloudflare") {
            Container(static_assets, "Web App Assets", "React build files cached at edge")
        }

        Deployment_Node(k8s, "Managed Kubernetes Cluster", "EKS / AKS") {
            Deployment_Node(web_pods, "Web UI Pods", "Replicas: 3+") {
                Container(web_app, "Web Application", "Node.js SSR")
            }
            Deployment_Node(api_pods, "Core API Pods", "Replicas: 3+") {
                Container(core_api, "Core Service API", "Spring Boot")
            }
            Deployment_Node(ml_pods, "Decision Engine Pods", "Replicas: 2+ (GPU Enabled)") {
                Container(decision_engine, "Decision Engine", "Python / FastAPI")
            }
        }
        
        Deployment_Node(managed_services, "Managed Services", "PaaS") {
            Container(api_gateway, "Managed API Gateway", "Routes & Rate Limits")
            Container(message_bus, "Managed Message Bus", "Confluent Cloud / MSK")
        }

        Deployment_Node(databases, "Database Cluster", "Private Subnet") {
            ContainerDb(relational_db, "Primary DB", "Managed PostgreSQL (Multi-AZ)")
            ContainerDb(knowledge_graph, "Graph DB", "Neo4j Aura (Managed Cluster)")
            ContainerDb(doc_store, "Blob Storage", "S3 Bucket")
        }
    }

    Rel(cdn, api_gateway, "Forwards dynamic requests to", "HTTPS")
    Rel(api_gateway, web_pods, "Routes UI traffic to", "HTTPS")
    Rel(api_gateway, api_pods, "Routes API traffic to", "HTTPS")
    Rel(api_gateway, ml_pods, "Routes ML requests to", "HTTPS")
    
    Rel(api_pods, relational_db, "Reads/Writes", "JDBC")
    Rel(api_pods, message_bus, "Publishes", "TCP")
    Rel(api_pods, doc_store, "Uploads files", "HTTPS")
    
    Rel(ml_pods, message_bus, "Subscribes", "TCP")
    Rel(ml_pods, knowledge_graph, "Queries", "Bolt")
    Rel(ml_pods, doc_store, "Reads files", "HTTPS")
```

## Description

- **Edge Layer**: Static assets are cached globally via CDN to ensure fast load times for the Web App.
- **Compute Layer**: Workloads run on a Managed Kubernetes cluster, allowing the `Core Service` to scale independently from the computationally heavy `Decision Engine` (which may require GPU nodes for NLP tasks).
- **Data Layer**: All state is managed by highly available, managed database services. Neo4j Aura is used for the Knowledge Graph to remove the operational burden of managing graph clusters.
- **Networking**: Databases sit within a private subnet and can only be accessed by the Kubernetes worker nodes, ensuring strong security boundaries.
