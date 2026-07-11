---
name: claude-seo
description: Technical SEO auditor, schema.org JSON-LD validator, and multilingual hreflang manager for Next.js and Strapi.
---

# Claude-SEO Custom Agent Skill

This skill converts your agent into a specialized **B2B Industrial SEO Auditor** tailored for the MetalHub platform (Next.js 15 + Strapi 5). It contains technical check scripts, schema.org guidelines, local French SEO mappings, and semantic clustering rules.

---

## 1. Audit Checkpoints

When this skill is invoked (e.g., by asking the agent to "run technical SEO audit" or "verify schemas"), execute the following checks across the workspace:

### Checkpoint A: Multilingual Hreflang Validation (9 Target Languages)
* Verify that Next.js pages in `apps/web/src/app/[lang]/` correctly declare the `lang` tag dynamically in the HTML root.
* Check [sitemap.xml/route.ts](file:///d:/AI-Project/Business/apps/web/src/app/sitemap.xml/route.ts) (or sitemap generator) to ensure that alternate links for all 9 locales are correctly cross-referenced:
  * `en` (Global/UK)
  * `fr` (France/Belgium)
  * `de` (Germany)
  * `nl` (Netherlands)
  * `es` (Spain)
  * `it` (Italy)
  * `no` (Norway)
  * `sv` (Sweden)
  * `pl` (Poland)
* Confirm that no locale has broken self-referencing links or missing cross-references.

### Checkpoint B: Structured Data & B2B Schemas (JSON-LD)
MetalHub requires strict B2B structural schema injection. Audit Next.js layouts and page metadata to ensure:
* **Product Schema**: Configured for industrial products, including properties for structural materials, steel grades (e.g., `S355J2+N`, `S235JR`), and certification standards (e.g., `EN 1090-2 Execution Class EXC2`).
* **LocalBusiness / Organization Schema**: Configured for the Estonian HQ (`MetalHub OÜ`, Tallinn) and maps French partner workshops (Lyon, Lille, Strasbourg) with correct address structures.
* Check that schemas are correctly serialized as `application/ld+json` inside `<script>` tags in `layout.tsx` or page files.

### Checkpoint C: French Local SEO & Regional Keywords
Audit French industrial landing pages (`/[lang]/projects` or custom service folders) for alignment with localized search queries:
* **Auvergne-Rhône-Alpes (Lyon)**: Focus keywords like `châssis mécano-soudé Lyon`, `découpe laser acier Rhône-Alpes`.
* **Hauts-de-France (Lille)**: Focus keywords like `passerelle industrielle Lille`, `soudure certifiée EN 1090 Nord`.
* **Grand Est (Strasbourg)**: Focus keywords like `cuve inox industrielle Strasbourg`, `soudage TIG Alsace`.
* Ensure proper `H1 -> H2 -> H3` heading hierarchy and that local maps coordinates/addresses match GMB listings.

### Checkpoint D: Industrial Semantic Clustering
Verify keywords are mapped into logical semantic clusters before content entry in Strapi:
1. **Core Cluster: Conception (Engineering)**
   * Primary: `étude charpente métallique`
   * Secondary: `calcul de structure Eurocode 3`, `modélisation 3D Tekla`, `plan d'exécution acier`
2. **Core Cluster: Sourcing (Materials)**
   * Primary: `sourcing acier européen`
   * Secondary: `certificat usine EN 10204 3.1`, `poutrelle IPE HEA`, `tôle acier résilient`
3. **Core Cluster: Fabrication (Welding)**
   * Primary: `mécano-soudure industrielle`
   * Secondary: `soudage qualifié ISO 9606`, `atelier certifié ISO 3834`, `contrôle non destructif CND`

---

## 2. Dev-Tool Execution Commands

Since this tool functions strictly as a developer utility (Dev Tool), execute audits using the following patterns:

```bash
# To audit all Next.js page metadata and Hreflang headers
claude technical_seo --path=apps/web/src/app

# To validate JSON-LD structured schemas
claude schema_audit --file=apps/web/src/app/[lang]/layout.tsx

# To cluster keywords for a new Strapi case-study draft
claude semantic_cluster --keywords="chassis, welding, laser cutting, Lyon"
```
