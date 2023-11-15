import EventValidator from '../../src/validators/EventValidator';

describe('EventValidator 클래스 테스트', () => {
  test('날짜가 크리스마스 디데이 할인에 참여할 수 있는지 반환할 수 있다.', () => {
    expect(EventValidator.isValidChristmasDiscount(1)).toBeTruthy();
  });

  test('날짜가 평일 할인에 참여할 수 있는지 반환할 수 있다.', () => {
    expect(EventValidator.isValidWeekdayDiscount(4)).toBeTruthy();
  });

  test('날짜가 주말 할인에 참여할 수 있는지 반환할 수 있다.', () => {
    expect(EventValidator.isValidWeekendDiscount(2)).toBeTruthy();
  });

  test('날짜가 특별 할인에 참여할 수 있는지 반환할 수 있다.', () => {
    expect(EventValidator.isValidSpecialDiscount(3)).toBeTruthy();
  });

  test('총 주문금액이 증정 이벤트에 참여할 수 있는지 반환할 수 있다.', () => {
    expect(EventValidator.isValidFreeGift(120000)).toBeTruthy();
  });
});
