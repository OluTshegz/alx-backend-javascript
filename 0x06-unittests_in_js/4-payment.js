/* eslint-disable */

// Import the Utils module
const Utils = require('./utils');

/**
 * Calls Utils.calculateNumber and logs the total to the console.
 * @param {number} totalAmount - The total amount.
 * @param {number} totalShipping - The total shipping cost.
 */
function sendPaymentRequestToApi(totalAmount, totalShipping) {
  // Call Utils.calculateNumber with the 'SUM' operation
  const result = Utils.calculateNumber('SUM', totalAmount, totalShipping);

  // Log the result to the console
  console.log(`The total is: ${result}`);
}

// Export the sendPaymentRequestToApi function
module.exports = sendPaymentRequestToApi;
