import { configureStore } from "@reduxjs/toolkit";

import narReducer from "./slices/navSlice";
export const store = configureStore({
  reducer: narReducer,
});
