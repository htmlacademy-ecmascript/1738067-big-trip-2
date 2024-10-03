import FilterEvents from './view/filters';
import TripSort from './view/trip-events';
import ListEvents from './view/list-events';
import { render } from './render';


const filterControlsSection = document.querySelector('.trip-controls__filters');
const tripEventsSection = document.querySelector('.trip-events');

render(new FilterEvents(), filterControlsSection);
render(new TripSort(), tripEventsSection);
render(new ListEvents(), tripEventsSection);
