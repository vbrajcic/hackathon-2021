import { createMuiTheme } from '@material-ui/core';

import palette from './palette';
import typography from './typography';
import overrides from './overrides';
import props from './props';

const theme = createMuiTheme({
  palette,
  typography,
  overrides,
  props,
});

export default theme;
