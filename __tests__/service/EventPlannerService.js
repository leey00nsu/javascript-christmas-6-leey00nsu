import EventPlannerService from '../../src/service/EventPlannerService.js';

describe('EventPlannerService 클래스 테스트', () => {
  let eventPlannerService;

  beforeEach(() => {
    eventPlannerService = new EventPlannerService();
    eventPlannerService.makeEvent(1);
  });

  test('이벤트를 만들 수 있다.', () => {
    expect(eventPlannerService.getMenus()).toHaveLength(0);
  });

  test('메뉴들을 추가할 수 있다.', () => {
    const inputs = ['아이스크림-1', '제로콜라-1'];

    eventPlannerService.addMenus(inputs);

    expect(eventPlannerService.getMenus()).toHaveLength(2);
  });

  test('메뉴에 중복이 존재하면 예외를 발생시킨다.', () => {
    const inputs = ['아이스크림-1', '아이스크림-2'];

    expect(() => eventPlannerService.addMenus(inputs)).toThrow('[ERROR]');
  });

  test('메뉴에 음료만 존재하면 예외를 발생시킨다.', () => {
    const inputs = ['제로콜라-1', '레드와인-2'];

    expect(() => eventPlannerService.addMenus(inputs)).toThrow('[ERROR]');
  });

  test('메뉴의 총개수가 20 초과이면 예외를 발생시킨다.', () => {
    const inputs = [
      '시저샐러드-3',
      '티본스테이크-4',
      '크리스마스파스타-5',
      '제로콜라-9',
    ];

    expect(() => eventPlannerService.addMenus(inputs)).toThrow('[ERROR]');
  });
});
