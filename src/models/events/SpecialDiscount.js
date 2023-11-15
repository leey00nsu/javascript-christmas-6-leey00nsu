import OPTION from '../../constants/option.js';
import DiscountEvent from './DiscountEvent.js';

class SpecialDiscount extends DiscountEvent {
  #discount;

  #description;

  constructor() {
    super();
    this.#discount = OPTION.event.specialDiscount;
    this.#description = '특별 할인';
  }

  getDiscount() {
    return [this.#description, this.#discount];
  }
}

export default SpecialDiscount;
