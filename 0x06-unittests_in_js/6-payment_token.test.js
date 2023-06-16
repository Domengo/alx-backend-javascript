/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/valid-expect */
const { expect } = require('chai');
const { getPaymentTokenFromAPI } = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with the correct data when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((data) => {
        expect(data).to.have.property('data');
        done();
      });
  });
});
