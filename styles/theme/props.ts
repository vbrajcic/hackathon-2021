import { ThemeOptions } from '@material-ui/core';

const props: ThemeOptions['props'] = {
  MuiButton: {
    variant: 'contained',
    disableRipple: true,
    color: 'secondary',
  },
  MuiPaper: {
    elevation: 1,
  },
};

export default props;
