import React, { useState } from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';

import { Breakpoint, UtilsContext } from '../Context';

const Validation = {
  isBetween: (target: number, lower: number, upper: number, granularity: '()' | '[)' | '[]' | '(]' = '()') => {
    switch (granularity) {
      case '[)':
        return target >= lower && target < upper;
      case '(]':
        return target > lower && target <= upper;
      case '[]':
        return target >= lower && target <= upper;
      case '()':
      default:
        return target > lower && target < upper;
    }
  },
  isGreaterThan: (target: number, compareTo: number, operator: '>=' | '>' = '>') => {
    if (operator === '>=') {
      return target >= compareTo;
    }

    return target > compareTo;
  },
  isLessThan: (target: number, compareTo: number, operator: '<=' | '<' = '<') => {
    if (operator === '<=') {
      return target <= compareTo;
    }

    return target < compareTo;
  },
};

interface UseBreakpointPayload {
  width: number;
  current: Breakpoint;
  isBelow: (limit: Breakpoint, operator?: '<=' | '<') => boolean;
  isBetween: (lower: Breakpoint, upper: Breakpoint) => boolean;
  isAbove: (limit: Breakpoint, operator?: '>=' | '>') => boolean;
}
type UseBreakpointHook = () => UseBreakpointPayload;

const getCurrentBreakpoint = (width: number, Breakpoints: { [key in Breakpoint]: number }): Breakpoint => {
  if (Validation.isBetween(width, 0, Breakpoints.XS)) {
    return 'XS';
  }
  if (Validation.isBetween(width, Breakpoints.XS, Breakpoints.SM, '[)')) {
    return 'SM';
  }
  if (Validation.isBetween(width, Breakpoints.SM, Breakpoints.MD, '[)')) {
    return 'MD';
  }
  if (Validation.isBetween(width, Breakpoints.MD, Breakpoints.LG, '[)')) {
    return 'LG';
  }

  return 'XL';
};

const useBreakpoint: UseBreakpointHook = () => {
  const { width } = useWindowSize();
  const { Breakpoints } = React.useContext(UtilsContext);
  const [current, setCurrentBreakpoint] = useState<Breakpoint>(getCurrentBreakpoint(width, Breakpoints));

  React.useEffect(() => {
    const newBreakpoint = getCurrentBreakpoint(width, Breakpoints);

    setCurrentBreakpoint(newBreakpoint);
  }, [width, Breakpoints]);

  const isBelow = React.useCallback(
    (limit: Breakpoint, operator: '<=' | '<' = '<') => Validation.isLessThan(width, Breakpoints[limit], operator),
    [width, Breakpoints]
  );

  const isAbove = React.useCallback(
    (limit: Breakpoint, operator: '>=' | '>' = '>=') => Validation.isGreaterThan(width, Breakpoints[limit], operator),
    [width, Breakpoints]
  );

  const isBetween = React.useCallback(
    (lower: Breakpoint, upper: Breakpoint) => Validation.isBetween(width, Breakpoints[lower], Breakpoints[upper]),
    [width, Breakpoints]
  );

  return {
    current,
    isAbove,
    isBelow,
    isBetween,
    width,
  };
};

export default useBreakpoint;
