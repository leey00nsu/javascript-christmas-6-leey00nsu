import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import EventPlannerService from '../service/EventPlannerService.js';

class EventPlannerController {
  #service;

  #inputView;

  #outputView;

  constructor() {
    this.#service = new EventPlannerService();
    this.#inputView = InputView;
    this.#outputView = OutputView;

    this.#outputView.printGreeting();
  }

  async run() {
    await this.repeatUntilSuccess(() => this.#readDate());
    await this.repeatUntilSuccess(() => this.#readMenus());
    this.#calculateEvent();
    this.#printEventPreview();
  }

  // 에러가 발생하면 targetFunction을 다시 실행시키는 메서드
  async repeatUntilSuccess(targetFunction) {
    let isSuccess = false;

    while (!isSuccess) {
      try {
        await targetFunction();
        isSuccess = true;
      } catch (error) {
        this.#outputView.print(error.message);
      }
    }
  }

  async #readDate() {
    const date = await this.#inputView.readDate();
    this.#service.makeOrder(date);
  }

  async #readMenus() {
    this.#service.clearMenus();
    const menus = await this.#inputView.readMenus();
    this.#service.addMenus(menus);
  }

  #calculateEvent() {
    this.#service.addEvents();
    this.#service.addBadge();
  }

  #printEventPreview() {
    const date = this.#service.getDate();
    this.#outputView.printEventPreviw(date);
    this.#outputView.printNewLine();

    const orderMenus = this.#service.getMenus();
    this.#outputView.printOrderMenus(orderMenus);
  }
}

export default EventPlannerController;
