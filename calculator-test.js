
it('should calculate the monthly rate correctly', function () {
  // Test case 1: Calculate monthly payment with different input values
  const values1 = { amount: 100000, years: 10, rate: 5 };
  const payment1 = calculateMonthlyPayment(values1);
  expect(payment1).toEqual("1060.66");
});


it("should return a result with 2 decimal places", function() {
  // Test case for ensuring the result always has 2 decimal places
  const values = { amount: 150000, years: 20, rate: 6.25 };
  const payment = calculateMonthlyPayment(values);
  expect(payment).toMatch(/^\d+\.\d{2}$/);
});

/// etc
