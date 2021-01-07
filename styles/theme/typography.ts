import { ThemeOptions } from '@material-ui/core';
import Colors from 'styles/Colors';

const typography: ThemeOptions['typography'] = {
  fontFamily:
    'Alliance, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
  h1: {
    fontSize: 80,
    lineHeight: 1,
    fontWeight: 'bold',
    letterSpacing: -3,
    color: Colors.primary,
  },
  h2: {
    fontSize: 64,
    lineHeight: 1,
    fontWeight: 'bold',
    letterSpacing: -3,
    color: Colors.primary,
    '@media (min-width:768px)': {
      fontSize: 48,
    },
  },
  h4: {
    fontSize: 28,
    lineHeight: 1.46,
    letterSpacing: 0,
    color: Colors.primary,
  },
  subtitle1: {
    fontSize: 18,
    lineHeight: 1.5,
    letterSpacing: 0,
  },
  body1: {
    fontSize: 20,
    lineHeight: 1.2,
    letterSpacing: 0,
  },
  body2: {
    fontSize: 16,
    lineHeight: 1.5,
    letterSpacing: 0,
  },
  overline: {
    fontSize: 12,
    lineHeight: 2,
    letterSpacing: 0.75,
  },
  caption: {
    fontSize: 10,
    lineHeight: 1.4,
    letterSpacing: 1,
  },
  button: {
    fontSize: 16,
    lineHeight: 1.5,
    letterSpacing: 0,
    fontWeight: 'bold',
    textTransform: 'none',
  },
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
};

export default typography;
