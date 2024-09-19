/* eslint-disable */

// Define the function calculateNumber
function calculateNumber(a, b) {
  // Round both numbers to the nearest integer
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);
  // Return the sum of the rounded numbers
  return roundedA + roundedB;
}

// Export the function for use in other modules (such as the test file)
module.exports = calculateNumber;
