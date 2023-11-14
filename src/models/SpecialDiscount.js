import OPTION from '../constants/option.js';

class SpecialDiscount {
  #discount;

  constructor() {
    this.#discount = OPTION.event.specialDiscount;
  }

  getDiscount() {
    return this.#discount;
  }
}

export default SpecialDiscount;
