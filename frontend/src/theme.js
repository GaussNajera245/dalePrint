  
import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFB6D4',
    },
    secondary: {
      main: '#EE1C24',
    },
    error: {
      main: '#4EA9D5',
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;