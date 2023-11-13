import parseMenu from './parseMenu.js';

function parseMenus(menus) {
  return menus.map((menu) => parseMenu(menu));
}

export default parseMenus;
