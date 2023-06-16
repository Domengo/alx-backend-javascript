const { getPaymentTokenFromAPI } = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with the correct data when success is true', async () => {
    expect.assertions(1);
    const result = await getPaymentTokenFromAPI(true);
    expect(result).toStrictEqual({ data: 'Successful response from the API' });
  });
});
