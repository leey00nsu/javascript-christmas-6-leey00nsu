import InputValidator from '../../src/validator/InputValidator';

describe('InputValidator 테스트', () => {
  test('날짜가 정수가 아니면 예외를 발생시킨다', () => {
    expect(() => InputValidator.isDateInteger('a')).toThrow('[ERROR]');
  });

  test('날짜가 1 이상 31이하가 아니면 예외를 발생시킨다.', () => {
    expect(() => InputValidator.isDateInRange(32)).toThrow('[ERROR]');
  });

  test('메뉴 이름이 메뉴에 없으면 예외를 발생시킨다.', () => {
    expect(() => InputValidator.isValidName('펩시콜라')).toThrow('[ERROR]');
  });

  test('메뉴 개수가 1 이상이 아니면 예외를 발생시킨다. ', () => {
    expect(() => InputValidator.isQuantityInRange(0)).toThrow('[ERROR]');
  });

  test('메뉴에 중복이 존재하면 예외를 발생시킨다. ', () => {
    const inputs = [
      ['아이스크림', 1],
      ['아이스크림', 2],
    ];

    expect(() => InputValidator.isUniqueMenus(inputs)).toThrow('[ERROR]');
  });

  test('메뉴에 음료만 존재하면 예외를 발생시킨다. ', () => {
    const inputs = [
      ['제로콜라', 1],
      ['레드와인', 2],
    ];

    expect(() => InputValidator.isEnsureRequiredCategory(inputs)).toThrow(
      '[ERROR]',
    );
  });

  test('메뉴의 총개수가 20 초과이면 예외를 발생시킨다.', () => {
    const inputs = [
      ['시저샐러드', 3],
      ['티본스테이크', 4],
      ['크리스마스파스타', 5],
      ['제로콜라', 9],
    ];

    expect(() => InputValidator.isOrdersQuantityInRange(inputs)).toThrow(
      '[ERROR]',
    );
  });
});
