/**
 * Hindi / Devanagari Unicode utilities.
 */

const DEVANAGARI_START = 0x0900;
const DEVANAGARI_END = 0x097f;

/**
 * Check whether a character belongs to the Devanagari Unicode block.
 */
export function isDevanagariCharacter(char: string): boolean {
  if (!char) return false;

  const codePoint = char.codePointAt(0);

  if (codePoint === undefined) {
    return false;
  }

  return (
    codePoint >= DEVANAGARI_START &&
    codePoint <= DEVANAGARI_END
  );
}

/**
 * Check whether a string contains Devanagari text.
 */
export function containsDevanagari(text: string): boolean {
  for (const char of text) {
    if (isDevanagariCharacter(char)) {
      return true;
    }
  }

  return false;
}

/**
 * Check whether the complete string is Devanagari text
 * apart from whitespace and punctuation.
 */
export function isDevanagariText(text: string): boolean {
  if (!text.trim()) {
    return false;
  }

  let foundDevanagari = false;

  for (const char of text) {
    if (
      /\s/.test(char) ||
      /[.,!?;:'"()[\]{}\-–—।॥]/.test(char)
    ) {
      continue;
    }

    if (!isDevanagariCharacter(char)) {
      return false;
    }

    foundDevanagari = true;
  }

  return foundDevanagari;
}

/**
 * Normalize common Unicode variations.
 */
export function normalizeHindiText(text: string): string {
  return text.normalize("NFC");
}

/**
 * Remove zero-width formatting characters that can
 * accidentally appear in copied Hindi text.
 */
export function cleanHindiText(text: string): string {
  return text
    .normalize("NFC")
    .replace(/[\u200B-\u200D\uFEFF]/g, "");
}
