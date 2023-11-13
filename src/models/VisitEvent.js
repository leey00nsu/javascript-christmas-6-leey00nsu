import InputValidator from '../validator/InputValidator.js';

class VisitEvent {
  #date;

  #menus;

  constructor(date) {
    this.validate(date);
    this.#date = date;
  }

  validate(date) {
    InputValidator.isInteger(date);
    InputValidator.isInRange(date, 1, 31);
  }
}

export default VisitEvent;
