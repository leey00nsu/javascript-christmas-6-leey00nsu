import Menu from '../../src/models/Menu.js';

describe('Menu 클래스 테스트', () => {
  test('메뉴 이름이 메뉴에 없으면 예외를 발생시킨다.', () => {
    expect(() => new Menu('제로펩시', 1)).toThrow('[ERROR]');
  });

  test('메뉴의 개수가 1이상의 숫자가 아니면 예외를 발생시킨다.', () => {
    expect(() => new Menu('제로콜라', 0)).toThrow('[ERROR]');
  });
});
