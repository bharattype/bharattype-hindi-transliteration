export type TransliterationResult = {
  input: string;
  output: string;
};

export function transliterate(
  input: string,
  converter: (text: string) => string
): TransliterationResult {
  if (typeof input !== "string") {
    throw new TypeError("Input must be a string.");
  }

  if (typeof converter !== "function") {
    throw new TypeError("A converter function is required.");
  }

  return {
    input,
    output: converter(input),
  };
}
