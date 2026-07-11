# B2B Industrial Steel Contracting Platform - Monorepo Guide

Welcome to the official repository of **MetalHub**, a high-performance B2B digital contracting platform specializing in industrial steel structure supply, CAD engineering, and hybrid outsourced fabrication across the European Union.

This project is built using a modern **Turborepo monorepo** architecture designed for enterprise-grade security, lightning-fast performance (Lighthouse score 95-100), and automated dynamic translation pipelines.

---

## 1. Architectural Specs & Technical Stack
The platform is organized as a Turborepo monorepo split into clear layers:

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

### Event-Driven Queue & Workers (`apps/cms/translation-worker`)
* **BullMQ & Redis**-based asynchronous job processor.
* Listens to Strapi content lifecycles to automatically translate technical specifications into other target European languages using the OpenAI API.

---

## 2. Directory Layout & Monorepo Structure

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
│   │       │   │   └── revalidate/route.ts (ISR cache invalidator)
│   │       │   └── sitemap.xml/route.ts (Localized sitemap with hreflang maps)
│   │       ├── components/ (React Dropzone, Header, and Footer components)
│   │       └── lib/
│   │           └── cms.ts (Headless CMS data client with fallback state)
│   └── cms/ (Strapi 5 Backend Workspace)
│       ├── package.json
│       ├── config/ (Database, middlewares, and cron settings)
│       └── src/
│           ├── api/
│           │   ├── project/ (Strapi content-type collection schemas)
│           │   └── health/ (Custom health check endpoint)
│           └── translation-worker/ (BullMQ worker code for AI translations)
```

---

## 3. Core Features & Task Progress

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
* [ ] Configure root-level `docker-compose.yml` for isolated developer environment.
* [ ] Integrate Sentry SDK on frontend (Next.js) and backend (Strapi).
* [ ] Build Strapi custom `/api/health` check endpoint.
* [ ] Configure GitHub Actions CI/CD workflows (`deploy.yml`).

---

## 4. Pre-Requisites & Steps to Go Live

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

### 4. Setup OpenAI Account
* Register on OpenAI Developer Platform.
* Create an API Key and fund the account to gain access to `gpt-4o` or `gpt-4o-mini`.

### 5. Centralized Monitoring (Sentry)
* Register a project on Sentry.io.
* Obtain your Sentry DSN key and configure it in frontend and backend environment variables.

---

## 5. API Connection & Configuration Reference

Configure the environment variables in a `.env` file at the root or within workspace applications. Refer to [.env.example](file:///d:/AI-Project/Business/.env.example) for the full schema:

### Strapi CMS Integration
* **`STRAPI_API_URL`**: The public URL pointing to your hosted Strapi CMS instance (e.g. `https://cms.metalhub.com` or `http://localhost:1337`).
* **`STRAPI_API_TOKEN`**: The Bearer token generated inside the Strapi admin settings page.

### AWS S3 Storage
* **`AWS_ACCESS_KEY_ID`** & **`AWS_SECRET_ACCESS_KEY`**: The credentials of the IAM user configured with S3 permissions.
* **`AWS_REGION`**: The target region where the bucket exists (e.g., `eu-west-1`).
* **`AWS_S3_BUCKET`**: The exact bucket name (e.g., `metalhub-drawings`).

### LLM Translations
* **`OPENAI_API_KEY`**: The secret API key used by the BullMQ background workers to translate specs.

### Redis Queue Config
* **`REDIS_HOST`**: Host IP or domain of your Redis server.
* **`REDIS_PORT`**: Port number (default: `6379`).
* **`REDIS_PASSWORD`**: (Optional) Secret password for Redis authentication.

### CRM Webhook Ingestion
* **`CRM_WEBHOOK_URL`**: The webhook receiver endpoint (e.g. HubSpot Deals API, Zapier, or Trello Card Generator).

### ISR Revalidation Token
* **`REVALIDATION_SECRET`**: A cryptographically secure random string. Both Next.js and Strapi must share this token. When content changes in the CMS, it issues a POST to `/api/revalidate?secret=YOUR_TOKEN` to clear the static page cache instantly.

---

## 6. Local Development via Docker Compose

To spin up the entire ecosystem (Next.js, Strapi 5, PostgreSQL, Redis) locally without manually installing database systems, run:

```bash
docker compose up -d
```

This starts the following containerized stack:
* **`web`**: `http://localhost:3000` (Next.js dev frontend)
* **`cms`**: `http://localhost:1337` (Strapi CMS backend)
* **`db`**: PostgreSQL container (persisting CMS schema)
* **`redis`**: Redis queue container (orchestrating BullMQ jobs)

To stop the containers:
```bash
docker compose down
```

---

## 7. Pre-Deployment SEO & Content Audit Integration

We utilize the developer auditing tool [Claude-seo](https://github.com/AgriciDaniel/Claude-seo) to verify our B2B optimization parameters before final deployments. 

### Why we use it (Highly Useful Features)
1. **Hreflang Architecture Auditing**: Automatically tests our cross-referenced alternate links for all 9 European languages to ensure Google indexes locales properly.
2. **JSON-LD Schema Verification**: Validates B2B product structure, material properties (steel grades like S355J2+N, EN 1090-2 execution standards), and local listings (Estonian HQ, French workshops) to guarantee maximum markup scores.
3. **French Local SEO Verification**: Audits regional keywords and folder schemas for specific French hubs (e.g. Rhône-Alpes, Hauts-de-France).
4. **Semantic Clustering**: Helps match metallurgical keywords (`châssis mécano-soudé`, `EN 1090`) to search intent before database input.

### Unused & Redundant Features
1. **Auto-Content Generation**: Disabled. We use our own custom background workers (BullMQ + OpenAI) integrated directly into Strapi model lifecycles for technical accuracy.
2. **E-commerce Structured Data**: Disabled. MetalHub is an industrial, project-based contracting platform (RFQ-based), not retail.

### Implementation Workflow
This tool is integrated directly in the codebase as a native workspace custom skill:
* **Native Custom Agent Skill Path**: [.agents/skills/claude-seo/SKILL.md](file:///d:/AI-Project/Business/.agents/skills/claude-seo/SKILL.md)
* Any AI coding assistant (e.g. Claude Code, Gemini, or Antigravity) running inside this monorepo root will automatically discover, load, and follow these rules.
* Before running production builds, trigger the audit command via your AI assistant:
  ```bash
  # Run local pre-deployment audits
  claude technical_seo --path=apps/web
  ```
