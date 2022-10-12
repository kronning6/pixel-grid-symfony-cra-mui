import React from 'react';
import { AppBar as MuiAppBar, AppBarProps as MuiAppBarProps } from '@mui/material';

export type AppBarProps = MuiAppBarProps;

const AppBar = ({ children, ...rest }: AppBarProps): JSX.Element => {
  return <MuiAppBar {...rest}>{children}</MuiAppBar>;
};

export default AppBar;
