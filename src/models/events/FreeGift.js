import OPTION from '../../constants/option.js';
import Menu from '../Menu.js';

class FreeGift {
  #gift;

  constructor() {
    this.#gift = new Menu(OPTION.event.freeGift, OPTION.event.freeGiftQuantity);
  }

  getGift() {
    return this.#gift;
  }

  getBenefit() {
    return this.#gift.getTotalPrice();
  }
}

export default FreeGift;
