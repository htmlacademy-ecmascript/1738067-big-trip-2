import BoardPresenter from './mock/task.js';

const body = document.querySelector('body');
const boardPresenter = new BoardPresenter({boardContainer: body});

boardPresenter.init();

