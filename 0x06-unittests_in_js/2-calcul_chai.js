/* eslint-disable */

// Define the function calculateNumber with the first parameter 'type'
function calculateNumber(type, a, b) {
  // Round both numbers to the nearest integer
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  // Perform operation based on 'type'
  if (type === 'SUM') {
    return roundedA + roundedB;
  } else if (type === 'SUBTRACT') {
    return roundedA - roundedB;
  } else if (type === 'DIVIDE') {
    // Check for division by zero
    if (roundedB === 0) {
      return 'Error';
    }
    return roundedA / roundedB;
  }
}

// Export the function for use in the test file
module.exports = calculateNumber;
