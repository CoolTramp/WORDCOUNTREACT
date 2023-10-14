import { createSlice } from "@reduxjs/toolkit";

const currentColor = createSlice({
  name: "currentColor",
  initialState: {
    value: 0,
  },
  reducers: {
    setCurrentColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCurrentColor } = currentColor.actions;
export default currentColor.reducer;
