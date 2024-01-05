import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./Reducers/authentication";
const rootReducer = combineReducers({
  auth: authenticationReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});


