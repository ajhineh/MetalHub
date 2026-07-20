# Document

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
