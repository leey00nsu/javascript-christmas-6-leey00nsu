import OPTION from '../../constants/option.js';
import Menu from '../Menu.js';

class FreeGift extends Menu {
  constructor() {
    super(OPTION.event.freeGift, OPTION.event.freeGiftQuantity);
  }
}

export default FreeGift;
