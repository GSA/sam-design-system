#!/usr/bin/env node
/**
 * Tests for scripts/check-baseline-not-increased.mjs — the CI-only guard
 * that compares eslint-baseline.json on a PR branch against the base
 * branch's version and fails if any shared workspace's ceiling increased.
 *
 * Run: node --test scripts/check-baseline-not-increased.test.mjs
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const script = join(scriptDir, "check-baseline-not-increased.mjs");

function run(args) {
  try {
    const stdout = execFileSync("node", [script, ...args], {
      encoding: "utf8",
    });
    return { status: 0, stdout, stderr: "" };
  } catch (error) {
    return {
      status: error.status ?? 1,
      stdout: error.stdout?.toString() ?? "",
      stderr: error.stderr?.toString() ?? "",
    };
  }
}

function withTempDir(fn) {
  const dir = mkdtempSync(join(tmpdir(), "baseline-guard-"));
  try {
    return fn(dir);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

function writeBaseline(dir, name, data) {
  const path = join(dir, name);
  writeFileSync(path, JSON.stringify(data));
  return path;
}

test("passes when the baseline is unchanged", () => {
  withTempDir((dir) => {
    const base = writeBaseline(dir, "base.json", { root: 10, "test-app": 4 });
    const head = writeBaseline(dir, "head.json", { root: 10, "test-app": 4 });
    const { status } = run([base, head]);
    assert.equal(status, 0);
  });
});

test("passes when a baseline is lowered", () => {
  withTempDir((dir) => {
    const base = writeBaseline(dir, "base.json", { root: 10, "test-app": 4 });
    const head = writeBaseline(dir, "head.json", { root: 6, "test-app": 4 });
    const { status } = run([base, head]);
    assert.equal(status, 0);
  });
});

test("fails when a baseline is raised", () => {
  withTempDir((dir) => {
    const base = writeBaseline(dir, "base.json", { root: 10, "test-app": 4 });
    const head = writeBaseline(dir, "head.json", { root: 20, "test-app": 4 });
    const { status, stderr } = run([base, head]);
    assert.equal(status, 1);
    assert.match(stderr, /baseline increased 10 → 20/);
  });
});

test("fails when any of multiple workspaces is raised", () => {
  withTempDir((dir) => {
    const base = writeBaseline(dir, "base.json", { root: 10, "test-app": 4 });
    const head = writeBaseline(dir, "head.json", {
      root: 10,
      "test-app": 9,
    });
    const { status, stderr } = run([base, head]);
    assert.equal(status, 1);
    assert.match(stderr, /test-app: baseline increased 4 → 9/);
  });
});

test("allows a brand-new workspace entry not present on the base branch", () => {
  withTempDir((dir) => {
    const base = writeBaseline(dir, "base.json", { root: 10 });
    const head = writeBaseline(dir, "head.json", { root: 10, "new-pkg": 50 });
    const { status } = run([base, head]);
    assert.equal(status, 0);
  });
});

test("treats a missing base-branch baseline file as an empty baseline", () => {
  withTempDir((dir) => {
    const base = writeBaseline(dir, "base.json", {});
    const head = writeBaseline(dir, "head.json", { root: 10 });
    const { status } = run([base, head]);
    assert.equal(status, 0);
  });
});

test("fails on a non-numeric baseline value", () => {
  withTempDir((dir) => {
    const base = writeBaseline(dir, "base.json", { root: 10 });
    const head = writeBaseline(dir, "head.json", { root: "ten" });
    const { status, stderr } = run([base, head]);
    assert.equal(status, 1);
    assert.match(stderr, /invalid baseline value/);
  });
});

test("exits non-zero with usage when arguments are missing", () => {
  const { status, stderr } = run([]);
  assert.equal(status, 1);
  assert.match(stderr, /Usage:/);
});
