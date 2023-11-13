import VisitEvent from '../models/VisitEvent.js';
import parseMenus from '../util/parseMenus.js';
import InputValidator from '../validator/InputValidator.js';

class EventPlannerService {
  #event;

  makeEvent(date) {
    this.#event = new VisitEvent(date);
  }

  addMenus(menus) {
    const parsedMenus = parseMenus(menus);
    InputValidator.isUniqueMenus(parsedMenus);
    InputValidator.isEnsureRequiredCategory(parsedMenus);
    InputValidator.isOrdersQuantityInRange(parsedMenus);

    parsedMenus.forEach((menu) => {
      const [menuName, menuQuantity] = menu;
      this.#event.addMenu(menuName, menuQuantity);
    });
  }

  clearMenus() {
    this.#event.clearMenus();
  }
}

export default EventPlannerService;
