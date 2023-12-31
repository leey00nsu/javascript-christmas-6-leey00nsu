import EventPlannerController from './controller/EventPlannerController.js';

class App {
  #eventPlanner;

  constructor() {
    this.#eventPlanner = new EventPlannerController();
  }

  async run() {
    await this.#eventPlanner.run();
  }
}

export default App;
