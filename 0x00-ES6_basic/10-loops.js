/* eslint-disable guard-for-in */
/* eslint-disable no-param-reassign */
export default function appendToEachArrayValue(array, appendString) {
    const list = [];
    for (const item of array) {
        list.push(appendString + item);
    }
  
    return list;
}
