/* eslint-disable */
export default function iterateThroughObject(reportWithIterator) {
    return Array.from(reportWithIterator).join(' | ');
}

// export default function iterateThroughObject(reportWithIterator) {
//     // Initialize the iterator
//     let iteratorResult = reportWithIterator.next();
    
//     // Variable to accumulate the result string
//     let resultString = '';
  
//     // Loop through the iterator until it's done
//     while (!iteratorResult.done) {
//       // Append the current value followed by a separator
//       resultString += `${iteratorResult.value} | `;
      
//       // Get the next value from the iterator
//       iteratorResult = reportWithIterator.next();
//     }
  
//     // Remove the trailing ' | ' and return the final string
//     return resultString.slice(0, -3);
// }
