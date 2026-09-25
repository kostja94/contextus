---
title: Atlas CLI Context
description: Current product context for the fictional Atlas CLI developer tool.
type: context
date: 2026-09-25
updated: 2026-09-25
status: active
visibility: internal
subject:
  name: Atlas CLI
  type: product
scope:
  includes:
    - Product positioning
    - User-facing capabilities and availability
    - Public launch context
  excludes:
    - Parent company financials
---

# Atlas CLI

## Identity And Positioning

Atlas CLI is a command-line interface for running the fictional Atlas deployment workflow from local development environments and CI.

## Users And Scenarios

The current primary users are developers who already use Atlas and need repeatable scripted deployments.

## Capabilities And Limits

### Public beta

> Status: experimental  
> Visibility: public  
> Source: [release notes](https://example.com/atlas/releases), 2026-09-25 public beta entry

The CLI supports authentication, project selection, deployment, and deployment-status checks. It does not yet manage billing or organization membership.

## Interfaces And Availability

The public beta is distributed through npm. Windows, macOS, and Linux are supported through the same package.

## Confirmed Decisions

- Documentation must call the release a public beta, not generally available.
- The web application remains the source of truth for billing and membership.

## Open Questions

- The general-availability date is not confirmed.

## Sources

- [Atlas release notes](https://example.com/atlas/releases)

