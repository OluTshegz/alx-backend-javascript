/** */
export default function cleanSet(set, startString) {
  // If startString is an empty string, return an empty string immediately
  // if (startString === undefined || startString.length === 0 || startString === '') {
  if (!startString || startString === undefined || startString === '' || startString.length === 0) {
    return '';
  }

  // Use `Array.from` to 'convert' the `set` to an `array` and `map` over its `values`
  // return Array.from(set)

  return [...set]
    .filter((str) => str.startsWith(startString)) // Filter values that start with `startString`
    .map((str) => str.slice(startString.length)) // Remove the prefix `startString`
    // from each element to Extract the rest of the string after `startString`
    .join('-'); // Join the resulting array elements with a hyphen
}
