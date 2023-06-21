class Person {
  constructor(name) {
    this._name = name; // Prefixing with "_" conventionally indicates a private property
  }

  // Getter method
  get name() {
    return this._name;
  }

  // Setter method
  set name(newName) {
    if (typeof newName === "string") {
      this._name = newName;
    } else {
      console.log("Invalid name. Name must be a string.");
    }
  }
}

const person = new Person("John");
console.log(person.name); // Output: John

person.name = "Jane"; // Using the setter
console.log(person.name); // Output: Jane

person.name = 42; // Using the setter with an invalid value
// Output: Invalid name. Name must be a string.
console.log(person.name); // Output: Jane (value remains unchanged)
