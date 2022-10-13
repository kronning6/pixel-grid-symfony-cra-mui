import React from 'react';
import { IconButton as MuiIconButton, IconButtonProps as MuiIconButtonProps } from '@mui/material';

export type IconButtonProps = MuiIconButtonProps;

const IconButton = ({ children, ...rest }: IconButtonProps): JSX.Element => {
  return <MuiIconButton {...rest}>{children}</MuiIconButton>;
};

export default IconButton;
