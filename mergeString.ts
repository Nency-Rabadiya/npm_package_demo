type KeyValue = {
  [key: string]: number;
};

function mergeStrings(s1: string, s2: string): string {
  const occurrencesS1: KeyValue = countOccurrences(s1);
  const occurrencesS2: KeyValue = countOccurrences(s2);

  let mergedResult: string = "";

  let i: number = 0,
    j: number = 0;

  while (i < s1.length && j < s2.length) {
    const charS1 = s1[i];
    const charS2 = s2[j];

    const countS1: number = occurrencesS1[charS1] || 0;
    const countS2: number = occurrencesS2[charS2] || 0;

    if (countS1 !== countS2) {
      mergedResult += countS1 < countS2 ? charS1 : charS2;
      i += countS1 < countS2 ? 1 : 0;
      j += countS1 >= countS2 ? 1 : 0;
    } else {
      // If occurrences are equal, compare lexicographically
      mergedResult += charS1 <= charS2 ? charS1 : charS2;
      i += charS1 <= charS2 ? 1 : 0;
      j += charS1 > charS2 ? 1 : 0;
    }
  }

  // Append the remaining characters from s1 and s2
  mergedResult += s1.slice(i) + s2.slice(j);

  return mergedResult;
}

function countOccurrences(str: string): KeyValue {
  const occurrences = {};
  for (const char of str) {
    occurrences[char] = (occurrences[char] || 0) + 1;
  }
  return occurrences;
}

console.log(mergeStrings("dce", "cccbd"));
console.log(mergeStrings("super", "tower"));
