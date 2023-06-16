/* eslint-disable jest/no-hooks */
/* eslint-disable no-unused-expressions */
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/valid-expect */
const sinon = require('sinon');
const { expect } = require('chai');
// const { assert } = require('console');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  beforeEach('setting up spy for each test', () => {
    sinon.spy(console, 'log');
  });

  afterEach('restore spy after each test', () => {
    console.log.restore();
  });
  it('test the results of getPaymentTokenFromApi(false)', async () => {
    await new Promise((done) => {
      getPaymentTokenFromAPI(false);
      expect(console.log.calledOnce).to.be.true;
      done();
    });
  });

  it('test the results of getPaymentTokenFromApi(true)', async () => {
    await new Promise((done) => {
      getPaymentTokenFromAPI(true);
      expect(console.log.calledOnce).to.be.true;
      done();
    });
  });
});
