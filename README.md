# BharatType Hindi Text Utilities

Open-source Hindi text utilities for JavaScript and TypeScript applications.

BharatType Hindi Text Utilities provides reusable tools for working with Hindi text, including Kruti Dev 010 to Unicode conversion.

## Features

- Kruti Dev 010 to Unicode conversion
- Hindi text processing
- Unicode normalization
- TypeScript support
- JavaScript compatible
- Browser and Node.js friendly
- No UI dependencies
- MIT licensed

## Kruti Dev to Unicode

Convert Kruti Dev 010 encoded Hindi text into standard Unicode Hindi.

### Example

```ts
import { krutiDevToUnicode } from "@bharattype/hindi-transliteration";

const result = krutiDevToUnicode("pkS");

console.log(result);
