import OPTION from '../constants/option.js';

class Badge {
  #badge;

  constructor(totalDiscount) {
    this.#badge = Badge.calculateBadge(totalDiscount);
  }

  static calculateBadge(totalDiscount) {
    let badge;

    OPTION.event.badgeStandards.forEach((badgeStandard, index) => {
      if (totalDiscount >= badgeStandard) {
        badge = OPTION.event.badges[index];
      }
    });

    return badge;
  }
}

export default Badge;
