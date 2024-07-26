/* eslint-disable */
import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    if (typeof floors !== 'number') throw new Error();
    super(sqft);
    this._floors = floors;
    this._sqft = sqft;
  }
  // Getter for sqft
  get sqft() {
    return this._sqft;
  }
  // Setter for sqft
  set sqft(value) {
    this._sqft = value;
  }
  // Getter for floors
  get floors() {
    return this._floors;
  }
  // Setter for floors
  set floors(value) {
    this._floors = value;
  }
  // Override evacuationWarningMessage method in parent class
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
