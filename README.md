# B2B Industrial Steel Contracting Platform - Monorepo Guide

Welcome to the official repository of **SideroHub**, a high-performance B2B digital contracting platform specializing in industrial steel structure supply, CAD engineering, and hybrid outsourced fabrication across the European Union.

This project is built using a modern **Turborepo monorepo** architecture designed for enterprise-grade security, lightning-fast performance (Lighthouse score 95-100), and automated dynamic translation pipelines.

---

> [!WARNING]  
> **ARCHITECTURE DEPRECATION NOTICE**  
> The technical stack and directory layout documented below belong to the initial prototyping phase (Phase 1).  
> **These structures are NO LONGER VALID.** We have fundamentally shifted the system architecture toward the **MetalHub Industrial Operating Philosophy**.  
> **Future State:** The old `apps/web` and `apps/cms` (Next.js/Strapi) approach is being entirely re-engineered. The new implementation will be strictly driven by the **Architecture Knowledge Base** (The Digital Brain), which includes Event-Driven Decision Engines, Neo4j Knowledge Graphs, and a dedicated Guidance UI.

## 1. The Digital Brain: Architecture Knowledge Base (NEW)
Before writing any new application code, the entire system has been meticulously designed in the `docs/architecture` directory. This 13-folder structure acts as the living engineering encyclopedia of the project:

* **`/00-foundation`**: Core philosophy, Vision, Mission, and Identity.
* **`/01-domain`**: Domain-Driven Design (DDD) entities (Supplier, Buyer, RFQ, Decision).
* **`/02-business`**: Business capabilities and workflows.
* **`/03-system`**: C4 Models (Context, Container, Component, Deployment).
* **`/04-data`**: Logical data models and Aggregates.
* **`/05-ai`**: AI Subsystems (Guidance Engine, Decision Engine, Knowledge Graph).
* **`/06-api` to `/12-quality`**: Interfaces, UI Philosophy, Security, DevOps, Roadmap, Research, and Quality.
* **`/adr`**: Architecture Decision Records.

*All future software implementation (Phase 9) will directly map to these specifications.*

---

## 2. Legacy Architectural Specs & Technical Stack (DEPRECATED)
*(Note: The stack below is no longer the target architecture. It will be replaced based on the C4 models in `/docs/architecture/03-system`.)*

The legacy prototype was organized as a Turborepo monorepo split into clear layers:

### Presentation Layer (`apps/web`)
* **Next.js 15 (App Router)** & React Server Components for highly optimized page rendering.
* **Static Site Generation (SSG)** combined with **On-Demand ISR (Incremental Static Regeneration)** via a secure revalidation webhook.
* **Styling**: Tailwind CSS & Vanilla CSS configured with custom industrial tokens (Steel, Safety Amber, CAD Blue) and typography (Inter & Space Grotesk).
* **Multi-Language Routing**: Implements a subfolder routing strategy supporting **9 major European languages** (`en`, `fr`, `de`, `nl`, `es`, `it`, `no`, `sv`, `pl`).
* **Monitoring**: **Sentry** and **Vercel Analytics** integrated to capture frontend and API exception logs in real-time.

### Content Hub (`apps/cms`)
* **Strapi 5 (Headless CMS)** powered by a PostgreSQL database.
* Exposes localized REST/GraphQL APIs for dynamic content.
* Maps landing pages dynamically through nested components (Hero, Spec Table, FAQ Accordions, and Case Studies).
* **Health Monitoring**: Dedicated `/api/health` endpoint verifying active connections to both PostgreSQL and Redis.
* **Visual SEO Auditor Plugin**: Custom React "Audit Page SEO" button integrated into the editing sidebar of Products, Solutions, and Case Studies, calling custom backend controller `/api/seo-audit` for code-free audits.

### Event-Driven Queue & Workers (`apps/cms/translation-worker`)
* **BullMQ & Redis**-based asynchronous job processor.
* Listens to Strapi content lifecycles to automatically translate technical specifications into other target European languages using the OpenAI API.

### Telephony Layer (VoIP Center)
* **Twilio Voice API**: Intercepts inbound calls on European local numbers, determines caller country prefix, and executes dynamic localized IVR routing.
* **OpenAI Realtime WebSockets Gateway**: Next.js `/api/voip/stream` proxies Twilio raw mulaw audio chunks to OpenAI realtime services (`gpt-4o-realtime`) in under 400ms.
* **CRM Ingestion**: Post-call Whisper transcription and structural requirement parsing hooked directly to HubSpot/Trello.

---

## 3. Legacy Directory Layout & Monorepo Structure (DEPRECATED)

```
d:\AI-Project\Business\
├── package.json (Monorepo Workspace Root)
├── turbo.json (Turborepo Orchestrator)
├── docker-compose.yml (Local development services)
├── .env.example (Environment Template for deployment)
├── .github/
│   └── workflows/
│       └── deploy.yml (CI/CD build-and-test deployment)
├── apps/
│   ├── web/ (Next.js Frontend Workspace)
│   │   ├── package.json
│   │   ├── .env.local (Local Dev Variables)
│   │   └── src/
│   │       ├── app/
│   │       │   ├── [lang]/ (Multilingual pages: Home, Services, Projects, RFQ)
│   │       │   ├── api/
│   │       │   │   ├── rfq/route.ts (Presigned S3 upload & CAD binary validator)
│   │       │   │   ├── revalidate/route.ts (ISR cache invalidator)
│   │       │   │   ├── health/route.ts (Combined health-check endpoint)
│   │       │   │   └── voip/
│   │       │   │       ├── inbound/route.ts (Twilio TwiML & Country Prefix checker)
│   │       │   │       ├── menu-selection/route.ts (IVR Gather decision broker)
│   │       │   │       └── stream/route.ts (WebSocket proxy to OpenAI Realtime API)
│   │       │   └── sitemap.xml/route.ts (Localized sitemap with hreflang maps)
│   │       ├── components/ (React Dropzone, Header, and Footer components)
│   │       └── lib/
│   │           └── cms.ts (Headless CMS data client with fallback state)
│   └── cms/ (Strapi 5 Backend Workspace)
│       ├── package.json
│       ├── config/ (Database, middlewares, and cron settings)
│       └── src/
│           ├── admin/
│           │   └── app.js (Injecting the 'Audit Page SEO' button into the sidebar)
│           ├── api/
│           │   ├── project/ (Strapi content-type collection schemas)
│           │   ├── call-log/ (Strapi call archive collection schemas)
│           │   └── seo-audit/ (Custom API endpoint for SEO/Schema validations)
│           └── translation-worker/ (BullMQ worker code for AI translations)
```

---

## 4. Core Features & Task Progress

### Phase 1: Turborepo & Frontend Setup
* [x] Initialize Turborepo core configuration (`package.json`, `turbo.json`).
* [x] Set up Next.js 15 frontend in `apps/web/`.
* [x] Configure Tailwind CSS with custom industrial tokens.
* [x] Implement dynamic subfolder routing for 9 locales.
* [x] Build React components & multi-language navigation layout.

### Phase 2: Strapi 5 Content Schema Layouts
* [x] Define content type JSON schemas for Products, Solutions, and Case Studies.
* [x] Implement multi-locale support in the database layer.

### Phase 3: Secure RFQ Portal (S3 Presigned URLs & CRM)
* [x] Develop React Dropzone with active file-drag UI states.
* [x] Create server-side binary validation (`/api/rfq/route.ts`).
  * Scans file headers for **Magic Numbers** (e.g., `%PDF` for PDF, `AC10` for AutoCAD DWG, `ISO-10303` for STEP, `SECTION` for DXF).
  * Prevents executable uploads or renamed malware from reaching cloud storage.
* [x] Integrate AWS S3 Presigned URL generator.
* [x] Wire simulated CRM Webhook triggers (HubSpot/Trello) upon upload completion.

### Phase 4: Event-Driven Translation Queues (BullMQ)
* [x] Set up Strapi lifecycle triggers to push translation jobs to Redis.
* [x] Code background worker using OpenAI to translate technical B2B specs.

### Phase 5: Platform Deployment, Monitoring & Stability
* [x] Configure root-level `docker-compose.yml` for isolated PostgreSQL, Redis, Strapi, and Next.js containers.
* [x] Integrate Sentry SDK on frontend (Next.js) for browser/server exceptions.
* [x] Build Strapi custom `/api/health` check endpoint probing PG & Redis.
* [x] Configure GitHub Actions CI/CD workflows (`deploy.yml`) running CAD Magic Number checks and production build compilations.

### Phase 6: AI Multilingual VoIP Call Center Integration
* [x] Set up Twilio inbound call webhook at `/api/voip/inbound` processing E.164 country prefixes.
* [x] Build geo-targeted IVR Gather menu playing Polly Neural greetings in 9 target European languages with EU consent notices.
* [x] Implement IVR Digit split routing at `/api/voip/menu-selection`:
  * **Press 1**: Dial engineering hub directly with call recording and Whisper transcripts.
  * **Press 2**: Fire WebSocket stream to `/api/voip/stream`.
* [x] Code Next.js WebSocket media stream proxy to OpenAI Realtime API (`gpt-4o-realtime`).
* [x] Create Strapi `call-log` content type schema.
* [x] Implement post-call CRM summary and transcript logging pipelines.

### Phase 7: Programmatic SEO & Content Generation
* [x] Develop a standalone Node.js script (`scripts/generate-seo-content.js`) to generate highly targeted 500-word localized SEO articles for 80+ European cities.
* [x] Integrate dual LLM support (OpenAI `gpt-4o-mini` and Google Gemini 1.5 Flash via `@google/genai` unified SDK for `AQ.` Project-scoped keys).
* [x] Automatically inject AI-generated Hero Titles, Dynamic Content, FAQs, and SEO Metadata directly into the Strapi 5 database via REST.

---

## 5. Pre-Requisites & Steps to Go Live

To deploy the platform to a live staging/production environment, complete the following prerequisites:

### 1. Host and Configure Strapi 5 Node
* Spin up a Node.js environment (e.g., via Railway, Hetzner, AWS EC2, or Docker).
* Attach a **PostgreSQL** database.
* Access the Strapi Admin Panel and:
  1. Go to **Settings > API Tokens**.
  2. Generate a new API token with **Full Access** or Custom permissions allowing read/write access.
  3. Go to **Settings > Internationalization** and add your target languages (`fr`, `de`, `nl`, `es`, `it`, `no`, `sv`, `pl`).

### 2. Configure AWS S3 Bucket
* Create an Amazon Web Services (AWS) account.
* Go to the **S3 Console** and create a private bucket (e.g., `metalhub-drawings`).
* **Critical Step: Configure CORS (Cross-Origin Resource Sharing)**. The S3 bucket must accept direct `PUT` requests from the frontend client's domain. Add the following CORS policy to your bucket:
  ```json
  [
    {
      "AllowedHeaders": ["*"],
      "AllowedMethods": ["PUT", "GET", "HEAD"],
      "AllowedOrigins": ["https://yourdomain.com", "http://localhost:3000"],
      "ExposeHeaders": ["ETag"]
    }
  ]
  ```
* Create an **IAM User** with programmatic access and attach a policy allowing `s3:PutObject` and `s3:GetObject` on your bucket. Generate an Access Key ID and Secret Access Key.

### 3. Spin up Redis Server
* Spin up a Redis instance (e.g., Docker container, Upstash, or Redis Labs).
* Note down the Redis host, port, and password. This will orchestrate the translation jobs for BullMQ.

### 4. Setup OpenAI / Google AI Studio Account
* Register on OpenAI Developer Platform or Google AI Studio (aistudio.google.com).
* Generate a standard API Key (`AIzaSy...`) for Gemini or `OPENAI_API_KEY` to grant the background SEO scripts access to LLM endpoints.

### 5. Centralized Monitoring (Sentry)
* Register a project on Sentry.io.
* Obtain your Sentry DSN key and configure it in frontend and backend environment variables.

---

## 6. API Connection & Configuration Reference

Configure the environment variables in a `.env` file at the root or within workspace applications. Refer to [.env.example](file:///d:/AI-Project/Business/.env.example) for the full schema:

### Strapi CMS Integration
* **`STRAPI_API_URL`**: The public URL pointing to your hosted Strapi CMS instance.
* **`STRAPI_API_TOKEN`**: The Bearer token generated inside the Strapi admin settings page.

### AWS S3 Storage
* **`AWS_ACCESS_KEY_ID`** & **`AWS_SECRET_ACCESS_KEY`**: The credentials of the IAM user configured with S3 permissions.
* **`AWS_REGION`**: The target region where the bucket exists (e.g., `eu-west-1`).
* **`AWS_S3_BUCKET`**: The exact bucket name (e.g., `metalhub-drawings`).

### LLM Translations & Realtime VoIP & SEO Generation
* **`OPENAI_API_KEY`**: The secret API key used by the BullMQ background workers and the OpenAI Realtime WebSocket gateway.
* **`GEMINI_API_KEY`**: Optional API key for Google Gemini (supports both `AIzaSy...` AI Studio keys and `AQ...` unified keys via the `@google/genai` SDK).

### Redis Queue Config
* **`REDIS_HOST`**: Host IP or domain of your Redis server.
* **`REDIS_PORT`**: Port number (default: `6379`).
* **`REDIS_PASSWORD`**: (Optional) Secret password for Redis authentication.

### CRM Webhook Ingestion
* **`CRM_WEBHOOK_URL`**: The webhook receiver endpoint (HubSpot Deals API or Trello Card Generator).

### ISR Revalidation Token
* **`REVALIDATION_SECRET`**: A cryptographically secure random string. Both Next.js and Strapi must share this token. When content changes in the CMS, it issues a POST to `/api/revalidate?secret=YOUR_TOKEN` to clear the static page cache instantly.

### VoIP Telephony Configurations
* **`CENTRAL_HUB_PHONE_NUMBER`**: The target destination number when callers press 1 on the IVR to speak directly to the engineering team.
* **`NEXT_PUBLIC_DOMAIN`**: Domain hosting the Next.js WebSocket stream route (e.g. `siderohub.com`).

---

## 7. Local Development via Docker Compose

To spin up the entire ecosystem (Next.js, Strapi 5, PostgreSQL, Redis) locally for development:
```bash
docker compose up -d
```
To stop the development containers:
```bash
docker compose down
```

---

## 8. Production AWS EC2 ARM64 (Graviton) Deployment

For deploying to restricted memory nodes (such as `t4g.small` instances with 2GB RAM and ARM64 processors), execute the following steps on the host:

### Step 1: Configure Host Swap Space
Next.js and Strapi builds require virtual memory overhead during compilation. To prevent host Out-of-Memory (OOM) kills, initialize a 4GB Swap file using our automated script:
```bash
# Set up execute permissions and run the script
chmod +x apps/web/scripts/setup-swap.sh
./apps/web/scripts/setup-swap.sh
```

### Step 2: Spin up the Production Stack
To run the production-optimized, container-resource-limited ARM64 containers (capped at 600MB RAM each for node processes), run:
```bash
docker compose -f docker-compose.prod.yml up -d --build
```
This boots optimized, multi-stage native ARM64 Alpine environments:
* **`metalhub-prod-web`**: Next.js production server (`http://localhost:3000`)
* **`metalhub-prod-cms`**: Strapi production server (`http://localhost:1337`)
* **`metalhub-prod-db`**: PostgreSQL (capped at 400MB memory limit)
* **`metalhub-prod-redis`**: Redis BullMQ broker (capped at 200MB memory limit)

To stop the production containers:
```bash
docker compose -f docker-compose.prod.yml down
```

---

## 9. Pre-Deployment SEO & Content Audit Integration

We utilize the developer auditing tool [Claude-seo](https://github.com/AgriciDaniel/Claude-seo) to verify our B2B optimization parameters before final deployments. 

### Why we use it (Highly Useful Features)
1. **Hreflang Architecture Auditing**: Automatically tests our cross-referenced alternate links for all 9 European languages to ensure Google indexes locales properly.
2. **JSON-LD Schema Verification**: Validates B2B product structure, material properties (steel grades like S355J2+N, EN 1090-2 execution standards), and local listings (Estonian HQ, French workshops) to guarantee maximum markup scores.
3. **French Local SEO Verification**: Audits regional keywords and folder schemas for specific French hubs (e.g. Rhône-Alpes, Hauts-de-France).
4. **Semantic Clustering**: Helps match metallurgical keywords (`châssis mécano-soudé`, `EN 1090`) to search intent before database input.

### Unused & Redundant Features
1. **Auto-Content Generation**: Disabled. We use our own custom background workers (BullMQ + OpenAI) integrated directly into Strapi model lifecycles for technical accuracy.
2. **E-commerce Structured Data**: Disabled. SideroHub is an industrial, project-based contracting platform (RFQ-based), not retail.

### Implementation Workflow
This tool is integrated directly in the codebase as a native workspace custom skill:
* **Native Custom Agent Skill Path**: [.agents/skills/claude-seo/SKILL.md](file:///d:/AI-Project/Business/.agents/skills/claude-seo/SKILL.md)
* Any AI coding assistant (e.g. Claude Code, Gemini, or Antigravity) running inside this monorepo root will automatically discover, load, and follow these rules.
* Before running production builds, trigger the audit command via your AI assistant:
  ```bash
  # Run local pre-deployment audits
  claude technical_seo --path=apps/web
  ```
