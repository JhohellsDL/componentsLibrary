import React, {createContext, useContext} from 'react';
import { spacing, typography } from '../../tokens';

const ThemeContext = createContext({
  spacing,
  typography,
});

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  return (
    <ThemeContext.Provider value={{ spacing, typography }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
