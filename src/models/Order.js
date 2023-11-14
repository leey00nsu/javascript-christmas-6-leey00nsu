import EventValidator from '../validators/EventValidator.js';
import InputValidator from '../validators/InputValidator.js';
import Badge from './Badge.js';
import ChristmasDiscount from './ChristmasDiscount.js';
import DiscountEvent from './DiscountEvent.js';
import FreeGift from './FreeGift.js';
import Menu from './Menu.js';
import SpecialDiscount from './SpecialDiscount.js';
import WeekdayDiscount from './WeekdayDiscount.js';
import WeekendDiscount from './WeekendDiscount.js';

class Order {
  #date;

  #menus;

  #events;

  #badge;

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

  addFreeGift() {
    if (EventValidator.isValidFreeGift(this.getTotalPrice())) {
      this.#events.push(new FreeGift());
    }
  }

  addBadge() {
    this.#badge = new Badge(this.getTotalDiscount());
  }

  getTotalBenefit() {
    let totalBenefit = 0;
    this.#events.forEach((event) => {
      if (event instanceof FreeGift) {
        totalBenefit += event.getBenefit();
      }
    });

    return totalBenefit + this.getTotalDiscount();
  }

  getTotalDiscount() {
    let totalDiscount = 0;
    this.#events.forEach((event) => {
      if (event instanceof DiscountEvent) {
        totalDiscount += event.getDiscount();
      }
    });

    return totalDiscount;
  }

  getTotalPrice() {
    let totalPrice = 0;

    this.#menus.forEach((menu) => {
      totalPrice += menu.getTotalPrice();
    });

    return totalPrice;
  }

  getEstimatedPrice() {
    return this.getTotalPrice() - this.getTotalDiscount();
  }

  consoleAll() {
    console.log(this.getTotalPrice());
    console.log(this.getTotalDiscount());
    console.log(this.getTotalBenefit());
    console.log(this.getEstimatedPrice());
    console.log(this.#badge);
  }
}

export default Order;
