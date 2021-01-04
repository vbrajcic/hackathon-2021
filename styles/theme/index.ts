import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

import palette from './palette';
import typography from './typography';
import overrides from './overrides';
import props from './props';
import breakpoints from './breakpoints';

const theme = createMuiTheme({
  palette,
  typography,
  overrides,
  props,
  breakpoints,
});

export default responsiveFontSizes(theme);
