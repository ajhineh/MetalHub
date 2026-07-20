# Navigation

## Philosophy
"Workflow Is the Product." Navigation in MetalHub should not feel like browsing a catalog; it should feel like progressing through a structured, logical engineering workflow.

## Core Concepts
- **Context Preservation**: Users should never lose their place. Deep links, breadcrumbs, and persistent state ensure that if a user leaves a complex RFQ draft to check a supplier profile, they can return seamlessly.
- **Progressive Disclosure**: Do not overwhelm the user with all available actions at once. Reveal advanced features and settings only when the context demands it.
- **Goal-Oriented Routing**: Navigation is structured around goals (e.g., "Create RFQ", "Evaluate Proposals") rather than data structures (e.g., "View Tables").

## Interaction Logic
- **Primary Workspaces**: Split the application into focused workspaces (e.g., Planning, Execution, Review).
- **The Command Palette**: Provide a keyboard-driven command palette for power users to jump directly to specific entities or actions without clicking through menus.
- **Stateful Navigation**: When navigating away from an unsaved form, the system automatically preserves the draft state and presents a non-intrusive resume prompt upon return.
