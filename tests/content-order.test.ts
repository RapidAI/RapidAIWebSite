import assert from "node:assert/strict";
import test from "node:test";

import { orderContentEntriesByFile } from "../src/utils/content-order.ts";

test("orderContentEntriesByFile sorts entries by file id with numeric awareness", () => {
  const entries = [{ id: "10-end" }, { id: "2-middle" }, { id: "01-start" }];

  const ordered = orderContentEntriesByFile(entries);

  assert.deepEqual(
    ordered.map((entry) => entry.id),
    ["01-start", "2-middle", "10-end"]
  );
});

test("orderContentEntriesByFile returns a new array without mutating the input", () => {
  const entries = [{ id: "b" }, { id: "a" }];

  const ordered = orderContentEntriesByFile(entries);

  assert.notStrictEqual(ordered, entries);
  assert.deepEqual(
    entries.map((entry) => entry.id),
    ["b", "a"]
  );
});
