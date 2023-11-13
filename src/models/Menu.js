import InputValidator from '../validator/InputValidator.js';

class Menu {
  #name;

  #quantity;

  constructor(name, quantity) {
    this.#validate(name, quantity);
    this.#name = name;
    this.#quantity = quantity;
  }

  #validate(name, quantity) {
    InputValidator.isValidName(name);
    InputValidator.isQuantityInRange(quantity);
  }
}

export default Menu;
