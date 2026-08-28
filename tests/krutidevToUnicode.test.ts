import { describe, expect, it } from "vitest";
import { krutiDevToUnicode } from "../src/krutidevToUnicode";

describe("Kruti Dev to Unicode", () => {
  it("converts basic Kruti Dev characters", () => {
    expect(krutiDevToUnicode("d")).toBe("क");
    expect(krutiDevToUnicode("v")).toBe("अ");
  });

  it("converts vowel combinations", () => {
    expect(krutiDevToUnicode("vk")).toBe("आ");
    expect(krutiDevToUnicode("vks")).toBe("ओ");
    expect(krutiDevToUnicode("vkS")).toBe("औ");
  });

  it("converts special sequence correctly", () => {
    expect(krutiDevToUnicode("pkS")).toBe("चौ");
  });

  it("returns empty string for empty input", () => {
    expect(krutiDevToUnicode("")).toBe("");
  });

  it("keeps normal Unicode text usable", () => {
    expect(krutiDevToUnicode("भारत")).toBe("भारत");
  });
});
