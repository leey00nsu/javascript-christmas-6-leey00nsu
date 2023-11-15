import InputValidator from '../validators/InputValidator.js';
import Badge from './events/Badge.js';
import DiscountEvent from './events/DiscountEvent.js';
import FreeGift from './events/FreeGift.js';
import Menu from './Menu.js';

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

  getDate() {
    return this.#date;
  }

  getMenus() {
    return this.#menus;
  }

  getBadge() {
    return this.#badge?.getBadge();
  }

  addEvent(event) {
    this.#events.push(event);
  }

  addBadge() {
    this.#badge = new Badge(this.getTotalBenefit());
  }

  getTotalBenefit() {
    let totalBenefit = 0;
    this.#events.forEach((event) => {
      if (event instanceof FreeGift) {
        totalBenefit += event.getTotalPrice();
      }
    });

    return totalBenefit + this.getTotalDiscount();
  }

  getBenefits() {
    const benefits = [];
    this.#events.forEach((event) => {
      benefits.push(event.getDiscount());
    });

    return benefits;
  }

  getFreeGifts() {
    const freeGifts = [];
    this.#events.forEach((event) => {
      if (event instanceof FreeGift) {
        freeGifts.push(event);
      }
    });

    return freeGifts;
  }

  getTotalDiscount() {
    let totalDiscount = 0;
    this.#events.forEach((event) => {
      if (event instanceof DiscountEvent) {
        const [, discount] = event.getDiscount();
        totalDiscount += discount;
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

  isAttendEvent() {
    return Boolean(this.#events.length);
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
