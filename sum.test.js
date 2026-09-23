import { strict as assert } from "node:assert";
import { test } from "node:test";
import { sum } from "./sum.js";

test("sum adds", () => {
  assert.equal(sum(2, 3), 5);
});

test("sum adds negatives", () => {
  assert.equal(sum(-1, -2), -3);
});
