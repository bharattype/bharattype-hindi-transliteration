/**
 * Hindi text normalization utilities.
 *
 * These helpers are intentionally independent from the
 * transliteration engine so they can be reused by
 * browser, Node.js and TypeScript applications.
 */

/**
 * Normalize Unicode representation.
 */
export function normalizeUnicode(text: string): string {
  return text.normalize("NFC");
}

/**
 * Remove zero-width characters that may appear
 * when Hindi text is copied from websites or documents.
 */
export function removeZeroWidthCharacters(text: string): string {
  return text.replace(/[\u200B-\u200D\uFEFF]/g, "");
}

/**
 * Normalize whitespace while preserving line breaks.
 */
export function normalizeSpaces(text: string): string {
  return text
    .replace(/[ \t]+/g, " ")
    .replace(/ *\n */g, "\n")
    .trim();
}

/**
 * Clean Hindi text for normal application use.
 */
export function normalizeHindiText(text: string): string {
  return normalizeSpaces(
    removeZeroWidthCharacters(
      normalizeUnicode(text)
    )
  );
}
