import EventValidator from '../validators/EventValidator.js';
import InputValidator from '../validators/InputValidator.js';
import ChristmasDiscount from './ChristmasDiscount.js';
import Menu from './Menu.js';
import SpecialDiscount from './SpecialDiscount.js';
import WeekdayDiscount from './WeekdayDiscount.js';
import WeekendDiscount from './WeekendDiscount.js';

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

  addWeekdayDiscount() {
    if (EventValidator.isValidWeekdayDiscount(this.#date)) {
      this.#events.push(new WeekdayDiscount(this.#menus));
    }
  }

  addWeekendDiscount() {
    if (EventValidator.isValidWeekendDiscount(this.#date)) {
      this.#events.push(new WeekendDiscount(this.#menus));
    }
  }

  addSpecialDiscount() {
    if (EventValidator.isValidSpecialDiscount(this.#date)) {
      this.#events.push(new SpecialDiscount());
    }
  }

  getDiscount() {
    this.#events.forEach((event) => {
      console.log(event.getDiscount());
    });
  }
}

export default Order;
