/**
 * `for...in` loops: iterate over `object` `properties`
 * and can include inherited properties (for objects)
 * `for...in` loops on `array` iterates the array's `index`
 * `for...of` loops: iterates over the `values` of an iterable `object`
 * (like arrays, strings, maps, sets) without
 * enumerating inherited properties (for arrays)
 * traditional `for` loop: access elements by their index
 * `no-param-reassign`: avoid modifying function
 * arguments to maintain function purity
 * creating a new array (list) and populating it
 * with modified elements from the input array
 * modifying the content of the list array,
 * it's not directly modifying the original array parameter
 */
export default function appendToEachArrayValue(array, appendString) {
  const list = [];
  /* eslint-disable-next-line guard-for-in */
  for (const item of array) {
    /* eslint-disable-next-line no-param-reassign */
    list.push(appendString + item);
  }

  return list;
}
