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
        color: 'inherit',
      },
      '&:focus': {
        outline: 'none',
      },
    },
    contained: {
      boxShadow: '2px 5px 14px 0 rgba(49, 50, 51, 0.2)',
      '&:hover': {
        boxShadow: '2px 5px 14px 0 rgba(49, 50, 51, 0.2)',
      },
      '&$disabled': {
        color: 'inherit',
      },
    },
    containedPrimary: {
      '&:hover': {
        backgroundColor: Colors.black,
      },
    },
    outlinedSizeSmall: {
      padding: '8px 14px',
    },
  },
  MuiCard: {
    root: {
      boxShadow: '12px 31px 85px 0 rgba(0,0,0,0.08)',
    },
  },
  MuiCardActionArea: {
    focusHighlight: {
      borderRadius: 60,
      '@media (max-width: 768px)': {
        borderRadius: 40,
      },
    },
  },
  MuiContainer: {
    root: {
      '@media (min-width: 1024px)': {
        paddingLeft: 60,
        paddingRight: 60,
      },
    },
  },
  MuiPaper: {
    root: {
      backgroundColor: Colors.white,
    },
    rounded: {
      borderRadius: 60,
      '@media (max-width: 768px)': {
        borderRadius: 40,
      },
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
    root: {
      color: Colors.grey200,
    },
    input: {
      '&::-webkit-input-placeholder': {
        opacity: 1,
      },
    },
    underline: {
      '&::before': {
        borderColor: Colors.grey300,
      },
      '&:hover:not(.Mui-disabled):before': {
        borderColor: Colors.grey400,
      },
      '&.Mui-focused:hover:before': {
        borderBottom: 0,
      },
      '&::after': {
        borderColor: Colors.white,
        transformOrigin: '0% 50%',
        transition: 'transform 300ms cubic-bezier(0.5, 0.67, 0.2, 1) 0ms',
      },
    },
  },
  MuiInputBase: {
    root: {
      fontSize: 16,
      lineHeight: 1.5,
    },
    multiline: {
      paddingBottom: 19,
    },
    input: {
      paddingBottom: 19,
      fontSize: 16,
      lineHeight: 1.5,
    },
  },
  MuiGrid: {
    container: {
      width: 'initial',
    },
  },
  MuiSnackbarContent: {
    root: {
      backgroundColor: Colors.muted,
      zIndex: 1500,
    },
  },
};

export default overrides;
