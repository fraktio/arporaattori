import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";

import { createStore } from "./services/redux";
import {
  getMiddlewares,
  getReducers,
  getEnhancers,
  getSagaMiddleware
} from "./config/redux";
import { getInitialState } from "./config/state";

import rootSaga from "./sagas/root";

const initialState = getInitialState();
const store = createStore(
  getReducers(),
  getMiddlewares(),
  getEnhancers(),
  initialState
);

const sagaMiddleware = getSagaMiddleware();

sagaMiddleware.run(rootSaga);

function render(Component, rootElement, method = "render") {
  ReactDOM[method](<Component store={store} />, rootElement);
}

const rootElement = document.getElementById("app");
render(Root, rootElement, initialState ? "hydrate" : "render");

if (module.hot) {
  module.hot.accept("./Root", () => {
    const HotReloadedRoot = require("./Root").default;
    render(HotReloadedRoot, rootElement, "render");
  });
}
