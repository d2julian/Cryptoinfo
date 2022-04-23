import { configureStore } from "@reduxjs/toolkit";
import { coinApi } from "../services/coinApi";
import coinsReducer from "./coins";

export const store = configureStore({
  reducer: { [coinApi.reducerPath]: coinApi.reducer, coins: coinsReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(coinApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
