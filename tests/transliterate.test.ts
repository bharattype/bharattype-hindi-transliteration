import { describe, expect, it } from "vitest";

import {
  transliterate,
  transliterateWithResult,
} from "../src/transliterate";

describe("transliterate", () => {
  it("returns empty output for empty input", () => {
    expect(transliterate("")).toBe("");
  });

  it("preserves existing Devanagari text", () => {
    expect(transliterate("नमस्ते")).toBe("नमस्ते");
  });

  it("preserves Roman text when no engine is configured", () => {
    expect(transliterate("namaste")).toBe("namaste");
  });

  it("returns a structured result", () => {
    const result = transliterateWithResult("namaste");

    expect(result.input).toBe("namaste");
    expect(result.output).toBe("namaste");
  });

  it("normalizes existing Hindi Unicode", () => {
    const result = transliterate("भारत");

    expect(result).toBe("भारत");
  });
});
