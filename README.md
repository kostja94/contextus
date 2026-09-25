# Contextus: Product Context Layer for AI Agents

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/kostja94/contextus)](https://github.com/kostja94/contextus/stargazers)
[![Last commit](https://img.shields.io/github/last-commit/kostja94/contextus)](https://github.com/kostja94/contextus/commits/main)

Contextus is a file-first Agent Skill for maintaining the current truth about a company, product, or project. It gives people and agents one readable source for product facts, marketing, brand, website, technical context, decisions, changes, and unresolved conflicts.

## Quick Start

Install the skill:

```bash
npx skills add kostja94/contextus --skill contextus
```

Ask the agent to create the first context:

```text
Use contextus to create a product context for Acme Studio from the facts I provide.
```

The first meaningful result is a root `contextus.md`: a human-readable overview with machine-readable YAML frontmatter and links to any detailed context modules.

Existing material can be imported without changing its source files:

```text
Use contextus to analyze these project documents, identify current facts,
conflicts, history, and gaps, then propose a Contextus project.
Do not modify the source documents.
```

## What Contextus Maintains

A Context Project may describe an organization, one product, or a bounded delivery project. It can maintain complete project-specific context across:

- identity, positioning, users, scenarios, capabilities, and limits;
- pricing, commercial rules, markets, locales, and availability;
- marketing research, keywords, competitors, content, and channel decisions;
- brand terminology, voice, visual identity, and prohibited claims;
- website structure, pages, routes, interfaces, and user journeys;
- repositories, architecture, deployment, data ownership, and technical constraints;
- confirmed decisions, meaningful changes, open questions, and useful history.

Contextus does not copy live operational data already owned by code, configuration, or another maintained system. It records the durable rule, necessary interpretation, and source location.

## One Standard Entry

Every adopted project has one canonical entry at its repository root:

```text
contextus.md
```

Its frontmatter identifies the subject, scope, visibility, format version, and maintained module paths. Its body gives people and agents a concise current overview. Detailed modules own their topics; the entry does not duplicate their full content.

Legacy `project-context.md` files and tool-specific paths may still be read as fallback material. They are not new-project templates and do not become parallel context systems.

## Core Workflow

The `contextus` skill supports seven operations through one entry point:

| Operation | Result |
| --- | --- |
| Initialize | Create context from explicit team or user knowledge |
| Import | Classify existing material without overwriting its source |
| Update | Change current truth and record the semantic transition |
| Resolve | Compare conflicting claims and request the missing judgment |
| Maintain | Find stale, missing, duplicated, or broken context |
| Export | Generate the minimum context required for one task and audience |
| Snapshot | Preserve an important task context when reproduction matters |

Explicit team statements can update current context directly. Agent research, code observations, project documents, and public sources remain candidate facts until a person confirms them. Unknown information stays unknown instead of becoming plausible copy.

Contextus distinguishes lifecycle states such as `current`, `planned`, `experimental`, `deprecated`, `historical`, and `disputed`. It also filters `public`, `internal`, and `confidential` information for each output.

## Git-Like Context Evolution

Product truth changes as teams launch and retire capabilities, alter pricing, rebrand, expand markets, and pivot. Contextus keeps a ready-to-use current state while recording attributable, comparable, and reversible semantic changes.

Team statements, agent research, documents, code observations, and public sources act as structured contribution channels. Contextus normalizes their claims, sources, dates, status, and visibility. When inputs disagree, it exposes a branch-like semantic difference and asks for resolution instead of silently selecting or blending a version.

The analogy stops at the useful mechanics. Contributors are not reduced to APIs, and ordinary users do not manage branches or rebases.

## Use With Other Agent Skills

- [Marketing Skills](https://github.com/kostja94/marketing-skills) consumes project truth for SEO, content, channels, and strategy work.
- [Pagina](https://github.com/kostja94/pagina) consumes project truth while building pages and returns confirmed facts or candidates.
- [Bricks](https://github.com/kostja94/bricks) consumes relevant product, interface, brand, and technical context while building components.

These projects remain usable without Contextus when the user supplies sufficient project material. They do not create or maintain another durable context system. The exact downstream behavior is maintained in the [integration contract](skills/contextus/references/integrations.md).

## Boundaries

Contextus manages durable project context. It does not:

- make product or business strategy on the team's behalf;
- treat an agent inference as a confirmed fact;
- modify websites, repositories, campaigns, or other downstream assets without a separate explicit task;
- store secrets, credentials, evidence archives, or undigested meeting transcripts;
- act as personal memory, an enterprise approval platform, or a general document warehouse.

A hosted service, full CLI, database, and visual interface are intentionally deferred while the file model and Agent Skill workflow are proven.

## Repository

```text
skills/contextus/
  SKILL.md
  agents/openai.yaml
  references/
    information-model.md
    workflows.md
    integrations.md
templates/
  organization.md
  product.md
  project.md
schemas/contextus-manifest.schema.json
examples/
scripts/validate.mjs
```

The [information model](skills/contextus/references/information-model.md) owns context boundaries. [Workflows](skills/contextus/references/workflows.md) own lifecycle behavior. Templates are adaptable starting points rather than mandatory document sets.

## Development

Run the repository checks after changing the skill, templates, schema, references, or examples:

```bash
npm test
```

## License

[MIT](LICENSE)
