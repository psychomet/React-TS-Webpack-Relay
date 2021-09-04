import ThemeProvider from '../providers/ThemeProvider';

import React from 'react';
import {ThemeType} from "store/themeSlice";

interface Props {
  initialThemeType?: ThemeType;
  children?: React.ReactElement;
}

const RootProvider = ({
  children,
}: Props): React.ReactElement => {
  return (
    <ThemeProvider
    >
      {children}
    </ThemeProvider>
  );
};

export default RootProvider;
