import { describe, expect, it } from "vitest";
import { transliterate } from "../src/transliterate";

describe("transliterate", () => {
  it("returns input and converted output", () => {
    const result = transliterate(
      "namaste",
      () => "नमस्ते"
    );

    expect(result.input).toBe("namaste");
    expect(result.output).toBe("नमस्ते");
  });

  it("throws when input is not a string", () => {
    expect(() =>
      transliterate(
        123 as unknown as string,
        () => "नमस्ते"
      )
    ).toThrow("Input must be a string.");
  });

  it("throws when converter is missing", () => {
    expect(() =>
      transliterate(
        "namaste",
        undefined as unknown as (text: string) => string
      )
    ).toThrow("A converter function is required.");
  });
});
