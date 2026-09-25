---
title: Contextus Information Model
description: Defines the maintained information boundaries shared by organization, product, and project contexts.
type: spec
date: 2026-09-25
version: 0.1.0
---

# Contextus Information Model

## Context Project

A Context Project is a maintained view of one bounded subject. The subject may be an organization, brand, product, product line, service, platform, open-source project, or delivery project.

Every project defines:

- `subject`: what the context describes;
- `scope`: what is included and excluded;
- `perspective`: the working role when it materially limits authority or detail;
- `relationships`: ownership, dependency, or sibling relationships that affect interpretation;
- `default_visibility`: the fallback output boundary.

Do not require a company context before creating a product context. Relationships may form a graph rather than a strict tree.

## Maintained Layers

| Layer | Responsibility |
| --- | --- |
| Current context | The facts an ordinary task may rely on now |
| Decisions | Confirmed choices, rationale, rejected alternatives, and durable boundaries |
| Changes | Meaningful transitions that altered the subject or its context |
| Open questions | Missing, conflicting, or unverified information that may change work |
| Archive | Superseded information retained only when its history remains useful |

Git may preserve file history, but it does not replace semantic changes or decision rationale.

## Core Modules

Use only modules that affect future decisions or prevent repeated questions.

| Module | Typical information |
| --- | --- |
| Identity | Current and former names, definition, category, stage, owner, domains, interfaces, regions, languages |
| Positioning | Problem, value, market, alternatives, differentiation, strategic direction, explicit non-goals |
| Audience | Users, jobs, scenarios, pain points, triggers, exclusions, regional differences |
| Capabilities | Product lines, functions, workflows, inputs, outputs, limits, availability, lifecycle state |
| Business | Business model, plan boundaries, billing unit, trials, regional rules, enterprise availability |
| Brand | Naming, terminology, voice, prohibited claims, localization rules, asset locations |
| Surfaces | Website and application entry points, major routes, interface types, locale patterns, key journeys |
| Technical | Repositories, stack, deployment, data ownership, dependencies, architectural constraints |
| Ecosystem | APIs, plugins, integrations, upstream and downstream dependencies |

An organization normally emphasizes identity, portfolio, markets, and organization-wide constraints. A product emphasizes audience, capabilities, availability, and commercial boundaries. A project emphasizes objective, success criteria, scope, dependencies, decisions, status, and delivery constraints.

## Lifecycle Status

Use a status only when omitting it could mislead:

- `current`: effective now;
- `planned`: confirmed but not yet available;
- `experimental`: in a limited test or unstable release;
- `deprecated`: still present but scheduled for removal;
- `historical`: no longer effective;
- `disputed`: incompatible claims remain unresolved.

## Visibility

- `public`: safe for public outputs and external agents;
- `internal`: available to the team and internal agents;
- `confidential`: included only with explicit authorization for the current task.

Visibility and truth status are independent. A confirmed fact may still be confidential.

## Sources

Store a source link or file reference and a precise location when useful. Do not copy the source itself.

```yaml
sources:
  - type: project-document
    location: ./release-notes.md
    reference: "2026-09-25 / CLI public beta"
```

Use section-level source metadata for groups of related facts. Require more precise source and time information for volatile or high-risk claims such as pricing, availability, usage metrics, roadmap commitments, regional access, and legal constraints.

## Inclusion Test

Keep information when its absence or misinterpretation would likely cause a person or agent to make a wrong decision, produce false work, or ask the team the same question again.

Exclude secrets, temporary instructions, generic research, execution logs, speculative conclusions, raw transcripts, and large copies of data already maintained elsewhere.

