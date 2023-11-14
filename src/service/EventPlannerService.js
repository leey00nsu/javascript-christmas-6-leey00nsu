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

  getMenus() {
    return this.#order.getMenus();
  }

  clearMenus() {
    this.#order.clearMenus();
  }

  addEvents() {
    this.#order.addChristmasDiscount();
    this.#order.addWeekdayDiscount();
    this.#order.addWeekendDiscount();
    this.#order.addSpecialDiscount();
    this.#order.addFreeGift();
    this.#order.addBadge();
    this.#order.consoleAll();
  }
}

export default EventPlannerService;
