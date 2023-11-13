import OPTION from '../constants/option.js';

function parseMenu(menu) {
  const [menuName, menuQuantity] = menu.split(OPTION.input.quantityIndicator);

  return [menuName, Number(menuQuantity)];
}

export default parseMenu;
