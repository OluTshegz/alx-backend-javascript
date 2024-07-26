
export default function appendToEachArrayValue(array, appendString) {
    const list = [];
    for (const item of array) {
        list.push(appendString + item);
    }
  
    return list;
}
