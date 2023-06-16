/* eslint-disable jest/no-test-return-statement */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/lowercase-name */
const request = require('request');
const { describe, it } = require('mocha');
const { expect } = require('chai');

describe('Index page', function () {
  const options = {
    url: 'http://localhost:7865/',
    method: 'GET',
  };
  it('check correct status code', function () {
    return new Promise((done) => {
      request(options, function (err, res, body) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });
  it('check correct content', function () {
    return new Promise((done) => {
      request(options, function (err, res, body) {
        expect(body).to.contain('Welcome to the payment system');
        done();
      });
    });
  });
  it('check correct content length', function () {
    return new Promise((done) => {
      request(options, function (err, res, body) {
        expect(res.headers['content-length']).to.equal('29');
        done();
      });
    });
  });
});
