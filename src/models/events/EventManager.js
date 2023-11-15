import EventValidator from '../../validators/EventValidator.js';
import ChristmasDiscount from './ChristmasDiscount.js';
import WeekdayDiscount from './WeekdayDiscount.js';
import WeekendDiscount from './WeekendDiscount.js';
import SpecialDiscount from './SpecialDiscount.js';
import FreeGift from './FreeGift.js';
import OPTION from '../../constants/option.js';

class EventManager {
  static addChristmasDiscount(date) {
    if (EventValidator.isValidChristmasDiscount(date)) {
      return new ChristmasDiscount(date);
    }

    return null;
  }

  static addWeekdayDiscount(date, menus) {
    if (EventValidator.isValidWeekdayDiscount(date)) {
      return new WeekdayDiscount(menus);
    }

    return null;
  }

  static addWeekendDiscount(date, menus) {
    if (EventValidator.isValidWeekendDiscount(date)) {
      return new WeekendDiscount(menus);
    }

    return null;
  }

  static addSpecialDiscount(date) {
    if (EventValidator.isValidSpecialDiscount(date)) {
      return new SpecialDiscount();
    }

    return null;
  }

  static addFreeGift(totalPrice) {
    if (EventValidator.isValidFreeGift(totalPrice)) {
      return new FreeGift();
    }

    return null;
  }

  static getValidEvents(Order) {
    const validEvents = [];
    const date = Order.getDate();
    const menus = Order.getMenus();
    const totalPrice = Order.getTotalPrice();
    if (totalPrice < OPTION.event.minTotalPriceStandard) return [];

    validEvents.push(EventManager.addChristmasDiscount(date));
    validEvents.push(EventManager.addWeekdayDiscount(date, menus));
    validEvents.push(EventManager.addWeekendDiscount(date, menus));
    validEvents.push(EventManager.addSpecialDiscount(date));
    validEvents.push(EventManager.addFreeGift(totalPrice));

    return validEvents.filter((event) => event !== null);
  }
}

export default EventManager;
