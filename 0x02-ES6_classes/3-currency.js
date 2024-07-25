/* eslint-disable */
export default class Currency {
    constructor(code, name) {
      if (typeof code !== 'string' || typeof name !== 'string') throw new Error();
      this._code = code;
      this._name = name;
    }
    // Getter for code
    get code() {
      return this._code;
    }
    // Setter for code
    set code(val) {
      this._code = val;
    }
    // Getter for name
    get name() {
      return this._name;
    }
    // Setter for name
    set name(val) {
      this._name = val;
    }
    // Method to display full currency
    displayFullCurrency() {
      return `${this._name} (${this._code})`;
    }
}
