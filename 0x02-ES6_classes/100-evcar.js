import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // Getters and setters for each attribute
  get motor() {
    return this._motor;
  }

  set motor(value) {
    this._motor = value;
  }

  get color() {
    return this._color;
  }

  set color(value) {
    this._color = value;
  }

  get range() {
    return this._range;
  }

  set range(value) {
    this._range = value;
  }

  // Overriding cloneCar method to return instance of Car instead of EVCar
  cloneCar() {
    return new Car();
  }
}
