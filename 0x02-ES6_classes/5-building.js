export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  evacuationWarningMessage() {
    if (this.constructor === Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
