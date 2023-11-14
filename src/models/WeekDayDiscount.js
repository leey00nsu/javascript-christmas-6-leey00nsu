import DiscountEvent from './DiscountEvent.js';

class WeekdayDiscount extends DiscountEvent {
  #discount;

  constructor(menus) {
    super();
    this.#discount = WeekdayDiscount.calculateDiscount(menus);
  }

  static calculateDiscount(menus) {
    let discount = 0;
    menus.forEach((menu) => {
      discount += menu.calculateWeekdayDiscount();
    });

    return discount;
  }

  getDiscount() {
    return this.#discount;
  }
}

export default WeekdayDiscount;
