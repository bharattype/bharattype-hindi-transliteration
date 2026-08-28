import { transliterate } from "../src/index";

const result = transliterate(
  "namaste",
  (text) => {
    // Replace this function with your own
    // transliteration implementation.
    return text;
  }
);

console.log(result);
