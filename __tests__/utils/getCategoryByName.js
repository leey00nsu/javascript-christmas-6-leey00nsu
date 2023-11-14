import getCategoryByName from '../../src/utils/getCategoryByName';

describe('getCategoryByName 함수 테스트', () => {
  test('메뉴 이름으로 메뉴 카테고리를 알 수 있다.', () => {
    expect(getCategoryByName('아이스크림')).toBe('디저트');
  });
});
