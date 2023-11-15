import OPTION from '../../constants/option.js';

class Badge {
  #badge;

  constructor(totalBenefit) {
    this.#badge = Badge.calculateBadge(totalBenefit);
  }

  static calculateBadge(totalBenefit) {
    let badge;

    OPTION.event.badgeStandards.forEach((badgeStandard, index) => {
      if (totalBenefit >= badgeStandard) {
        badge = OPTION.event.badges[index];
      }
    });

    return badge;
  }

  getBadge() {
    return this.#badge;
  }
}

export default Badge;
