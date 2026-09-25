import { readFile, readdir } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const required = [
  "README.md",
  "LICENSE",
  "AGENTS.md",
  "package.json",
  "skills/contextus/SKILL.md",
  "skills/contextus/agents/openai.yaml",
  "skills/contextus/references/information-model.md",
  "skills/contextus/references/workflows.md",
  "schemas/contextus-manifest.schema.json"
];

const failures = [];

async function text(relative) {
  return readFile(new URL(relative, root), "utf8");
}

for (const relative of required) {
  try {
    await text(relative);
  } catch {
    failures.push(`Missing required file: ${relative}`);
  }
}

const skill = await text("skills/contextus/SKILL.md");
if (!skill.startsWith("---\nname: contextus\n")) failures.push("SKILL.md must start with valid Contextus frontmatter");
if (!skill.includes("description:")) failures.push("SKILL.md is missing its description");
if (!skill.includes("references/information-model.md") || !skill.includes("references/workflows.md")) {
  failures.push("SKILL.md must route to both maintained references");
}

const schema = JSON.parse(await text("schemas/contextus-manifest.schema.json"));
for (const field of ["title", "description", "type", "date", "status", "visibility", "subject", "scope"]) {
  if (!schema.required.includes(field)) failures.push(`Schema missing required field: ${field}`);
}

const templateDir = new URL("templates/", root);
const templates = (await readdir(templateDir)).filter((file) => file.endsWith(".md"));
if (templates.sort().join(",") !== "organization.md,product.md,project.md") {
  failures.push("Templates must contain organization.md, product.md, and project.md");
}

for (const file of templates) {
  const body = await readFile(new URL(file, templateDir), "utf8");
  for (const marker of ["description:", "type: context", "date:", "visibility:", "subject:", "scope:", "## Open Questions", "## Sources"]) {
    if (!body.includes(marker)) failures.push(`${file} is missing ${marker}`);
  }
}

const exampleDir = new URL("examples/", root);
const examples = (await readdir(exampleDir)).filter((file) => file.endsWith(".md"));
if (examples.length < 3) failures.push("At least three realistic examples are required");

const allMarkdown = [];
async function collect(url) {
  for (const entry of await readdir(url, { withFileTypes: true })) {
    const next = new URL(`${entry.name}${entry.isDirectory() ? "/" : ""}`, url);
    if (entry.isDirectory()) await collect(next);
    else if (entry.name.endsWith(".md")) allMarkdown.push(next);
  }
}
await collect(root);

for (const file of allMarkdown) {
  const body = await readFile(file, "utf8");
  if (/\b(TODO|TBD|N\/A)\b/.test(body)) failures.push(`Unresolved placeholder in ${file.pathname}`);
}

if (failures.length) {
  console.error(failures.map((failure) => `- ${failure}`).join("\n"));
  process.exit(1);
}

console.log(`Contextus validation passed: ${templates.length} templates, ${examples.length} examples, ${allMarkdown.length} Markdown files.`);
