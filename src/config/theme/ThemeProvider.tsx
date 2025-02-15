import React, {createContext, useContext} from 'react';
import {colorsRide, shadows} from './tokens';
import { spacing, typography } from '../../tokens';

const ThemeContext = createContext({
  colorsRide,
  spacing,
  typography,
  shadows,
});

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  return (
    <ThemeContext.Provider value={{colorsRide, spacing, typography, shadows}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
