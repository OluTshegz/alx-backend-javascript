/* eslint-disable */
export default class HolbertonClass {
    constructor(size, location) {
      if (typeof size !== 'number' || typeof location !== 'string') throw new Error();
      this._size = size;
      this._location = location;
    }
    // // Method to handle casting to Number
    // valueOf() {
    //     return this._size;
    // }
    // // Method to handle casting to String
    // toString() {
    //     return this._location;
    // }

    [Symbol.toPrimitive](hint) {
        if (hint === 'string') {
          return this._location;
        }
        if (hint === 'number') {
          return this._size;
        }
        return this;
    }
}
