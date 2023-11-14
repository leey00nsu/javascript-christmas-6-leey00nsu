import Order from '../models/Order.js';
import parseMenus from '../utils/parseMenus.js';
import InputValidator from '../validator/InputValidator.js';

class EventPlannerService {
  #order;

  makeEvent(date) {
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
}

export default EventPlannerService;
