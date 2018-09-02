import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app";
import createStore from "./custom-redux/custom-redux";
import reducer from "./reducers";
import thunkMiddleware from "./middlewares/thunk-middleware";
import loggingMiddleware from "./middlewares/logging-middleware";
import applyMiddleware from "./middlewares/apply-middleware";
import Provider from "./components/provider";

const store = createStore(reducer, applyMiddleware(thunkMiddleware, loggingMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
