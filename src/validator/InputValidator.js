import InputError from '../error/InputError.js';

class InputValidator {
  static validate(condition, errorMessage) {
    if (!condition) throw new InputError(errorMessage);
  }

  static isInteger(target) {
    InputValidator.validate(
      Number.isSafeInteger(target),
      '유효하지 않은 날짜입니다. 다시 입력해 주세요.',
    );
  }

  static isInRange(target, from, to) {
    InputValidator.validate(
      target >= from && target <= to,
      '유효하지 않은 날짜입니다. 다시 입력해 주세요.',
    );
  }
}

export default InputValidator;
