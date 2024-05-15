import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/counterSlice";

const rootReducer = {
  // counter: name of state which we want to access
  counter: counterReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
