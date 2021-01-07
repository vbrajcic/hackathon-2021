import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Theme } from '@material-ui/core/styles';
import { BreakpointValues } from '@material-ui/core/styles/createBreakpoints';

type Breakpoint = keyof BreakpointValues;

const BetweenLimits = (upper: Breakpoint, lower: Breakpoint): boolean =>
  useMediaQuery((theme: Theme) => theme.breakpoints.between(upper, lower));
const BelowLimit = (limit: Breakpoint): boolean => useMediaQuery((theme: Theme) => theme.breakpoints.down(limit));
const AboveLimit = (limit: Breakpoint): boolean => useMediaQuery((theme: Theme) => theme.breakpoints.up(limit));
const OnlyLimit = (limit: Breakpoint): boolean => useMediaQuery((theme: Theme) => theme.breakpoints.only(limit));

const useBreakpoint = () => {
  const isBetween = (lower: Breakpoint, upper: Breakpoint) => BetweenLimits(lower, upper);
  const isBelow = (limit: Breakpoint) => BelowLimit(limit);
  const isAbove = (limit: Breakpoint) => AboveLimit(limit);
  const isOnly = (limit: Breakpoint) => OnlyLimit(limit);

  return {
    isBetween,
    isBelow,
    isAbove,
    isOnly,
  };
};

export default useBreakpoint;
