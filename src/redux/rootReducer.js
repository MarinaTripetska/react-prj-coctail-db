import { combineReducers } from "@reduxjs/toolkit";
import { coktailsSlice } from "./app/coktails";

export const rootReducer = combineReducers({
  [coktailsSlice.reducerPath]: coktailsSlice.reducer,
});
