import MENUS from '../constants/menus.js';

function getCategoryByName(name) {
  return MENUS.find((MENU) => MENU.name === name)?.category;
}

export default getCategoryByName;
