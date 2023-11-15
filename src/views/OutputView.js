import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  print(query) {
    Console.print(query);
  },

  printNewLine() {
    Console.print('');
  },

  printGreeting() {
    Console.print('안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.');
  },

  printMenu() {
    Console.print('<주문 메뉴>');
  },

  printEventPreviw(date) {
    Console.print(
      `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`,
    );
  },
};

export default OutputView;
