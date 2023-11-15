const event = Object.freeze({
  eventYear: 2023,
  eventMonth: 12,
  week: ['일', '월', '화', '수', '목', '금', '토'],
  weekday: ['일', '월', '화', '수', '목'],
  weekend: ['금', '토'],
  specialDate: [3, 10, 17, 24, 25, 31],
  christmasFrom: 1,
  christmasTo: 25,
  minTotalPriceStandard: 10000,
  minChristmasDiscount: 1000,
  christmasDiscountIncrease: 100,
  weekdayDiscountTarget: '디저트',
  weekdayDiscountIncrease: 2023,
  weekendDiscountTarget: '메인',
  weekendDiscountIncrease: 2023,
  specialDiscount: 1000,
  freeGiftStandard: 120000,
  freeGift: '샴페인',
  freeGiftQuantity: 1,
  badges: ['별', '트리', '산타'],
  badgeStandards: [5000, 10000, 20000],
});

const input = Object.freeze({
  inputSeperator: ',',
  quantityIndicator: '-',
  minOrderQuantity: 1,
  maxOrdersQuantity: 20,
  minDate: 1,
  maxDate: 31,
  requiredCategory: ['애피타이저', '메인', '디저트'],
});

const OPTION = Object.freeze({
  input,
  event,
});

export default OPTION;
