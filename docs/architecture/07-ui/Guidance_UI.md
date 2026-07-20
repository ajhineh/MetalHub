# Guidance UI

## Philosophy
The UI manifestation of the "Silent Mentor". Guidance must be helpful but completely non-intrusive. It should empower the user to make better decisions without feeling like the system is taking over.

## Core Concepts
- **Non-blocking Assistance**: Guidance should never block a user from proceeding, unless a hard compliance or safety rule is violated. It is advice, not a barrier.
- **Contextual Placement**: Recommendations appear exactly where they are relevant (e.g., next to a specific input field) rather than in a generic global notification center.
- **Action-Oriented**: Guidance should clearly suggest what to do next, often providing a one-click way to apply the recommendation.

## Interaction Logic
- **Inline Hints**: Small, subtle icons or underlined text that expand into tooltips when hovered or clicked, offering immediate context.
- **The Mentor Sidebar**: A collapsible panel that aggregates all guidance for the current view. It updates dynamically as the user modifies the state.
- **Feedback Loop**: Every piece of guidance includes a subtle mechanism to dismiss or accept it. This interaction is sent back to the `Guidance Engine` to improve future recommendations.
- **Calm Animations**: Use smooth, subtle micro-animations (e.g., soft fades) to introduce new guidance, avoiding jarring pop-ups or flashing colors.
