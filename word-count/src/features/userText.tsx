import { createSlice } from "@reduxjs/toolkit";

const userText = createSlice({
  name: "userText",
  initialState: {
    value: "",
  },
  reducers: {
    setText: (state, action) => {
      state.value = action.payload;
    },
    deleteText: (state) => {
      state.value = "";
    },
  },
});

export const { setText, deleteText } = userText.actions;
export default userText.reducer;
