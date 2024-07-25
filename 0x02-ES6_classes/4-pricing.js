/* eslint-disable */
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number' || !(currency instanceof Currency)) throw new Error();
    this._amount = amount;
    this._currency = currency;
  }
  // Getter for amount
  get amount() {
    return this._amount;
  }
  // Setter for amount
  set amount(value) {
    this._amount = value;
  }
  // Getter for currency
  get currency() {
    return this._currency;
  }
  // Setter for currency
  set currency(value) {
    this._currency = value;
  }
  // Method to display full price
  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }
  // Static method to convert price
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') throw new Error();
    return amount * conversionRate;
  }
}
