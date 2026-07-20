import os

domain_dir = r"d:\AI-Project\Business\docs\architecture\01-domain"
os.makedirs(domain_dir, exist_ok=True)

content_map = {
    "Supplier": """# Supplier

## Definition
A business entity, manufacturer, or service provider within the MetalHub ecosystem that contributes industrial capabilities, materials, and execution capacity. Philosophically, the Supplier is the backbone of the industrial ecosystem, transforming raw potential and digital requirements into physical reality.

## Responsibilities
- Accurately represent engineering capabilities, capacity, and certifications.
- Review and respond to RFQs with comprehensive, transparent, and technically sound Offers.
- Execute contracted work adhering strictly to quality standards and delivery timelines.
- Foster trust by generating transparent Evidence of work, inspections, and compliance.
- Actively participate in the industrial memory by contributing to lessons learned and capability growth.

## Relationships
- Responds to `RFQ`s created by `Buyer`s.
- Submits `Offer`s that may convert into `Contract`s.
- Collaborates on `Project`s.
- Profile and capabilities are continuously evaluated by the `Trust` and `Risk` engines.

## States
- `Onboarding`: Entity is creating their profile and submitting preliminary identity/capability data.
- `Verified`: Identity and core capabilities are confirmed by MetalHub.
- `Active`: Available for matching and actively participating in the ecosystem.
- `Restricted`: Limited participation due to quality, delivery, or compliance issues.
- `Suspended`: Removed from active matching due to severe breaches of Trust.

## Business Rules
- Must maintain a minimum Industrial Maturity Index (IMI) for premium RFQ matching.
- Any capability claim must be backed by valid `Evidence` (e.g., certificates, past performance).
- Cannot bid on RFQs if current operational capacity is exceeded.

## Events
- `SupplierOnboarded`
- `SupplierVerified`
- `CapabilityAdded`
- `TrustScoreUpdated`
""",

    "Buyer": """# Buyer

## Definition
An entity (client, project owner, or procurement body) that injects demand, requirements, and capital into the MetalHub ecosystem. Philosophically, the Buyer is the catalyst for creation, translating abstract needs into concrete requests that drive the industrial engine.

## Responsibilities
- Articulate clear, unambiguous engineering and commercial requirements through RFQs.
- Evaluate Offers based on a balance of cost, risk, quality, and supplier capability.
- Manage Projects and provide timely feedback, approvals, and payments.
- Contribute to Supplier evaluation and ecosystem Trust through objective reviews and Evidence submission.

## Relationships
- Creates `Project`s and issues `RFQ`s.
- Evaluates `Offer`s from `Supplier`s.
- Enters into `Contract`s to secure supply.
- Interacts with `Guidance` and `Decision` objects to optimize procurement strategies.

## States
- `Registered`: Basic identity established.
- `Verified`: Financial and organizational identity confirmed.
- `Active`: Actively sourcing and managing projects.
- `Suspended`: Temporarily halted due to payment defaults or compliance violations.

## Business Rules
- RFQs must meet minimum clarity and completeness thresholds before being broadcast to Suppliers.
- Must adhere to the contractual payment terms as recorded in the Ledger.
- Decisions made by the Buyer are recorded in the `Decision` graph for continuous learning.

## Events
- `BuyerVerified`
- `DemandInitiated`
- `FeedbackProvided`
- `BuyerSuspended`
""",

    "Project": """# Project

## Definition
A bounded, temporal endeavor within MetalHub designed to achieve a specific engineering, manufacturing, or construction outcome. Philosophically, a Project is a localized universe of collaboration, combining human expertise, digital information, physical materials, and financial capital.

## Responsibilities
- Aggregate related RFQs, Contracts, Tasks, and Workflows into a coherent structure.
- Track progress, milestones, and deliverables against timelines and budgets.
- Serve as the primary context for contextualizing Decisions, Evidence, and Risks.
- Ensure end-to-end traceability of the Digital Thread from need to final delivery.

## Relationships
- Owned by a `Buyer`.
- Involves multiple `Supplier`s and internal `Actor`s.
- Contains `RFQ`s, `Contract`s, `Document`s, and `Task`s.
- Governed by `Workflow`s.

## States
- `Draft`: Project scope is being defined.
- `Planning`: Requirements are being gathered, and initial RFQs drafted.
- `Execution`: Contracts are active, and physical/intellectual work is underway.
- `Closing`: Final deliveries, inspections, and financial settlements are concluding.
- `Completed`: All obligations met, and industrial memory extracted.
- `Cancelled`: Halted before completion.

## Business Rules
- A Project cannot be marked `Completed` until all associated Contracts are closed and Evidence is fully verified.
- Access to Project data is restricted to authorized entities based on the Trust Architecture.
- Must maintain a comprehensive Decision Record for all major phase gates.

## Events
- `ProjectInitiated`
- `PhaseChanged`
- `MilestoneReached`
- `ProjectCompleted`
""",

    "RFQ": """# Request for Quotation (RFQ)

## Definition
A formal solicitation issued by a Buyer seeking technical proposals and commercial bids. Philosophically, the RFQ is the translation of an abstract desire into a structured problem statement, seeking the optimal industrial solution from the ecosystem.

## Responsibilities
- Clearly define technical specifications, drawings, BOMs, and compliance requirements.
- Establish the commercial framework, including delivery terms (Incoterms), timelines, and payment structures.
- Act as the matching criteria for the Supplier Recommendation Engine.

## Relationships
- Belongs to a `Project` and is owned by a `Buyer`.
- Targets specific `Capability` profiles.
- Generates multiple `Offer`s from `Supplier`s.
- Incorporates `Document`s (Drawings, Specs).

## States
- `Draft`: Being prepared by the Buyer, assisted by AI Engines for completeness.
- `Published`: Broadcasted to eligible Suppliers.
- `Evaluating`: Receiving and analyzing Offers.
- `Awarded`: A Supplier has been selected.
- `Closed`: Process concluded (either awarded or cancelled).

## Business Rules
- Must pass the Engineering Reasoning Engine's completeness check before `Published`.
- Cannot be altered once `Published` without issuing a formal `Revision`.
- All interactions, Q&A, and clarifications must be recorded immutably.

## Events
- `RFQDrafted`
- `RFQPublished`
- `ClarificationRequested`
- `RFQAwarded`
""",

    "Offer": """# Offer

## Definition
A comprehensive proposal submitted by a Supplier in response to an RFQ, detailing price, lead time, technical approach, and terms. Philosophically, the Offer is a commitment of capability and capacity, a promise to transform the Buyer's requirement into reality.

## Responsibilities
- Provide transparent and accurate cost breakdowns and delivery schedules.
- Detail the manufacturing or engineering process to be utilized.
- Highlight any deviations, assumptions, or alternative technical proposals.
- Serve as the foundational document for a potential Contract.

## Relationships
- Responds to a specific `RFQ`.
- Authored by a `Supplier`.
- Evaluated by the `Buyer` (often with assistance from the `Cost` and `Risk` Engines).
- Evolves into a `Contract` if accepted.

## States
- `Draft`: Being formulated by the Supplier.
- `Submitted`: Officially locked and presented to the Buyer.
- `UnderReview`: Being evaluated.
- `Accepted`: Chosen by the Buyer.
- `Rejected`: Not selected.
- `Withdrawn`: Retracted by the Supplier before acceptance.

## Business Rules
- Once `Submitted`, it cannot be modified without a formal revision requested by the Buyer.
- Must remain valid for a specified validity period.
- Acceptance of an Offer automatically triggers the `Contract` generation workflow.

## Events
- `OfferSubmitted`
- `OfferRevised`
- `OfferAccepted`
- `OfferRejected`
""",

    "Contract": """# Contract

## Definition
A legally binding agreement between a Buyer and a Supplier, codifying the accepted Offer into enforceable obligations. Philosophically, the Contract is the ultimate expression of trust and alignment, transforming promises into measurable, tracked milestones.

## Responsibilities
- Define the exact scope of work, deliverables, and acceptance criteria.
- Establish the financial terms, payment milestones, and penalties/incentives.
- Govern the dispute resolution process and liability boundaries.
- Act as the ultimate source of truth for the execution phase.

## Relationships
- Binds a `Buyer` and a `Supplier`.
- Instantiated from an `Offer` and an `RFQ`.
- Drives `Workflow`s, `Task`s, and `Payment`s.
- Monitored by the `Execution Engine` and `Risk Engine`.

## States
- `Drafting`: Contract terms are being finalized and aligned.
- `PendingSignatures`: Awaiting cryptographic approval from authorized representatives.
- `Active`: In full effect and execution.
- `InDispute`: Execution halted or contested due to disagreements.
- `Fulfilled`: All obligations met and closed.
- `Terminated`: Ended prematurely.

## Business Rules
- Must be cryptographically signed by verified Identities representing both parties.
- Any change in scope requires a formal Change Order process, generating a new `Decision`.
- Milestones are explicitly tied to the submission and validation of `Evidence`.

## Events
- `ContractGenerated`
- `ContractSigned`
- `MilestoneAchieved`
- `ContractFulfilled`
""",

    "Knowledge": """# Knowledge

## Definition
The structured, contextualized, and reusable intelligence derived from actions, decisions, and outcomes within MetalHub. Philosophically, Knowledge is the "Industrial Memory" of the platform—the transformation of raw data and transient experience into lasting wisdom that guides future action.

## Responsibilities
- Capture lessons learned from successful and failed projects.
- Contextualize engineering data, manufacturing constraints, and market dynamics.
- Feed the AI Agents and Reasoning Engines to improve Guidance and Recommendations.
- Continuously elevate the Industrial Maturity Index of the entire ecosystem.

## Relationships
- Extracted from `Project`s, `Decision`s, `Risk`s, and `Evidence`.
- Delivered to Actors via `Guidance` and `Mentor Interaction Model`.
- Forms the core of the `Knowledge Graph`.

## States
- `Raw`: Unprocessed data or observations.
- `Verified`: Validated and structured by the Knowledge Reasoning Engine or expert review.
- `Codified`: Integrated into the active Knowledge Graph and available for inference.
- `Obsolete`: Outdated due to technological shifts or new superseding knowledge.

## Business Rules
- Knowledge extraction must respect data privacy and commercial confidentiality of individual Actors.
- Must be tagged with confidence levels and sources.
- Influences the platform's automated matching and risk assessment algorithms.

## Events
- `InsightCaptured`
- `KnowledgeVerified`
- `GraphUpdated`
""",

    "Experience": """# Experience

## Definition
The accumulated, contextual, and verified track record of an Actor (Supplier or Buyer) over time. Philosophically, Experience is the digital footprint of competence and reliability, moving beyond static claims to proven, lived reality.

## Responsibilities
- Aggregate historical performance metrics (on-time delivery, defect rates, responsiveness).
- Serve as the foundation for the Trust Capital and Industrial Maturity Index.
- Provide contextual proof of a Supplier's capability to execute complex or novel requirements.

## Relationships
- Attached to an `Identity` (Supplier or Buyer).
- Built from completed `Project`s, `Contract`s, and validated `Evidence`.
- Informs the `Supplier Matching Engine` and `Decision Review Board`.

## States
- `Emergent`: New actor with limited history; baseline experience.
- `Established`: Consistent track record with predictable performance.
- `Expert/Master`: Deep, proven capability in specialized domains.

## Business Rules
- Experience cannot be self-asserted; it must be derived from actual platform activity and verified `Evidence`.
- Recent experience carries a higher weighting than historical experience (decay function).
- Negative experiences (failures, disputes) are recorded immutably but can be mitigated through demonstrated corrective actions (Learning Decisions).

## Events
- `ExperienceAccrued`
- `MaturityIndexUpdated`
- `PerformanceReviewCompleted`
""",

    "Decision": """# Decision

## Definition
A recorded, immutable choice made by a Human Actor or an AI Engine, along with its context, alternatives considered, and expected outcomes. Philosophically, a Decision is the atomic unit of agency and trajectory change within the architecture, capturing *why* something happened, not just *what* happened.

## Responsibilities
- Document the rationale, evidence, and trade-offs behind a specific action (e.g., selecting a supplier, approving a deviation).
- Facilitate the "Decision Feedback Loop" by comparing expected outcomes against actual results.
- Create an audit trail for accountability and Trust.

## Relationships
- Made by an `Identity` or `System Actor`.
- Driven by `Guidance` and supported by `Evidence`.
- Impacts `Project`s, `Contract`s, and `Risk`s.
- Contributes to `Knowledge` and `Experience`.

## States
- `Proposed`: A decision is recommended but not yet finalized.
- `Committed`: The choice is made and locked.
- `Evaluated`: The outcome of the decision has been measured against expectations.
- `Reverted`: The decision was overturned (requires a new decision record to explain why).

## Business Rules
- Strategic and high-risk decisions require a formal Architecture Decision Record (ADR) or Decision Card.
- Must explicitly link to the Evidence used to make the choice.
- Decisions affecting contracts require cryptographic signature.

## Events
- `DecisionProposed`
- `DecisionCommitted`
- `OutcomeEvaluated`
""",

    "Guidance": """# Guidance

## Definition
Actionable, context-aware recommendations and insights provided by the MetalHub ecosystem to users. Philosophically, Guidance is the manifestation of the "Silent Mentor" and "Calm Intelligence"—providing the right information, at the right time, with the right tone, without overwhelming the user.

## Responsibilities
- Assist users in navigating complex workflows (e.g., drafting RFQs, evaluating Risks).
- Prevent errors by highlighting anomalies, missing evidence, or compliance gaps.
- Elevate the user's capability through "Silent Education" and the Mentor Interaction Model.

## Relationships
- Generated by AI Agents (e.g., `Engineering Intelligence Agent`, `Risk Engine`).
- Consumed by `Buyer`s, `Supplier`s, and `Engineer`s.
- Based on the `Knowledge Graph` and current `State`.
- Influences `Decision`s.

## States
- `Generated`: Contextual advice created by the engine.
- `Presented`: Shown to the user.
- `Accepted`: The user acted upon the guidance.
- `Dismissed`: The user chose to ignore the guidance.

## Business Rules
- Must adhere to the Calm Intelligence Guidelines (non-intrusive, clear, empowering).
- The system must track the acceptance/dismissal rate of Guidance to improve the recommendation models.
- Must never override human agency in critical commercial decisions.

## Events
- `GuidanceGenerated`
- `GuidanceAccepted`
- `GuidanceDismissed`
""",

    "Risk": """# Risk

## Definition
A quantifiable uncertainty or potential negative event that could impact the success of a Project, Contract, or the broader ecosystem. Philosophically, Risk is the friction of reality—the acknowledgment that engineering and supply chains operate in imperfect environments requiring constant vigilance and mitigation.

## Responsibilities
- Identify, quantify, and track potential failures in technical execution, commercial delivery, or compliance.
- Trigger preemptive Guidance and Workflow adjustments to mitigate probability or impact.
- Maintain a transparent risk profile for transparent decision-making.

## Relationships
- Identified by the `Risk Reasoning Engine` or Human `Actor`s.
- Attached to `Supplier`s, `RFQ`s, `Contract`s, or `Project`s.
- Mitigated by specific `Task`s or `Decision`s.

## States
- `Identified`: A potential risk is logged.
- `Assessed`: Probability and Impact have been quantified.
- `Mitigated`: Actions have been taken to reduce the risk.
- `Realized`: The risk event has occurred (becomes an Issue).
- `Closed`: The risk is no longer applicable.

## Business Rules
- High-severity risks must be explicitly acknowledged by the responsible Actors before a Contract can be signed.
- Risk profiles are dynamically updated based on incoming `Evidence` and `Events`.
- Risk engines must continuously scan for systemic risks across the ecosystem.

## Events
- `RiskIdentified`
- `RiskLevelChanged`
- `RiskRealized`
- `RiskMitigated`
""",

    "Workflow": """# Workflow

## Definition
A defined, orchestrated sequence of states, tasks, and events that govern a specific business, engineering, or commercial process within MetalHub. Philosophically, a Workflow is the digital physics of the platform—ensuring order, compliance, and predictable progression of complex collaborative efforts.

## Responsibilities
- Enforce the sequence of operations (e.g., RFQ Creation -> Publication -> Bidding -> Award).
- Automate state transitions based on rules and AI evaluations.
- Coordinate the handoff of responsibilities between Human Actors and System Agents.
- Ensure no steps are skipped, particularly regarding compliance and Evidence gathering.

## Relationships
- Orchestrates `Task`s.
- Transitions the `State` of domain objects like `RFQ`, `Offer`, and `Contract`.
- Triggered by `Event`s.
- Monitored by the `Coordination Reasoning Engine`.

## States
- `Initiated`: The workflow has started.
- `Running`: Tasks are actively being executed.
- `Blocked`: Waiting on external input, evidence, or a critical decision.
- `Completed`: The sequence has successfully finished.
- `Terminated`: Halted abnormally.

## Business Rules
- Workflows must be resilient, capable of handling edge cases, revisions, and rollbacks.
- Must maintain a comprehensive audit log of every transition.
- Certain transitions require multi-party consensus (e.g., Contract Signing).

## Events
- `WorkflowStarted`
- `StepCompleted`
- `WorkflowBlocked`
- `WorkflowCompleted`
""",

    "Task": """# Task

## Definition
A specific, bounded unit of work or action assigned to an Actor (human or system) within the context of a Workflow or Project. Philosophically, a Task is the fundamental quantum of action, translating macro-goals into actionable, trackable human or machine effort.

## Responsibilities
- Clearly define what needs to be done, by whom, and by when.
- Provide the context and tools required to complete the action.
- Serve as the collection point for `Evidence` of completion.

## Relationships
- Component of a `Workflow` or `Project`.
- Assigned to an `Identity` (Human or Agent).
- Completion often requires submitting a `Document` or `Decision`.

## States
- `Created`: Task defined but not yet ready for action.
- `Pending`: Waiting for preceding tasks to complete.
- `Assigned`: Ready and waiting for the assignee to act.
- `InProgress`: Actively being worked on.
- `InReview`: Awaiting validation of the submitted evidence.
- `Completed`: Successfully finished.
- `Overdue`: Timeline breached.

## Business Rules
- A task cannot be marked `Completed` until its required validation (Evidence) is accepted.
- Automated system tasks must complete within defined SLAs; otherwise, they escalate to human review.
- Tasks represent the primary interface for calculating "Decision Friction."

## Events
- `TaskAssigned`
- `TaskStarted`
- `TaskCompleted`
- `TaskEscalated`
""",

    "Evidence": """# Evidence

## Definition
Verifiable data, documents, digital signatures, or system traces that prove a claim, the completion of a task, or compliance with a standard. Philosophically, Evidence is the currency of Truth in MetalHub, combating uncertainty and replacing blind trust with cryptographic and factual certainty.

## Responsibilities
- Validate the physical reality against digital requirements.
- Build the "Evidence Graph" and prevent "Evidence Debt" in projects.
- Serve as the unassailable foundation for dispute resolution and Trust Capital calculation.

## Relationships
- Required by `Task`s, `Workflow`s, and `Contract`s.
- Supports `Decision`s and `Knowledge` creation.
- Usually takes the form of a `Document`, `Inspection Report`, or `Metadata`.

## States
- `Requested`: Required by the system but not yet provided.
- `Submitted`: Uploaded or generated but pending validation.
- `Verified`: Authenticated by AI (e.g., OCR, semantic check) or human inspectors.
- `Rejected`: Deemed invalid, incomplete, or fraudulent.

## Business Rules
- Critical evidence must be immutable once verified (e.g., anchored to a Ledger).
- The system proactively flags "Evidence Debt" when processes move forward without required proofs.
- AI Agents must perform first-pass validation on all submitted Evidence to reduce friction.

## Events
- `EvidenceRequested`
- `EvidenceSubmitted`
- `EvidenceVerified`
- `EvidenceRejected`
""",

    "Document": """# Document

## Definition
A structured piece of information, file, or data package used as a reference, specification, or Evidence. Philosophically, a Document is the formal vessel of human and engineering intent, capturing complex specifications in a standardized format.

## Responsibilities
- Store complex, multi-dimensional data (e.g., CAD files, PDFs, BOMs, Certificates).
- Maintain rigorous version control and revision history.
- Ensure accessibility while strictly enforcing data privacy and access rights.

## Relationships
- Attached to `RFQ`s, `Offer`s, `Contract`s, and `Project`s.
- Can serve as `Evidence`.
- Interpreted by the `Engineering Reasoning Engine`.

## States
- `Draft`: Being authored.
- `Published`: Official and active.
- `Superseded`: Replaced by a newer revision.
- `Archived`: No longer active but retained for memory.

## Business Rules
- All Documents must be hashed and versioned; a change in content creates a new revision, never overwriting the old.
- Sensitive documents (e.g., proprietary drawings) must have granular, time-bound access controls.
- Documents submitted as part of a Contract become legally binding artifacts.

## Events
- `DocumentUploaded`
- `DocumentRevised`
- `AccessGranted`
- `DocumentArchived`
""",

    "Identity": """# Identity

## Definition
The digital representation and verified attributes of an Actor (Organization, Person, or System Agent) within MetalHub. Philosophically, Identity is the anchor of accountability and reputation, reflecting not just who someone is, but their Character, Essence, and standing in the ecosystem.

## Responsibilities
- Provide secure authentication and role-based access control.
- Maintain the unified profile of capabilities, certifications, and historical performance.
- Serve as the nexus for Trust Capital, Experience, and the Identity Compass.

## Relationships
- Belongs to a `Supplier`, `Buyer`, `Engineer`, or `System`.
- Accumulates `Experience` and `Trust`.
- Governed by the `Identity Discovery Framework (IAF)` and `Identity Mirror`.

## States
- `Unverified`: Email/basic details registered, but identity not proven.
- `Verified`: KYC/KYB checks completed; identity is trusted.
- `Suspended`: Access revoked due to violations.

## Business Rules
- Identity verification is mandatory for executing Contracts or accessing sensitive RFQs.
- Organizational identities can encompass multiple Person identities (employees) with varying roles.
- Trust Capital is inherently tied to Identity and cannot be transferred.

## Events
- `IdentityCreated`
- `IdentityVerified`
- `RoleAssigned`
- `IdentitySuspended`
""",

    "Skill": """# Skill

## Definition
A specific competency, certification, or manufacturing capability possessed by an Actor. Philosophically, a Skill is the atomic unit of potential, defining what an entity is genuinely capable of executing with high quality.

## Responsibilities
- Allow precise, granular matching between Buyer requirements and Supplier capabilities.
- Track the lifecycle and validity of certifications (e.g., ISO standards, specific welding certifications).
- Form the basis of the Industrial Capability Network (ICN).

## Relationships
- Owned by an `Identity` (usually a `Supplier` or `Person`).
- Targeted by `RFQ`s.
- Validated by `Evidence` (Certificates, past Projects).

## States
- `Claimed`: Asserted by the actor but unverified.
- `Verified`: Backed by valid Evidence or successful platform execution.
- `Expired`: Certification or capability is no longer valid.

## Business Rules
- Critical skills (e.g., pressure vessel welding) remain `Claimed` (and thus unusable for critical RFQs) until strict `Evidence` is verified.
- Skills naturally decay if not utilized or re-certified over time.
- The system actively suggests Skill acquisitions based on market demand via the Learning Backlog.

## Events
- `SkillAdded`
- `SkillVerified`
- `SkillExpired`
"""
}

for name, content in content_map.items():
    filepath = os.path.join(domain_dir, f"{name}.md")
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Domain object files successfully created.")
