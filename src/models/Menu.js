import OPTION from '../constants/option.js';
import getCategoryByName from '../utils/getCategoryByName.js';
import getPriceByName from '../utils/getPriceByName.js';
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

  getMenu() {
    return [this.#name, this.#quantity];
  }

  calculateWeekdayDiscount() {
    if (this.isSameCategory(OPTION.event.weekdayDiscountTarget)) {
      return OPTION.event.weekdayDiscountIncrease * this.#quantity;
    }

    return 0;
  }

  calculateWeekendDiscount() {
    if (this.isSameCategory(OPTION.event.weekendDiscountTarget)) {
      return OPTION.event.weekendDiscountIncrease * this.#quantity;
    }

    return 0;
  }

  isSameCategory(category) {
    return getCategoryByName(this.#name) === category;
  }

  getTotalPrice() {
    return getPriceByName(this.#name) * this.#quantity;
  }
}

export default Menu;
