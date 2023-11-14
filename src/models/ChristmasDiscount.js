import OPTION from '../constants/option.js';

class ChristmasDiscount {
  #discount;

  constructor(date) {
    this.#discount = ChristmasDiscount.calculateDiscount(date);
  }

  static calculateDiscount(date) {
    return (
      OPTION.event.minChristmasDiscount +
      (date - OPTION.event.christmasFrom) *
        OPTION.event.christmasDiscountIncrease
    );
  }

  getDiscount() {
    return this.#discount;
  }
}

export default ChristmasDiscount;
