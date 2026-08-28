export {
  transliterate,
  transliterateWithResult,
} from "./transliterate";

export {
  cleanHindiText,
  containsDevanagari,
  isDevanagariCharacter,
  isDevanagariText,
} from "./unicode";

export type {
  TransliterationFunction,
  TransliterationOptions,
  TransliterationResult,
} from "./types";

export {
  normalizeUnicode,
  removeZeroWidthCharacters,
  normalizeSpaces,
  normalizeHindiText,
} from "./normalize";

export { krutiDevToUnicode } from "./krutidevToUnicode";
