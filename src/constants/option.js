const event = Object.freeze({
  christmasFrom: 1,
  christmasTo: 25,
  minChristmasDiscount: 1000,
  christmasDiscountIncrease: 100,
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
