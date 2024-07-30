/** */
export default function groceriesList() {
  const groceriesMap = new Map();
  const obj = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  // Get all the keys in the object into an array
  // const list = Object.keys(obj);
  const list = Array.from(Object.keys(obj));
  // Use .forEach() to iterate over the array and set the value in the groceriesMap
  // list.forEach((item) => groceriesMap.set(item, obj[item]));
  // Map through the array and set the value to the key in the groceriesMap
  list.map((item) => groceriesMap.set(item, obj[item]));

  return groceriesMap;
}
