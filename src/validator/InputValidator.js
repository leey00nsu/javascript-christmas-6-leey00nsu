import MENUS from '../constants/menus.js';
import OPTION from '../constants/option.js';
import InputError from '../error/InputError.js';
import getCategoryByName from '../util/getCategoryByName.js';

class InputValidator {
  static validate(condition, errorMessage) {
    if (!condition) throw new InputError(errorMessage);
  }

  static isDateInteger(date) {
    InputValidator.validate(
      Number.isSafeInteger(date),
      '유효하지 않은 날짜입니다. 다시 입력해 주세요.',
    );
  }

  static isDateInRange(date) {
    InputValidator.validate(
      date >= OPTION.input.minDate && date <= OPTION.input.maxDate,
      '유효하지 않은 날짜입니다. 다시 입력해 주세요.',
    );
  }

  static isValidName(name) {
    InputValidator.validate(
      MENUS.some((menu) => menu.name === name),
      '유효하지 않은 주문입니다. 다시 입력해 주세요.',
    );
  }

  static isQuantityInRange(quantity) {
    InputValidator.validate(
      quantity >= OPTION.input.minOrderQuantity,
      '유효하지 않은 주문입니다. 다시 입력해 주세요.',
    );
  }

  static isUniqueMenus(menus) {
    const menuNames = menus.map((menu) => {
      const [menuName] = menu;
      return menuName;
    });

    InputValidator.validate(
      menus.length === new Set(menuNames).size,
      '유효하지 않은 주문입니다. 다시 입력해 주세요.',
    );
  }

  static isEnsureRequiredCategory(menus) {
    const menuCategories = menus.map((menu) => {
      const [menuName] = menu;
      return getCategoryByName(menuName);
    });

    InputValidator.validate(
      menuCategories.some((menuCategory) =>
        OPTION.input.requiredCategory.includes(menuCategory),
      ),
      '유효하지 않은 주문입니다. 다시 입력해 주세요.',
    );
  }

  static isOrdersQuantityInRange(menus) {
    let ordersQuantity = 0;

    menus.forEach((menu) => {
      const [, menuQuantity] = menu;
      ordersQuantity += menuQuantity;
    });

    InputValidator.validate(
      ordersQuantity <= OPTION.input.maxOrdersQuantity,
      '유효하지 않은 주문입니다. 다시 입력해 주세요.',
    );
  }
}

export default InputValidator;
