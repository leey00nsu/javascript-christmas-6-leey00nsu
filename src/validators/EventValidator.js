import OPTION from '../constants/option.js';

class EventValidator {
  static isValidChristmasDiscount(date) {
    return (
      date >= OPTION.event.christmasFrom && date <= OPTION.event.christmasTo
    );
  }

  static isValidWeekdayDiscount(date) {
    const dayIndex = new Date(
      `${OPTION.event.eventYear}-${OPTION.event.eventMonth}-${date}`,
    ).getDay();
    const today = OPTION.event.week[dayIndex];

    return OPTION.event.weekday.includes(today);
  }

  static isValidWeekendDiscount(date) {
    const dayIndex = new Date(
      `${OPTION.event.eventYear}-${OPTION.event.eventMonth}-${date}`,
    ).getDay();
    const today = OPTION.event.week[dayIndex];

    return OPTION.event.weekend.includes(today);
  }

  static isValidSpecialDiscount(date) {
    return OPTION.event.specialDate.includes(date);
  }
}

export default EventValidator;
