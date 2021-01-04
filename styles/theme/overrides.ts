import { ThemeOptions } from '@material-ui/core';
import Colors from 'styles/Colors';

const overrides: ThemeOptions['overrides'] = {
  MuiButton: {
    root: {
      borderRadius: 32,
      padding: '18px 28px',
      lineHeight: 1.3,
      '&$disabled': {
        backgroundColor: Colors.muted,
        cursor: 'not-allowed',
      },
      '&:focus': {
        outline: 'none',
      },
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
      borderRadius: 32,
    },
    elevation1: {
      boxShadow: '0 2px 29px 0 rgba(63, 62, 74, 0.05), 19px 67px 102px 0 rgba(63, 62, 74, 0.13)',
    },
  },
  MuiFormControl: {
    root: {
      marginBottom: 45,
    },
  },
  MuiFormHelperText: {
    root: {
      fontSize: 12,
      letterSpacing: 0,
    },
  },
  MuiInput: {
    input: {
      '&::-webkit-input-placeholder': {
        opacity: 1,
      },
    },
    underline: {
      '&::before': {
        borderColor: Colors.grey300,
      },
    },
  },
  MuiInputBase: {
    multiline: {
      paddingBottom: 19,
    },
    input: {
      paddingBottom: 19,
    },
  },
};

export default overrides;
