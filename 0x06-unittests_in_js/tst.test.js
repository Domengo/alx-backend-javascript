const sinon = require('sinon');

// Create a stub
const myStub = sinon.stub();

// Configure the stub's behavior
myStub.returns('Stubbed response');

// Use the stub in your test
console.log(myStub());// Output: 'Stubbed response'
