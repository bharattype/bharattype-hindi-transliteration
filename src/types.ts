export interface TransliterationResult {
  input: string;
  output: string;
  confidence?: number;
}

export interface TransliterationOptions {
  /**
   * Return multiple possible Hindi suggestions.
   */
  maxSuggestions?: number;

  /**
   * Preserve punctuation and whitespace.
   */
  preserveFormatting?: boolean;

  /**
   * Return the original input when no conversion is possible.
   */
  preserveUnknown?: boolean;
}

export type TransliterationFunction = (
  input: string,
  options?: TransliterationOptions
) => string;
