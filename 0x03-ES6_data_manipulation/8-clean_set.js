/** */
export default function cleanSet(set, startString) {
  // If startString is an empty string, return an empty string immediately
  if (!startString || startString === undefined || startString === '' || startString.length === 0) {
    return '';
  }

  // Use `Array.from` to 'convert' the `set` to an `array` and `map` over its `values`
  // return Array.from(set)

  return [...set]
    // Filter values that start with `startString`
    .filter((str) => ((str || (str !== undefined)) ? str.startsWith(startString) : ''))
    // Remove the prefix `startString` from each element
    // to Extract the rest of the string after `startString`
    .map((str) => ((str || (str !== undefined)) ? str.slice(startString.length) : ''))
    .join('-'); // Join the resulting array elements with a hyphen
}
