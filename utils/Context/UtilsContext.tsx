import React from 'react';

export type Breakpoint = 'XS' | 'SM' | 'MD' | 'LG' | 'XL';
interface UtilsContextValues {
  Breakpoints: { [key in Breakpoint]: number };
}

export const defaultBreakpoints: UtilsContextValues['Breakpoints'] = {
  XS: 0,
  SM: 414,
  MD: 768,
  LG: 1024,
  XL: 1440,
};

const UtilsContext = React.createContext({
  Breakpoints: defaultBreakpoints,
});

interface UtilsProviderProps {
  breakpoints?: UtilsContextValues['Breakpoints'];
}

export const UtilsConsumer = UtilsContext.Consumer;
export const UtilsProvider: React.FC<UtilsProviderProps> = ({ children, breakpoints = defaultBreakpoints }) => (
  <UtilsContext.Provider value={{ Breakpoints: breakpoints }}>{children}</UtilsContext.Provider>
);

export default UtilsContext;
