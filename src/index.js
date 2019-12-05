import React from "react";
import ReactDOM from "react-dom";

import state, {INITIAL_STATE} from './app-state';
import {getContainer} from './react-state';
import {initDom} from './dom';

function setCounter() {
  state.counter = Math.floor(Math.random() * 10e4);
}

const Container = getContainer(INITIAL_STATE, {setCounter});

function C1(props) {
  return (
    <div>
      <div>{props.counter}</div>
      <button onClick={props.setCounter}>Change value from React</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Container component={C1} />
    </div>
  );
}

const rootElement = document.getElementById("root");
initDom();
ReactDOM.render(<App />, rootElement);
