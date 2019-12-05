import state from './app-state';

function setCounter() {
  state.counter = Math.floor(Math.random() * 10e4);
}

document.getElementById('button').addEventListener('click', setCounter);

function changeDomValue(value) {
  const el = document.getElementById('dom-value');

  el.innerText = value;
}

function applyState(state) {
  changeDomValue(state.counter);
}

export function initDom() {
  state.registerHandler(applyState);
  applyState(state);
}