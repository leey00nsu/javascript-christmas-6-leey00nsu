import { Console } from '@woowacourse/mission-utils';
import addDigitComma from '../utils/addDigitComma.js';

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

  printEventPreviw(date) {
    Console.print(
      `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`,
    );
  },

  printOrderMenus(orderMenus) {
    Console.print('<주문 메뉴>');
    orderMenus.forEach((orderMenu) => {
      const [name, quantity] = orderMenu;
      Console.print(`${name} ${quantity}개`);
    });
  },

  printTotalPrice(totalPrice) {
    Console.print('<할인 전 총주문 금액>');
    Console.print(`${addDigitComma(totalPrice)}원`);
  },

  printFreeGifts(freeGifts) {
    Console.print('<증정 메뉴>');
    if (freeGifts.length === 0) {
      Console.print('없음');
    }
    freeGifts.forEach((freeGift) => {
      const [name, quantity] = freeGift;
      Console.print(`${name} ${quantity}개`);
    });
  },
};

export default OutputView;
