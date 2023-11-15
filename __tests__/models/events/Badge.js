import Badge from '../../../src/models/events/Badge';

describe('Badge 클래스 테스트', () => {
  test.each([
    [5000, '별'],
    [10000, '트리'],
    [20000, '산타'],
  ])(
    '총혜택 금액에 따라 다른 이벤트 배지를 부여할 수 있다. %i원 이상 : %s',
    (input, output) => {
      expect(Badge.calculateBadge(input)).toBe(output);
    },
  );
});
