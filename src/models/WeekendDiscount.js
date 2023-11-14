class WeekendDiscount {
  #discount;

  constructor(menus) {
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
