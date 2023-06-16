const sinon = require('sinon');
const assert = require('assert');

let calls = 0;
const obj = {
  myFunction(data) {
    return ++calls;
  },
};

const spy = sinon.spy(obj, 'myFunction');

obj.myFunction('test');

assert.equal(spy.getCall(0).args[0], 'test');

// Returns 1, which means the real `myFunction()` was called,
// rather than a stub.
assert.equal(spy.getCall(0).returnValue, 1);
