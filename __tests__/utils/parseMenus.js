import parseMenus from '../../src/utils/parseMenus';

describe('parseMenus 함수 테스트', () => {
  test('메뉴 문자열 배열에 대해 각 요소를 메뉴 이름과 메뉴 개수로 파싱한 배열을 반환할 수 있다.', () => {
    const inputs = ['아이스크림-1', '제로콜라-2'];

    expect(parseMenus(inputs)).toEqual([
      ['아이스크림', 1],
      ['제로콜라', 2],
    ]);
  });
});
