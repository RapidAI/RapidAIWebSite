import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import path from "node:path";
import test from "node:test";

const projectRoot = process.cwd();

test("critical static route files are present", () => {
  const requiredRouteFiles = [
    "src/pages/blog/index.astro",
    "src/pages/blog/[slug].astro",
    "src/pages/blog/page/[page].astro",
    "src/pages/publications/[slug].astro",
    "src/pages/update/page/[page].astro"
  ];

  for (const routeFile of requiredRouteFiles) {
    assert.equal(
      existsSync(path.join(projectRoot, routeFile)),
      true,
      `expected route file to exist: ${routeFile}`
    );
  }
});
