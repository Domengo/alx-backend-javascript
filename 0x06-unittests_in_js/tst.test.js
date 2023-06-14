const sinon = require('sinon');
const assert = require('assert');

// The function to be spied on
function myFunction() {
  return 1 + 8;
}

// Creating a spy
const spy = sinon.spy(myFunction);

// Calling the spied function
spy();

// Verifying the spy
assert(spy.calledOnce, 'The function was not called once.');
assert(
  spy.calledWithExactly(),
  'The function was not called with the expected arguments.',
);
