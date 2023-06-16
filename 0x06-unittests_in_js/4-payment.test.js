/* eslint-disable no-unused-expressions */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/prefer-expect-assertions */
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const spyUtils = sinon.spy(console);
    const spyStub = sinon.stub(Utils, 'calculateNumber');

    spyStub.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(spyStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(spyStub.callCount).to.be.equal(1);
    expect(spyUtils.log.calledWith('The total is: 10')).to.be.true;
    expect(spyUtils.log.callCount).to.be.equal(1);

    spyStub.restore();
    spyUtils.log.restore();
  });
});
