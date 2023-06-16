/* eslint-disable jest/no-test-callback */
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/valid-expect */
const { describe, it } = require('mocha');
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('async testing with done callback', (done) => {
    getPaymentTokenFromAPI(true).then((data) => {
      expect(data).to.have.property('data');
      done();
    });
  });
});
