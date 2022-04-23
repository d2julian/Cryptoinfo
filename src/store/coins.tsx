import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coins: [],
  filter: "",
};

const coinsSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    setCoins(state, action) {
      state.coins = action.payload.data.coins;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const coinsActions = coinsSlice.actions;
export default coinsSlice.reducer;
