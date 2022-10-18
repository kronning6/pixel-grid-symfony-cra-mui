import React, { PropsWithChildren } from 'react';
import { createTheme, CssBaseline } from '@mui/material';
import MuiThemeProvider from '@mui/material/styles/ThemeProvider';

export interface ThemeProviderProps {
  fg: string;
  bg: string;
}

const ThemeProvider = (props: PropsWithChildren<ThemeProviderProps>) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: props.bg,
        contrastText: props.fg,
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
