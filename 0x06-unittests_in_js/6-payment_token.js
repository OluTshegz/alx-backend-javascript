/* eslint-disable */

/**
 * Returns a promise that resolves to an object if success is true.
 * @param {boolean} success - Determines if the promise should resolve.
 * @returns {Promise<Object>} - A promise that resolves to {data: 'Successful response from the API'}.
 */
function getPaymentTokenFromAPI(success) {
  // Return a promise that resolves if success is true
  return new Promise((resolve) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    }
  });
}
  
// Export the function
module.exports = getPaymentTokenFromAPI;
