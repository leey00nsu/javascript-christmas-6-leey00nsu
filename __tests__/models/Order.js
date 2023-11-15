import Order from '../../src/models/Order.js';
import EventManager from '../../src/models/events/EventManager.js';

describe('Order 클래스 테스트', () => {
  let order;

  beforeEach(() => {
    order = new Order(1);
  });

  test('날짜가 1 이상 31이하의 숫자가 아니면 예외를 발생시킨다.', () => {
    expect(() => new Order(32)).toThrow('[ERROR]');
  });

  test('초기 메뉴 목록은 비어있다.', () => {
    expect(order.getMenus()).toHaveLength(0);
  });

  test('메뉴를 추가할 수 있다.', () => {
    order.addMenu('아이스크림', 1);

    expect(order.getMenus()).toHaveLength(1);
  });

  test('메뉴를 모두 삭제할 수 있다.', () => {
    order.addMenu('제로콜라', 1);
    order.addMenu('아이스크림', 1);
    order.addMenu('양송이수프', 1);

    order.clearMenus();

    expect(order.getMenus()).toHaveLength(0);
  });

  test('총 주문 금액이 10,000원 미만이면 이벤트를 적용하지 않는다', () => {
    order.addMenu('시저샐러드', 1);

    expect(EventManager.getValidEvents(order)).toHaveLength(0);
  });
});
