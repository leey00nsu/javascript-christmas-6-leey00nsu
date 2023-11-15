import addDigitComma from '../../src/utils/addDigitComma';

describe('addDigitComma 함수 테스트', () => {
  test('숫자 3자리마다 콤마를 넣을 수 있다.', () => {
    expect(addDigitComma(1234)).toBe('1,234');
  });
});
