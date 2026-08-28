import { krutiDevToUnicode } from "../src";

const krutiDevText = "pkS";

const unicodeText = krutiDevToUnicode(krutiDevText);

console.log("Kruti Dev:", krutiDevText);
console.log("Unicode:", unicodeText);
