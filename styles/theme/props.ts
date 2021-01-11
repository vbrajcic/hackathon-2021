import { ThemeOptions } from '@material-ui/core';
import Arrow from 'components/SvgIcons/Arrow';

const props: ThemeOptions['props'] = {
  MuiButton: {
    variant: 'contained',
    disableRipple: true,
    color: 'secondary',
    startIcon: Arrow({}),
  },
  MuiIconButton: {
    disableRipple: true,
  },
  MuiFab: {
    disableRipple: true,
  },
  MuiPaper: {
    elevation: 1,
  },
  MuiLink: {
    underline: 'none',
  },
};

export default props;
