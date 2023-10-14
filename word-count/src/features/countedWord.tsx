import { createSlice } from "@reduxjs/toolkit";
import { Words } from "../types/types";

const count = createSlice({
  name: "countedWords",
  initialState: {
    value: {} as Words,
  },
  reducers: {
    save: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { save } = count.actions;
export default count.reducer;
