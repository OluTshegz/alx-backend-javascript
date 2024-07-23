/* eslint-disable */
export default function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
      // Simulate an asynchronous operation like an API call using setTimeout
      const success = true; // Change this to false to simulate a failure
  
      setTimeout(() => {
        if (success) {
          resolve("Success");
        } else {
          reject("Failure");
        }
      }, 3000);
    });
}
