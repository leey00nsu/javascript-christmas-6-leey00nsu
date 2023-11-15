import FreeGift from '../../../src/models/events/FreeGift';

describe('FreeGift 클래스 테스트', () => {
  test('증정 이벤트로 샴페인 1개가 증정된다.', () => {
    const freeGift = new FreeGift();
    const menu = freeGift.getGift();
    expect(menu.getMenu()).toEqual(['샴페인', 1]);
  });

  test('증정 이벤트의 혜택 금액을 반환할 수 있다.', () => {
    const freeGift = new FreeGift();
    expect(freeGift.getBenefit()).toBe(25000);
  });
});
