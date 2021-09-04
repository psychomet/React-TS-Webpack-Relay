import { DefaultTheme } from "styled-components/native";
import { createSlice } from "@reduxjs/toolkit";
import { dark, light } from "../../../theme";
import {RootState} from "core/store";

export enum ThemeType {
  LIGHT = "LIGHT",
  DARK = "DARK",
}

export interface Theme {
  theme: DefaultTheme;
  themeType: ThemeType;
}

const initialState: Theme = {
  theme: light,
  themeType: ThemeType.LIGHT,
};

const createTheme = (type = ThemeType.LIGHT): DefaultTheme => {
  switch (type) {
    case ThemeType.DARK:
      return dark;
    case ThemeType.LIGHT:
    default:
      return light;
  }
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeThemeType: (state) => {
      const changedType: ThemeType =
        state.themeType === ThemeType.DARK ? ThemeType.LIGHT : ThemeType.DARK;
      state.themeType = changedType;
      state.theme = createTheme(changedType);
    },
  },
});

export const { changeThemeType } = themeSlice.actions;
export const selectTheme = (state: RootState): DefaultTheme => state.theme.theme;

export default themeSlice.reducer;
