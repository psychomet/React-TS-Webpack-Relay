import {
  DefaultTheme,
  ThemeProvider as OriginalThemeProvider,
} from "styled-components";
import React from "react";
import { useAppSelector } from "core/hooks";
import {selectTheme} from "store/themeSlice";

interface Props {
  children?: React.ReactElement;
}

export default function ThemeProvider({ children }: Props): React.ReactElement {
  const theme: DefaultTheme = useAppSelector(selectTheme);

  return (
    <OriginalThemeProvider theme={theme}>{children}</OriginalThemeProvider>
  );
}
