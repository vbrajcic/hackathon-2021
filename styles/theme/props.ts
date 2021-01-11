import { ThemeOptions } from '@material-ui/core';
import Arrow from 'components/SvgIcons/Arrow';

const props: ThemeOptions['props'] = {
  MuiButton: {
    variant: 'contained',
    disableRipple: true,
    color: 'secondary',
    startIcon: Arrow({}),
  },
  MuiFab: {
    disableRipple: true,
  },
  MuiPaper: {
    elevation: 1,
  },
};

export default props;
