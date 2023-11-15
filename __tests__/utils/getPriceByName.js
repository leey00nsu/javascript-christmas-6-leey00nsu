import getPriceByName from '../../src/utils/getPriceByName';

describe('getPriceByName 함수 테스트', () => {
  test('메뉴 이름으로 메뉴 가격을 알 수 있다.', () => {
    expect(getPriceByName('아이스크림')).toBe(5000);
  });
});
