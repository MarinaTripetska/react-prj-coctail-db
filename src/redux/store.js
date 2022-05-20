import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { coktailsSlice } from "./app/coktails";

const middleware = [...getDefaultMiddleware({}), coktailsSlice.middleware];

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});
