import { ThemeOptions } from '@material-ui/core';
import Colors from 'styles/Colors';

const palette: ThemeOptions['palette'] = {
  primary: {
    main: Colors.primary,
    contrastText: Colors.white,
  },
  secondary: {
    main: Colors.secondary,
    contrastText: Colors.white,
  },
  text: {
    primary: Colors.textPrimary,
    secondary: Colors.textSecondary,
    disabled: Colors.muted,
    hint: Colors.muted,
  },
};

export default palette;
