import VisitEvent from '../models/VisitEvent.js';

class EventPlannerService {
  #event;

  makeEvent(date) {
    this.#event = new VisitEvent(date);
  }
}

export default EventPlannerService;
