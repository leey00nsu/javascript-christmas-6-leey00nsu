import ChristmasDiscount from '../../../src/models/events/ChristmasDiscount';

describe('ChristmasDiscount 클래스 테스트', () => {
  test.each([
    [1, 1000],
    [2, 1100],
    [25, 3400],
  ])(
    '크리스마스 디데이 할인을 계산할 수 있다. %i일 일때 %i원',
    (input, ouput) => {
      expect(ChristmasDiscount.calculateDiscount(input)).toBe(ouput);
    },
  );
});
