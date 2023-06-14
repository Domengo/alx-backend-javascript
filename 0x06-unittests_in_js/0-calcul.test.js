/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should correctly add two rounded numbers', () => {
    assert.strictEqual(calculateNumber(1.4, 2.6), 4);
    assert.strictEqual(calculateNumber(1.5, 2.5), 5);
    assert.strictEqual(calculateNumber(1.6, 2.4), 4);
  });

  it('should handle negative numbers correctly', () => {
    assert.strictEqual(calculateNumber(-1.4, -2.6), -4);
    assert.strictEqual(calculateNumber(-1.5, -2.5), -3);
    assert.strictEqual(calculateNumber(-1.6, -2.4), -4);
  });

  it('should round down when the decimal part is below 0.5', () => {
    assert.strictEqual(calculateNumber(1.1, 2.1), 3);
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
    assert.strictEqual(calculateNumber(1.4, 2.9), 4);
  });

  it('should round up when the decimal part is equal to or above 0.5', () => {
    assert.strictEqual(calculateNumber(1.5, 2.5), 5);
    assert.strictEqual(calculateNumber(1.9, 2.9), 5);
    assert.strictEqual(calculateNumber(1.6, 2.9), 5);
  });
});
