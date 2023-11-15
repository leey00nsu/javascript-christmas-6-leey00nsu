import EventManager from '../models/events/EventManager.js';
import Order from '../models/Order.js';
import parseMenus from '../utils/parseMenus.js';
import InputValidator from '../validators/InputValidator.js';

class EventPlannerService {
  #order;

  makeOrder(date) {
    this.#order = new Order(date);
  }

  addMenus(menus) {
    const parsedMenus = parseMenus(menus);
    InputValidator.isUniqueMenus(parsedMenus);
    InputValidator.isEnsureRequiredCategory(parsedMenus);
    InputValidator.isOrdersQuantityInRange(parsedMenus);

    parsedMenus.forEach((menu) => {
      const [menuName, menuQuantity] = menu;
      this.#order.addMenu(menuName, menuQuantity);
    });
  }

  getDate() {
    return this.#order.getDate();
  }

  getMenus() {
    return this.#order.getMenus();
  }

  getBadge() {
    return this.#order.getBadge();
  }

  clearMenus() {
    this.#order.clearMenus();
  }

  addEvents() {
    const validEvents = EventManager.getValidEvents(this.#order);

    validEvents.forEach((event) => {
      this.#order.addEvent(event);
    });
  }

  addBadge() {
    this.#order.addBadge();
  }

  getTotalBenefit() {
    return this.#order.getTotalBenefit();
  }

  getTotalDiscount() {
    return this.#order.getTotalBenefit();
  }

  getTotalPrice() {
    return this.#order.getTotalPrice();
  }
}

export default EventPlannerService;
