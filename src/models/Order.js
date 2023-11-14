import InputValidator from '../validator/InputValidator.js';
import Menu from './Menu.js';

class Order {
  #date;

  #menus;

  constructor(date) {
    this.#validate(date);
    this.#date = date;
    this.#menus = [];
  }

  #validate(date) {
    InputValidator.isDateInteger(date);
    InputValidator.isDateInRange(date);
  }

  addMenu(menuName, menuQuantity) {
    this.#menus.push(new Menu(menuName, menuQuantity));
  }

  clearMenus() {
    this.#menus = [];
  }

  getMenus() {
    return this.#menus;
  }
}

export default Order;
