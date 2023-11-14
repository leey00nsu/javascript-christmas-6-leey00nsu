class WeekdayDiscount {
  #discount;

  constructor(menus) {
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
