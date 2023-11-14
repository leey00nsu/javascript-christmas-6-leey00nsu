import OPTION from '../constants/option.js';
import getCategoryByName from '../utils/getCategoryByName.js';
import InputValidator from '../validators/InputValidator.js';

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

  calculateWeekdayDiscount() {
    if (this.isSameCategory(OPTION.event.weekdayDiscountTarget)) {
      return OPTION.event.weekdayDiscountIncrease * this.#quantity;
    }

    return 0;
  }

  isSameCategory(category) {
    return getCategoryByName(this.#name) === category;
  }
}

export default Menu;
