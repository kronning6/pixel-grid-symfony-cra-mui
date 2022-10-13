import React, { PropsWithChildren } from 'react';
import { createTheme, CssBaseline } from '@mui/material';
import MuiThemeProvider from '@mui/material/styles/ThemeProvider';

const ThemeProvider = (props: PropsWithChildren) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#195cab',
      },
    },
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiAutocomplete: {
        styleOverrides: {},
      },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
