import { configureStore } from "@reduxjs/toolkit";

import userText from "../features/userText";
import currentColor from "../features/currentColor";
import countedWord from "../features/countedWord";

export const store = configureStore({
  reducer: {
    userText,
    currentColor,
    countedWord,
  },
});
