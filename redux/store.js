import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import createReducer from "./reducers/rootReducer";

// const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const { createLogger } = require(`redux-logger`);

const logger = createLogger({
  collapsed: (getState, action, logEntry) => !logEntry.error,
});

const middlewares = [];
middlewares.push(logger);
// middlewares.push(thunkMiddleware);

const store = configureStore({
  reducer: createReducer(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(middlewares),
  devTools: process.env.NODE_ENV === "development",
});

store.asyncReducers = {};

export const injectReducer = (key, reducer) => {
  if (store.asyncReducers[key]) {
    return false;
  }
  store.asyncReducers[key] = reducer;
  store.replaceReducer(createReducer(store.asyncReducers));
  return store;
};

export default store;
