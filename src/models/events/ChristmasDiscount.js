import OPTION from '../../constants/option.js';
import DiscountEvent from './DiscountEvent.js';

class ChristmasDiscount extends DiscountEvent {
  #discount;

  #description;

  constructor(date) {
    super();
    this.#discount = ChristmasDiscount.calculateDiscount(date);
    this.#description = '크리스마스 디데이 할인';
  }

  static calculateDiscount(date) {
    return (
      OPTION.event.minChristmasDiscount +
      (date - OPTION.event.christmasFrom) *
        OPTION.event.christmasDiscountIncrease
    );
  }

  getDiscount() {
    return [this.#description, this.#discount];
  }
}

export default ChristmasDiscount;
