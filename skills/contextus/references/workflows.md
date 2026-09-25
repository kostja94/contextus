---
title: Contextus Workflows
description: Defines initialization, import, update, conflict resolution, maintenance, export, and snapshot behavior.
type: spec
date: 2026-09-25
version: 0.1.0
---

# Contextus Workflows

## Initialize

1. Identify the subject type, scope, perspective, visibility, and meaningful relationships.
2. Select the organization, product, or project template as the closest starting point.
3. Record explicit facts and explicit unknowns. Do not fill unused sections with generic prose.
4. Separate current facts from plans, decisions, changes, and history.
5. Add source references only where they improve trust or future verification.

## Import Existing Material

Import is non-destructive by default.

1. Inventory the supplied documents and their apparent responsibilities.
2. Identify candidate subjects and context boundaries.
3. Classify material as current, planned, experimental, historical, disputed, or uncertain.
4. Group duplicate claims and select the natural owner for each maintained fact.
5. Report contradictions with locations, versions, available evidence, and a recommended question.
6. Produce a proposed Contextus structure and candidate content without editing the sources.
7. Ask for confirmation before promoting agent-derived conclusions to current truth.

Do not assume the newest document is correct. Dates indicate chronology, not authority.

## Update

For an explicit human-provided change:

1. Locate the current owner of the fact.
2. Determine whether the change is a correction, addition, lifecycle transition, rebrand, pivot, or withdrawal.
3. Update current context and its substantive `updated` date.
4. Record one semantic change containing the previous state, new state, effective time, source reference, and short reason when known.
5. Archive the previous value only when its history remains useful beyond Git.
6. Find dependent context statements. Automatically repair only deterministic fields and references; report semantic impacts for review.

Agent-discovered information remains a candidate until confirmed.

## Resolve A Conflict

Present:

- the disputed claim;
- every conflicting version and its location;
- source and date information;
- whether each version describes current, planned, or historical state;
- the smallest question that can resolve the conflict.

Ask the relevant person when possible. Search public sources only for public facts. Absence of public evidence does not disprove an internal capability or plan.

Until resolution, label the claim `disputed` and prevent ordinary exports from presenting either version as settled truth.

## Maintain

Run only the checks relevant to the request:

- **Conflict:** incompatible versions of the same claim.
- **Staleness:** volatile facts whose verification is no longer trustworthy.
- **Coverage:** missing information that blocks likely work.
- **Reference:** broken or ambiguous source locations.
- **Duplication:** multiple complete maintenance points for one fact.

Report confirmed problems, possible problems, missing critical context, and recommended actions. Do not assign a mechanical quality score.

## Export

1. Establish the task, audience, and maximum permitted visibility.
2. Select only context that changes the task's decisions or output.
3. Include current facts by default.
4. Label planned, experimental, deprecated, and disputed material.
5. Exclude historical material unless the task directly depends on it or the user asks for it.
6. Exclude confidential information without explicit authorization.
7. Surface task-blocking unknowns before allowing invented substitutes.
8. Add important sources inline and collect minor references at the end.

An export is a generated view, not another maintained source.

## Snapshot

Save an export only when the user requests it, the output is a formal delivery, or later reproduction materially matters. Record the source context, generation time, task purpose, audience, and visibility. Never silently refresh an old snapshot after current context changes.

## External Impact

Contextus may identify downstream repositories, pages, content, or campaigns that could now be stale. Report those impacts. Do not modify an external asset without a separate explicit task.

