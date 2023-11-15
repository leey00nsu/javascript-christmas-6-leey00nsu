import DiscountEvent from './DiscountEvent.js';

class WeekendDiscount extends DiscountEvent {
  #discount;

  #description;

  constructor(menus) {
    super();
    this.#discount = WeekendDiscount.calculateDiscount(menus);
    this.#description = '주말 할인';
  }

  static calculateDiscount(menus) {
    let discount = 0;
    menus.forEach((menu) => {
      discount += menu.calculateWeekendDiscount();
    });

    return discount;
  }

  getDiscount() {
    return [this.#description, this.#discount];
  }
}

export default WeekendDiscount;
