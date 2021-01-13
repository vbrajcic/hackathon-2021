import { ThemeOptions } from '@material-ui/core';
import Arrow from 'components/SvgIcons/Arrow';

const props: ThemeOptions['props'] = {
  MuiButtonBase: {
    disableRipple: true,
  },
  MuiButton: {
    variant: 'contained',
    color: 'secondary',
    startIcon: Arrow({}),
  },
  MuiPaper: {
    elevation: 1,
  },
  MuiLink: {
    underline: 'none',
  },
};

export default props;
