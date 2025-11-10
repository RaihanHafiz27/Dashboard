import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface themeState {
  darkMode: boolean;
}

const initialState: themeState = {
  darkMode: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toogleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
    },
  },
});

export const { toogleDarkMode, setDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
