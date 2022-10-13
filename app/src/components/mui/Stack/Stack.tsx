import React from 'react';
import { Stack as MuiStack, StackProps as MuiStackProps } from '@mui/material';

export type StackProps = MuiStackProps;

const Stack = ({ children, ...rest }: StackProps): JSX.Element => {
  return <MuiStack {...rest}>{children}</MuiStack>;
};

export default Stack;
