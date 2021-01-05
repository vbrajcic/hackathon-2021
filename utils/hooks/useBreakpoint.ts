import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Theme } from '@material-ui/core/styles';

interface UseBreakpointPayload {
  isBelow: (limit: Breakpoint) => boolean;
  isBetween: (lower: Breakpoint, upper: Breakpoint) => boolean;
  isAbove: (limit: Breakpoint) => boolean;
  isOnly: (limit: Breakpoint) => boolean;
}
type UseBreakpointHook = () => UseBreakpointPayload;
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const BetweenLimits = (upper: Breakpoint, lower: Breakpoint): boolean =>
  useMediaQuery((theme: Theme) => theme.breakpoints.between(upper, lower));
const BelowLimit = (limit: Breakpoint): boolean => useMediaQuery((theme: Theme) => theme.breakpoints.down(limit));
const AboveLimit = (limit: Breakpoint): boolean => useMediaQuery((theme: Theme) => theme.breakpoints.up(limit));
const OnlyLimit = (limit: Breakpoint): boolean => useMediaQuery((theme: Theme) => theme.breakpoints.only(limit));

const useBreakpoint: UseBreakpointHook = () => {
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
