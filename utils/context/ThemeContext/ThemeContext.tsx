import React from 'react';

import { PaletteType } from '@material-ui/core';

interface ThemeContextValues {
  theme: PaletteType;
}

const ThemeContext = React.createContext<ThemeContextValues>({
  theme: 'light',
});

export const useTheme = () => React.useContext(ThemeContext);
export const ThemeContextProvider = ThemeContext.Provider;
export const ThemeContextConsumer = ThemeContext.Consumer;
