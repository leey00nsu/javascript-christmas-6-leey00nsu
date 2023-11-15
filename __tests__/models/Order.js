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

  test('주문 날짜를 반환할 수 있다.', () => {
    expect(order.getDate()).toBe(1);
  });

  test('메뉴 목록을 반환할 수 있다..', () => {
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

  test('배지를 반환할 수 있다.', () => {
    order = new Order(3);
    order.addMenu('티본스테이크', 1); // 55000
    order.addMenu('바비큐립', 1); // 5400
    order.addMenu('초코케이크', 2); // 30000
    order.addMenu('제로콜라', 1); // 3000

    EventManager.getValidEvents(order).forEach((event) => {
      order.addEvent(event);
    });
    order.addBadge();

    expect(order.getBadge()).toBe('산타');
  });

  test('이벤트 참여 여부를 반환할 수 있다.', () => {
    expect(order.isAttendEvent()).toBeFalsy();
  });

  test('총 주문 금액을 반환할 수 있다.', () => {
    order.addMenu('티본스테이크', 1); // 55000
    order.addMenu('바비큐립', 1); // 5400
    order.addMenu('초코케이크', 2); // 30000
    order.addMenu('제로콜라', 1); // 3000

    expect(order.getTotalPrice()).toBe(142000);
  });

  test('총 할인 금액을 반환할 수 있다.', () => {
    order = new Order(3);
    order.addMenu('티본스테이크', 1); // 55000
    order.addMenu('바비큐립', 1); // 5400
    order.addMenu('초코케이크', 2); // 30000
    order.addMenu('제로콜라', 1); // 3000

    EventManager.getValidEvents(order).forEach((event) => {
      order.addEvent(event);
    });

    expect(order.getTotalDiscount()).toBe(6246);
  });

  test('총 혜택 금액을 반환할 수 있다.', () => {
    order = new Order(3);
    order.addMenu('티본스테이크', 1); // 55000
    order.addMenu('바비큐립', 1); // 5400
    order.addMenu('초코케이크', 2); // 30000
    order.addMenu('제로콜라', 1); // 3000

    EventManager.getValidEvents(order).forEach((event) => {
      order.addEvent(event);
    });

    expect(order.getTotalBenefit()).toBe(31246);
  });

  test('할인 후 예상 결제 금액을 반환할 수 있다.', () => {
    order = new Order(3);
    order.addMenu('티본스테이크', 1); // 55000
    order.addMenu('바비큐립', 1); // 5400
    order.addMenu('초코케이크', 2); // 30000
    order.addMenu('제로콜라', 1); // 3000

    EventManager.getValidEvents(order).forEach((event) => {
      order.addEvent(event);
    });

    expect(order.getEstimatedPrice()).toBe(135754);
  });

  test('혜택 목록을 반환할 수 있다.', () => {
    order = new Order(3);
    order.addMenu('티본스테이크', 1); // 55000
    order.addMenu('바비큐립', 1); // 5400
    order.addMenu('초코케이크', 2); // 30000
    order.addMenu('제로콜라', 1); // 3000

    EventManager.getValidEvents(order).forEach((event) => {
      order.addEvent(event);
    });

    expect(order.getBenefits()).toEqual([
      ['크리스마스 디데이 할인', 1200],
      ['평일 할인', 4046],
      ['특별 할인', 1000],
      ['증정 이벤트', 25000],
    ]);
  });
});
