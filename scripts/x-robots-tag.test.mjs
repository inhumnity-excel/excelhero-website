import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { X_ROBOTS_TAG_VALUE } from "./x-robots-tag-plugin.mjs";

test("X_ROBOTS_TAG_VALUE is noindex", () => {
  assert.equal(X_ROBOTS_TAG_VALUE, "noindex");
});

test("vercel.json applies global X-Robots-Tag", () => {
  const config = JSON.parse(readFileSync(new URL("../vercel.json", import.meta.url), "utf8"));
  const rule = config.headers?.find((h) => h.source === "/(.*)");
  assert.ok(rule, "expected catch-all headers rule");
  const tag = rule.headers?.find((h) => h.key === "X-Robots-Tag");
  assert.equal(tag?.value, "noindex");
});
