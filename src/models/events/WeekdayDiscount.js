import DiscountEvent from './DiscountEvent.js';

class WeekdayDiscount extends DiscountEvent {
  #discount;

  #description;

  constructor(menus) {
    super();
    this.#discount = WeekdayDiscount.calculateDiscount(menus);
    this.#description = '평일 할인';
  }

  static calculateDiscount(menus) {
    let discount = 0;
    menus.forEach((menu) => {
      discount += menu.calculateWeekdayDiscount();
    });

    return discount;
  }

  getDiscount() {
    return [this.#description, this.#discount];
  }
}

export default WeekdayDiscount;
