import OPTION from '../../constants/option.js';
import Menu from '../Menu.js';

class FreeGift extends Menu {
  #description;

  constructor() {
    super(OPTION.event.freeGift, OPTION.event.freeGiftQuantity);
    this.#description = '증정 이벤트';
  }

  getDiscount() {
    return [this.#description, this.getTotalPrice()];
  }
}

export default FreeGift;
