import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import reducers from "./reducers";

export default store = createStore(
  reducers,
  {},
  applyMiddleware(thunk, createLogger({ collapsed: true }))
);
