import SpecialDiscount from '../../../src/models/events/SpecialDiscount';

describe('SpecialDiscount 클래스 테스트', () => {
  test('특별 할인을 계산할 수 있다.', () => {
    expect(SpecialDiscount.calculateDiscount()).toBe(1000);
  });
});
