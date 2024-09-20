// Test suite for the cart page
describe('Cart page', () => {
  // Test case: Correct status code when `id` is a number
  it('Correct status code when :id is a number', (done) => {
    request.get('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200); // Expect 200 status for valid `id`
      expect(body).to.equal('Payment methods for cart 12'); // Expect correct response body
      done(); // Call done when the test finishes
    });
  });

  // Test case: Correct status code when `id` is NOT a number (should return 404)
  it('Correct status code when :id is NOT a number', (done) => {
    request.get('http://localhost:7865/cart/hello', (error, response, body) => {
      expect(response.statusCode).to.equal(404); // Expect 404 for invalid `id`
      done(); // Call done when the test finishes
    });
  });
});
