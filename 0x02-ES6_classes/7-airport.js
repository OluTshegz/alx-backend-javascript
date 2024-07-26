/* eslint-disable */
// import util from 'util';
export default class Airport {
    constructor(name, code) {
      this._name = name;
      this._code = code;
    }
    // Getter for name
    get name() {
      return this._name;
    }
    // Setter for name
    set name(value) {
      this._name = value;
    }
    // Getter for code
    get code() {
      return this._code;
    }
    // Setter for code
    set code(value) {
      this._code = value;
    }
    // method for default string description of airport code
    toString() {
      return `[object ${this.code}]`;
    }
    // get [Symbol.toStringTag]() {
    //   return this.code;
    // }
    // [util.inspect.custom]() {
    //     return `Airport [${this._code}] { _name: '${this._name}', _code: '${this._code}' }`;
    // }
}
