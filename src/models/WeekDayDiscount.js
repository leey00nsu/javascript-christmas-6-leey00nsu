import OPTION from '../constants/option.js';

class WeekDayDiscount {
  #discount;

  constructor(menus) {
    this.#discount = WeekDayDiscount.calculateDiscount(menus);
  }

  static calculateDiscount(menus) {
    let discount = 0;
    menus.forEach((menu) => {
      discount += menu.calculateWeekDayDiscount();
    });

    return discount;
  }

  getDiscount() {
    return this.#discount;
  }
}

export default WeekDayDiscount;
