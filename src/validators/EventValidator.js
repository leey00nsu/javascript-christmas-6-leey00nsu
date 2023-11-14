import OPTION from '../constants/option.js';

class EventValidator {
  static isValidChristmasDiscount(date) {
    return (
      date >= OPTION.event.christmasFrom && date <= OPTION.event.christmasTo
    );
  }
}

export default EventValidator;
