import { describe, expect, it } from "vitest";

import {
  normalizeUnicode,
  removeZeroWidthCharacters,
  normalizeSpaces,
  normalizeHindiText,
} from "../src";

describe("Hindi text normalization", () => {
  it("normalizes Unicode text", () => {
    const result = normalizeUnicode("नमस्ते");

    expect(result).toBe("नमस्ते");
  });

  it("removes zero-width characters", () => {
    const result = removeZeroWidthCharacters(
      "नम\u200Bस्ते"
    );

    expect(result).toBe("नमस्ते");
  });

  it("normalizes repeated spaces", () => {
    const result = normalizeSpaces(
      "नमस्ते    भारत"
    );

    expect(result).toBe("नमस्ते भारत");
  });

  it("normalizes Hindi text", () => {
    const result = normalizeHindiText(
      "  नमस्ते   भारत  "
    );

    expect(result).toBe("नमस्ते भारत");
  });
});
