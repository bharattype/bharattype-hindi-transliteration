import type {
  TransliterationOptions,
  TransliterationResult,
} from "./types";

import {
  containsDevanagari,
  normalizeHindiText,
} from "./unicode";

/**
 * Core transliteration function.
 *
 * The actual transliteration provider can be connected
 * independently from the public API.
 */
export function transliterate(
  input: string,
  options: TransliterationOptions = {}
): string {
  const text = input ?? "";

  if (!text.trim()) {
    return "";
  }

  // Already Hindi/Devanagari text.
  if (containsDevanagari(text)) {
    return normalizeHindiText(text);
  }

  /*
   * Transliteration engine will be connected here.
   *
   * We intentionally do not put Google-specific browser
   * code inside this reusable library.
   */

  if (options.preserveUnknown !== false) {
    return text;
  }

  return "";
}

/**
 * Return a structured transliteration result.
 */
export function transliterateWithResult(
  input: string,
  options: TransliterationOptions = {}
): TransliterationResult {
  const output = transliterate(input, options);

  return {
    input,
    output,
  };
}
