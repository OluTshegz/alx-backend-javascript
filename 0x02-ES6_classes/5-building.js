/* eslint-disable */
export default class Building {
    constructor(sqft) {
        if (typeof sqft !== 'number') throw new Error();
        this._sqft = sqft;
        if (this.constructor !== Building) {
            if (typeof this.evacuationWarningMessage !== 'function')
                throw new Error('Class extending Building must override evacuationWarningMessage');
        }
        // this.evacuationWarningMessage();
    }
    // Getter for sqft
    get sqft() {
        return this._sqft;
    }
    // Setter for sqft
    set sqft(value) {
        this._sqft = value;
    }
    // This should be overridden in subclasses
    // evacuationWarningMessage() {
    //     if (this.constructor.name !== 'Building') 
    //         throw new Error('Class extending Building must override evacuationWarningMessage');
    // }
}
