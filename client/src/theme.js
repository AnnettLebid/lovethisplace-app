import { createTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: blue,
    secondary: pink,
      },
  typography: {
    fontFamily: `"Secular", "Helvetica", "Arial", sans-serif`,
  },
  overrides: {
    MUIDataTable: {
      responsiveScroll: {
      maxHeight: '980px'
      }
  }}
});

export default theme;