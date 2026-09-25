---
name: contextus
description: Create, import, maintain, inspect, and export durable context for an organization, product, or project. Use when a team needs current product truth, decisions, changes, uncertainty, visibility filtering, or a task-specific context package for people or AI agents. Do not use for personal memory, generic note-taking, or silently rewriting downstream assets.
metadata:
  version: 0.1.0
---

# Contextus

Maintain a reliable current context for an organization, product, or project, then provide the minimum relevant truth to each task.

## Establish The Context Project

Look for `contextus.md` at the project root first. It is the only standard discovery entry. Its frontmatter maps the maintained modules; read only those relevant to the task. Legacy `project-context.md` files and tool-specific locations are fallback material, not alternative standards.

Determine the subject, scope, working perspective, included and excluded concerns, visibility, and relationships before choosing a template. A Context Project may describe a company, one product, or a bounded initiative. Do not force these into one hierarchy.

Ask one concise, direction-changing question when missing information would alter the subject, authority, scope, or output. Otherwise proceed.

Read [references/information-model.md](references/information-model.md) when creating or restructuring context. Choose the closest template from `../../templates/`, remove unused sections, and add a module only when the subject needs it.

## Choose The Operation

- **Initialize:** create context from explicit user or team knowledge.
- **Import:** inspect existing material and propose context without modifying sources.
- **Update:** apply an explicit human-provided change to current context and record its meaning.
- **Resolve:** present conflicting claims and seek a person or reliable evidence; do not silently choose.
- **Maintain:** find material gaps, stale claims, broken references, and duplication.
- **Export:** generate a purpose-limited view filtered by relevance and visibility.
- **Snapshot:** preserve an important output only when reproducibility or delivery requires it.

Read [references/workflows.md](references/workflows.md) for the selected operation. Do not load unrelated procedures.

Read [references/integrations.md](references/integrations.md) when another skill or repository needs to consume context, submit candidate facts, or operate without Contextus.

## Truth Rules

- Explicit user or team statements may update current context directly.
- Agent inference, code observations, project documents, and external research are candidate facts until a person confirms them.
- Public search may clarify public claims but cannot disprove undisclosed internal facts merely by finding no evidence.
- Distinguish `current`, `planned`, `experimental`, `deprecated`, `historical`, and `disputed` where ambiguity would cause incorrect work.
- Distinguish `public`, `internal`, and `confidential`. Apply least visibility when the output audience is unclear.
- State an unknown instead of completing it with plausible language.

## Keep One Maintained Truth

Maintain a fact fully in one natural owner. Elsewhere retain at most one useful summary and one directly relevant reference. Keep active truth separate from decisions, changes, open questions, and archives.

Do not duplicate live data already owned by code, configuration, or another maintained source. Record the durable rule and source location instead.

## Output

Default exports contain only current, task-relevant context. Exclude history unless the task depends on it or the user asks for it. Label planned, experimental, deprecated, and disputed material explicitly. Never include confidential context without explicit authorization.

Generated outputs are disposable views, not new sources of truth. Save a snapshot only when the user requests it or reproducibility materially matters.

## Boundaries

- Do not store secrets, credentials, unnecessary personal data, raw reasoning traces, or undigested meeting transcripts.
- Do not turn a temporary task instruction into durable context.
- Do not rewrite external repositories, pages, or content assets as a side effect of context maintenance. Report impact and wait for a separate explicit task.
- Do not build an approval system, evidence archive, database, or visual interface unless the user explicitly expands the task.

## Completion

Report the context created or changed, any conflict or unknown that remains, the visibility applied, and any downstream asset that may now be stale.
