import { createElement } from '../render';

function createListEventsDomElements() {
  return '<ul class="trip-events__list"></ul>';
}


export default class ListEvents {
  getTemplate() {
    return createListEventsDomElements();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }

}

