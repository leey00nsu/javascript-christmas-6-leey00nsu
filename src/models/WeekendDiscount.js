import DiscountEvent from './DiscountEvent.js';

class WeekendDiscount extends DiscountEvent {
  #discount;

  constructor(menus) {
    super();
    this.#discount = WeekendDiscount.calculateDiscount(menus);
  }

  static calculateDiscount(menus) {
    let discount = 0;
    menus.forEach((menu) => {
      discount += menu.calculateWeekendDiscount();
    });

    return discount;
  }

  getDiscount() {
    return this.#discount;
  }
}

export default WeekendDiscount;
