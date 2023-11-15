import OPTION from '../../constants/option.js';
import DiscountEvent from './DiscountEvent.js';

class ChristmasDiscount extends DiscountEvent {
  #discount;

  #type;

  constructor(date) {
    super();
    this.#discount = ChristmasDiscount.calculateDiscount(date);
    this.#type = OPTION.event.discount;
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
