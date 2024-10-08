import FilterEvents from '../view/filters';
import TripSort from '../view/trip-events';
import ListEvents from '../view/list-events';
import { render } from '../render';


const QUANTITY_TASKS = 5;
const filterControlsSection = document.querySelector('.trip-controls__filters');
const tripEventsSection = document.querySelector('.trip-events');


export default class BoardPresenter {

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {

    render(new FilterEvents(), filterControlsSection);
    render(new TripSort(), tripEventsSection);
    for (let i = 0;i <= QUANTITY_TASKS - 1; i++) {
      render(new ListEvents(), tripEventsSection);
    }

  }
}

