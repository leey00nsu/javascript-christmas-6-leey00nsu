import Menu from '../../../src/models/Menu';
import WeekdayDiscount from '../../../src/models/events/WeekdayDiscount';

describe('WeekdayDiscount 클래스 테스트', () => {
  test('평일에는 디저트 카테고리 메뉴를 메뉴 1개당 2023원 할인한다.', () => {
    const menus = [new Menu('아이스크림', 1)];

    expect(WeekdayDiscount.calculateDiscount(menus)).toBe(2023);
  });

  test('다른 카테고리의 메뉴는 평일 할인을 적용하지 않는다.', () => {
    const menus = [new Menu('제로콜라', 1)];

    expect(WeekdayDiscount.calculateDiscount(menus)).toBe(0);
  });
});
