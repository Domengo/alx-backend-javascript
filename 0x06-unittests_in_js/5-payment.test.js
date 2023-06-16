/* eslint-disable no-unused-vars */
/* eslint-disable jest/no-hooks */
/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */
/* eslint-disable jest/prefer-expect-assertions */
const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToAPI', () => {
  let beforAfter;

  beforeEach(() => {
    if (!beforAfter) {
      beforAfter = sinon.spy(console);
    }
  });

  afterEach(() => {
    beforAfter.log.resetHistory();
  });

  it('sendPaymentRequestToAPI with 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(beforAfter.log.calledWith('The total is: 120')).to.be.true;
    expect(beforAfter.log.calledOnce).to.be.true;
  });

  it('sendPaymentRequestToAPI with 10, and 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(beforAfter.log.calledWith('The total is: 20')).to.be.true;
    expect(beforAfter.log.calledOnce).to.be.true;
  });
});
