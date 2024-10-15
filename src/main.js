import BoardPresenter from './presenter.js';

const body = document.querySelector('body');
const boardPresenter = new BoardPresenter({boardContainer: body});

boardPresenter.init();


