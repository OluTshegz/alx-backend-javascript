/* eslint-disable */
export default class Building {
    constructor(sqft) {
        if ( this.constructor.name != Building &&
            (this.evacuationWarningMessage === undefined ||
                !this.evacuationWarningMessage) ) {
            throw new Error('Class extending Building must override evacuationWarningMessage');
        } // It checks/confirms if this abstract class extends or any class can extend from it
        if (typeof sqft !== 'number') throw new Error();
        this._sqft = sqft;
        this.evacuationWarningMessage();
    }
    // Getter for sqft
    get sqft() {
        return this._sqft;
    }
    // Setter for sqft
    set sqft(value) {
        this._sqft = value;
    }
    evacuationWarningMessage() {
        if (this.constructor.name !== 'Building') throw new Error('Class extending Building must override evacuationWarningMessage');
    }
}
