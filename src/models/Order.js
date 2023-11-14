import EventValidator from '../validators/EventValidator.js';
import InputValidator from '../validators/InputValidator.js';
import ChristmasDiscount from './ChristmasDiscount.js';
import Menu from './Menu.js';
import WeekDayDiscount from './WeekDayDiscount.js';

class Order {
  #date;

  #menus;

  #events;

  constructor(date) {
    this.#validate(date);
    this.#date = date;
    this.#menus = [];
    this.#events = [];
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

  addChristmasDiscount() {
    if (EventValidator.isValidChristmasDiscount(this.#date)) {
      this.#events.push(new ChristmasDiscount(this.#date));
    }
  }

  addWeekDayDiscount() {
    if (EventValidator.isValidWeekDayDiscount(this.#date)) {
      this.#events.push(new WeekDayDiscount(this.#menus));
    }
  }

  getDiscount() {
    this.#events.forEach((event) => {
      console.log(event.getDiscount());
    });
  }
}

export default Order;
