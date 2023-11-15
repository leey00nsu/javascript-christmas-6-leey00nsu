import Menu from '../../src/models/Menu.js';

describe('Menu 클래스 테스트', () => {
  test('메뉴 이름이 메뉴에 없으면 예외를 발생시킨다.', () => {
    expect(() => new Menu('제로펩시', 1)).toThrow('[ERROR]');
  });

  test('메뉴의 개수가 1이상의 숫자가 아니면 예외를 발생시킨다.', () => {
    expect(() => new Menu('제로콜라', 0)).toThrow('[ERROR]');
  });

  test('메뉴의 이름과 개수를 반환할 수 있다', () => {
    const menu = new Menu('아이스크림', 1);

    expect(menu.getMenu()).toEqual(['아이스크림', 1]);
  });

  test('메뉴와 카테고리가 같은 지 비교할 수 있다.', () => {
    const menu = new Menu('아이스크림', 1);

    expect(menu.isSameCategory('디저트')).toBeTruthy();
  });

  test('메뉴의 평일 할인 수치를 반환할 수 있다.', () => {
    const menu = new Menu('아이스크림', 1);

    expect(menu.calculateWeekdayDiscount()).toBe(2023);
  });

  test('메뉴의 주말 할인 수치를 반환할 수 있다.', () => {
    const menu = new Menu('티본스테이크', 1);

    expect(menu.calculateWeekendDiscount()).toBe(2023);
  });

  test('메뉴의 총 가격을 반환할 수 있다.', () => {
    const menu = new Menu('티본스테이크', 1);

    expect(menu.getTotalPrice()).toBe(55000);
  });
});
