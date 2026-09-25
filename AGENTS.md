# Repository Guidance

Contextus is the maintained source of product and project context for AI agents.

- Keep `skills/contextus/SKILL.md` concise and route conditional detail to `references/`.
- Maintain each rule in one place. README explains the product; the skill defines agent behavior; references own detailed workflows and the information model.
- Treat templates as adaptable starting points. Remove unused sections instead of filling them with invented content or placeholders.
- Never promote an agent inference, search result, or code observation to confirmed context without user or team confirmation.
- Keep examples fictional and free of credentials, customer data, or private information.
- Run `npm test` after changing schemas, templates, examples, references, or skill metadata.

