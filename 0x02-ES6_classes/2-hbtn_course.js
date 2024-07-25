/* eslint-disable */
export default class HolbertonCourse {
    constructor(name, length, students) {
        if (typeof name !== 'string') throw new TypeError('Name must be a string');
        if (!Number.isInteger(length)) throw new TypeError('Length must be a number');
        if (!Array.isArray(students)) throw new TypeError('students type must be an Array');

        this._name = name;
        this._length = length;
        this._students = students;
    }
     // Getter for name
    get name() {
        return this._name;
    }
     // Setter for name
    set name(value) {
        if (typeof value !== 'string') throw new TypeError('Name must be a string');
        this._name = value;
    }
    // Getter for length
    get length() {
        return this._length;
    }
    // Setter for length
    set length(value) {
        if (!Number.isInteger(value)) throw new TypeError('Length must be a number');
        this._length = value;
    }
    // Getter for students
    get students() {
        return this._students;
    }
    // Setter for students
    set students(value) {
        if (!Array.isArray(value)) throw new TypeError('students type must be an Array');
        for (let i = 0; i < value.length; i++) {
            if (typeof value[i] !== 'string') { throw new TypeError('Students must be an array of strings'); }
        }
        this._students = value;
    }
}
