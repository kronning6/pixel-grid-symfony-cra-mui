import React from 'react';
import { Toolbar as MuiToolbar, ToolbarProps as MuiToolbarProps } from '@mui/material';

export type ToolbarProps = MuiToolbarProps;

const Toolbar = ({ children, ...rest }: ToolbarProps): JSX.Element => {
  return <MuiToolbar {...rest}>{children}</MuiToolbar>;
};

export default Toolbar;
