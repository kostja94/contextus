# Contextus

**Living product and project context for AI agents.**

Contextus helps teams maintain the current truth about an organization, product, or project and give each person or agent only the context its task requires. It keeps current facts readable, records meaningful changes, exposes uncertainty instead of filling gaps, and separates active context from history.

Contextus is file-first. Markdown and YAML remain usable without a hosted service, database, or visual application.

## Why Contextus

Agents often invent missing details, reuse outdated claims, or treat plans as released capabilities. Product reality also changes: teams ship and retire features, alter pricing, rebrand, enter new markets, and pivot.

Contextus provides a maintained context layer where:

- explicit team updates can become current truth immediately;
- agent discoveries remain candidates until a person confirms them;
- current, planned, experimental, deprecated, disputed, and historical information stay distinguishable;
- conflicts trigger investigation instead of silent overwrites;
- history is available for traceability but excluded from ordinary task context;
- public, internal, and confidential information can be filtered for each output.

## Design Principles

Contextus combines two ideas.

**Git-like evolution for product truth.** Product context changes over time, so meaningful updates should remain attributable, comparable, and reversible. Contextus keeps a ready-to-use current state while recording semantic changes such as a launch, deprecation, rebrand, correction, or pivot. History explains how the context evolved without forcing every agent to reconstruct the present from old events.

**Structured contribution interfaces.** Team statements, agent research, project documents, code observations, and public sources are different input channels into the same context system. Contextus normalizes their claims, sources, dates, status, and visibility so they can be compared instead of blended into prose. When two inputs disagree, it exposes a branch-like semantic diff and asks for resolution rather than silently selecting or merging a version.

The analogy stops at the useful mechanics. Contributors are not reduced to APIs, and ordinary users do not need to manage branches or rebases. Human authority, source type, and uncertainty remain explicit parts of the context.

## Install

```bash
npx skills add kostja94/contextus --skill contextus
```

## Use

Create context from a conversation:

```text
Use contextus to create a product context for Acme Studio from the facts I provide.
```

Import existing material without changing it:

```text
Use contextus to analyze these project documents, identify current facts,
conflicts, history, and gaps, then propose a Contextus project.
Do not modify the source documents.
```

Maintain or export context:

```text
Use contextus to record that the CLI moved from private beta to public beta.
Then generate the minimum context needed by an agent writing its launch page.
```

## Repository Model

```text
skills/contextus/
  SKILL.md
  agents/openai.yaml
  references/
    information-model.md
    workflows.md
templates/
  organization.md
  product.md
  project.md
schemas/contextus-manifest.schema.json
examples/
scripts/validate.mjs
```

The main skill handles initialization, non-destructive import, updates, conflict resolution, maintenance, export, and snapshots. Templates vary by subject scope but share one information model.

## Design Boundaries

- Contextus manages context; it does not make product strategy on the team's behalf.
- It updates its own context files. Changes to websites, repositories, campaigns, or other assets require a separate explicit task.
- It stores source links or file references, not evidence archives.
- It is not a personal memory system, enterprise approval platform, or general document warehouse.
- A visual interface, hosted service, and full CLI are intentionally deferred until the file model and agent workflow are proven.

## Validate

```bash
npm test
```

## License

[MIT](LICENSE)
