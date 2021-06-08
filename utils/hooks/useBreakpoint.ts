import useMediaQuery from '@material-ui/core/useMediaQuery';

import { useTheme } from '@material-ui/core/styles';
import { BreakpointValues } from '@material-ui/core/styles/createBreakpoints';

export type Breakpoint = keyof BreakpointValues;

const useBreakpoint = () => {
  const { breakpoints } = useTheme();

  const isExtraSmall = useMediaQuery(() => breakpoints.down('xs'));
  const isMobile = useMediaQuery(() => breakpoints.down('sm'));
  const isTablet = useMediaQuery(() => breakpoints.between('sm', 'lg'));
  const isDesktop = useMediaQuery(() => breakpoints.up('lg'));

  return {
    isExtraSmall,
    isMobile,
    isDesktop,
    isTablet,
  };
};

export default useBreakpoint;
