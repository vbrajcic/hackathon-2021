import { ThemeOptions } from '@material-ui/core';
import Colors from 'styles/Colors';

const overrides: ThemeOptions['overrides'] = {
  MuiButton: {
    root: {
      borderRadius: '32px',
      padding: '18px 28px',
    },
    contained: {
      boxShadow: '2px 5px 14px 0 rgba(49, 50, 51, 0.2)',
    },
  },
  MuiPaper: {
    root: {
      backgroundColor: Colors.white,
    },
    rounded: {
      borderRadius: '32px',
    },
    elevation1: {
      boxShadow: '0 2px 29px 0 rgba(63, 62, 74, 0.05), 19px 67px 102px 0 rgba(63, 62, 74, 0.13)',
    },
  },
};

export default overrides;
