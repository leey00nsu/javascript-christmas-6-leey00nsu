import Menu from '../../../src/models/Menu';
import WeekendDiscount from '../../../src/models/events/WeekendDiscount';

describe('WeekendDiscount 클래스 테스트', () => {
  test('주말에는 메인 카테고리 메뉴를 메뉴 1개당 2023원 할인한다.', () => {
    const menus = [new Menu('티본스테이크', 1)];

    expect(WeekendDiscount.calculateDiscount(menus)).toBe(2023);
  });

  test('다른 카테고리의 메뉴는 주말 할인을 적용하지 않는다.', () => {
    const menus = [new Menu('아이스크림', 1)];

    expect(WeekendDiscount.calculateDiscount(menus)).toBe(0);
  });
});
