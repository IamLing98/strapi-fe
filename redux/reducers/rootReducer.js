import { combineReducers } from "@reduxjs/toolkit";

import indexReducer from "./indexReducer";

const createReducer = (asyncReducers) => (state, action) => {
  const combinedReducer = combineReducers({
    indexReducer,
    ...asyncReducers,
  });

  /*
      Reset the redux store when user logged out
       */
  if (action.type === "auth/user/userLoggedOut") {
    // state = undefined;
  }

  return combinedReducer(state, action);
};

export default createReducer;
