import OPTION from '../constants/option.js';
import DiscountEvent from './DiscountEvent.js';

class SpecialDiscount extends DiscountEvent {
  #discount;

  constructor() {
    super();
    this.#discount = OPTION.event.specialDiscount;
  }

  getDiscount() {
    return this.#discount;
  }
}

export default SpecialDiscount;
