import parseMenu from '../../src/utils/parseMenu';

describe('parseMenu 함수 테스트', () => {
  test('메뉴 문자열을 파싱하여 메뉴 이름과 메뉴 개수로 반환할 수 있다', () => {
    const input = '아이스크림-1';
    expect(parseMenu(input)).toEqual(['아이스크림', 1]);
  });
});
