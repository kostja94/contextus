---
title: Contextus Integration Contract
description: Defines how downstream skills discover, consume, and return project context without creating parallel memory systems.
type: spec
date: 2026-09-25
version: 0.1.0
---

# Contextus Integration Contract

## Discovery

Downstream skills look for `contextus.md` at the project root. When present, they read its frontmatter and load only the modules relevant to the current task.

When it is absent, a downstream skill may use user-provided facts, repository documentation, the current conversation, or legacy context files. It remains responsible for completing its own task when sufficient information is available.

Absence of Contextus must not make a marketing, page, component, or development skill refuse otherwise feasible work.

## Ownership

Contextus owns all durable project-specific context, including product, audience, marketing, brand, website, technical, decision, and change information.

Domain skills own reusable methods for producing or applying that information. They do not own another project-context template, lifecycle model, conflict policy, archive format, or durable memory layer.

## Reading Context

A consumer:

1. establishes the task and permitted visibility;
2. reads the entry overview and task-relevant modules;
3. treats lifecycle labels and unknowns as constraints;
4. does not load unrelated history by default;
5. asks when missing information would materially change the result.

## Returning Information

Explicit human statements discovered during a downstream task may be submitted to Contextus as confirmed updates. Agent research, code observations, and document interpretations return as candidate facts with their source locations.

When Contextus is unavailable, the downstream skill reports durable facts and candidates in its completion summary. It does not create `project-context.md`, invent an archive, or silently establish another maintained source.

## External Changes

Contextus maintenance and downstream execution remain separate permissions. A context update may report that pages, content, code, or campaigns are stale, but it does not authorize changing those assets. A downstream task may produce new facts, but it does not authorize restructuring the entire context system.

