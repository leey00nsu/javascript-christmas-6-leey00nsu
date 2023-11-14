import MENUS from '../constants/menus.js';

function getPriceByName(name) {
  return MENUS.find((MENU) => MENU.name === name)?.price;
}

export default getPriceByName;
