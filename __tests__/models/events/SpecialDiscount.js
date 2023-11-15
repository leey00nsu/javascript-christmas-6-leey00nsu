import SpecialDiscount from '../../../src/models/events/SpecialDiscount';

describe('SpecialDiscount 클래스 테스트', () => {
  test('특별 할인을 계산할 수 있다.', () => {
    const specialDiscount = new SpecialDiscount();
    const [, discount] = specialDiscount.getDiscount();
    expect(discount).toBe(1000);
  });
});
