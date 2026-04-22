import assert from "node:assert/strict";
import test from "node:test";

import { getRapidAIProjects } from "../src/utils/github.ts";

test("getRapidAIProjects preserves fallback order while refreshing stars and href", async (t) => {
  const originalFetch = globalThis.fetch;

  t.after(() => {
    globalThis.fetch = originalFetch;
  });

  globalThis.fetch = async () =>
    new Response(
      JSON.stringify([
        {
          full_name: "RapidAI/Second",
          stargazers_count: 22,
          html_url: "https://github.com/RapidAI/Second",
          fork: false,
          archived: false
        },
        {
          full_name: "RapidAI/First",
          stargazers_count: 11,
          html_url: "https://github.com/RapidAI/First",
          fork: false,
          archived: false
        },
        {
          full_name: "RapidAI/Unused",
          stargazers_count: 999,
          html_url: "https://github.com/RapidAI/Unused",
          fork: false,
          archived: false
        }
      ]),
      {
        status: 200,
        headers: { "content-type": "application/json" }
      }
    );

  const fallback = [
    {
      name: "First",
      stars: "1",
      repo: "RapidAI/First",
      category: "OCR",
      summary: "first summary",
      href: "https://example.com/first"
    },
    {
      name: "Second",
      stars: "2",
      repo: "RapidAI/Second",
      category: "ASR",
      summary: "second summary",
      href: "https://example.com/second"
    }
  ];

  const merged = await getRapidAIProjects(fallback);

  assert.deepEqual(
    merged.map((project) => project.repo),
    ["RapidAI/First", "RapidAI/Second"]
  );
  assert.equal(merged[0]?.stars, "11");
  assert.equal(merged[1]?.stars, "22");
  assert.equal(merged[0]?.href, "https://github.com/RapidAI/First");
  assert.equal(merged[1]?.href, "https://github.com/RapidAI/Second");
});

test("getRapidAIProjects falls back to local data when the API request fails", async (t) => {
  const originalFetch = globalThis.fetch;

  t.after(() => {
    globalThis.fetch = originalFetch;
  });

  globalThis.fetch = async () => {
    throw new Error("network unavailable");
  };

  const fallback = [
    {
      name: "First",
      stars: "1",
      repo: "RapidAI/First",
      category: "OCR",
      summary: "first summary",
      href: "https://example.com/first"
    }
  ];

  const merged = await getRapidAIProjects(fallback);

  assert.deepEqual(merged, fallback);
});
