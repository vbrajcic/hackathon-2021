import { ThemeOptions } from '@material-ui/core';

const typography: ThemeOptions['typography'] = {
  fontFamily:
    'Alliance, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
  h1: {
    fontSize: '80px',
    lineHeight: '80px',
    fontWeight: 'bold',
    letterSpacing: '-3px',
  },
  h2: {
    fontSize: '64px',
    lineHeight: '64px',
    fontWeight: 'bold',
    letterSpacing: '-3px',
  },
  h4: {
    fontSize: '28px',
    lineHeight: '41px',
    letterSpacing: 0,
  },
  subtitle1: {
    fontSize: '18px',
    lineHeight: '28px',
    letterSpacing: 0,
  },
  body1: {
    fontSize: '20px',
    lineHeight: '24px',
    letterSpacing: 0,
  },
  body2: {
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: 0,
  },
  overline: {
    fontSize: '12px',
    lineHeight: '24px',
    letterSpacing: '0.75px',
  },
  caption: {
    fontSize: '10px',
    lineHeight: '14px',
    letterSpacing: '1px',
  },
  button: {
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: 0,
    fontWeight: 'bold',
    textTransform: 'none',
  },
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
};

export default typography;
