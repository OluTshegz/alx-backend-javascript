// Import necessary modules: chai for assertions
// and request to make HTTP requests to the server
const chai = require('chai');
const request = require('request');
const expect = chai.expect; // Extract 'expect' for assertions

// Test suite for the index page
describe('Index page', () => {
  // Test case: Checking the status code of the root route
  it('Correct status code?', (done) => {
    request.get('http://localhost:7865/', (error, response, body) => {
      // Expect the status code to be 200 (OK)
      expect(response.statusCode).to.equal(200);
      done(); // Call done when the test finishes
    });
  });

  // Test case: Checking the correct result (response body)
  it('Correct result?', (done) => {
    request.get('http://localhost:7865/', (error, response, body) => {
      // Expect the response to be the welcome message
      expect(body).to.equal('Welcome to the payment system');
      done(); // Call done when the test finishes
    });
  });
});

// Test suite for the cart page
describe('Cart page', () => {
  // Test case: Correct status code when `id` is a number
  it('Correct status code when :id is a number', (done) => {
    request.get('http://localhost:7865/cart/12', (error, response, body) => {
      // Expect 200 status for valid `id`
      expect(response.statusCode).to.equal(200);
      // Expect correct response body
      expect(body).to.equal('Payment methods for cart 12');
      done(); // Call done when the test finishes
    });
  });

  // Test case: Correct status code when `id` is NOT a number (should return 404)
  it('Correct status code when :id is NOT a number', (done) => {
    request.get('http://localhost:7865/cart/hello', (error, response, body) => {
      // Expect 404 for invalid `id`
      expect(response.statusCode).to.equal(404);
      done(); // Call done when the test finishes
    });
  });
});

// Test suite for the /available_payments endpoint
describe('Available payments', () => {
  // Test case: Correct response for available payment methods
  it('Returns correct payment methods', (done) => {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      const expected = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(response.statusCode).to.equal(200); // Expect status 200
      // Use deep equality to compare objects
      expect(JSON.parse(body)).to.deep.equal(expected);
      done(); // Call done when the test finishes
    });
  });
});

// Test suite for the /login endpoint
describe('Login', () => {
  // Test case: Correct login message is returned
  it('Returns correct welcome message', (done) => {
    const options = {
      url: 'http://localhost:7865/login',
      // Send `userName` in the request body
      json: { userName: 'Betty' }
    };
    request.post(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200); // Expect status 200
      // Expect correct welcome message
      expect(body).to.equal('Welcome Betty');
      done(); // Call done when the test finishes
    });
  });
});
