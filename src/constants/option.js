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
});

export default OPTION;
