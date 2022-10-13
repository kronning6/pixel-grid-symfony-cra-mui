import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

export type ButtonProps = MuiButtonProps;

const Button = ({ children, ...rest }: ButtonProps): JSX.Element => {
  return <MuiButton {...rest}>{children}</MuiButton>;
};

export default Button;
