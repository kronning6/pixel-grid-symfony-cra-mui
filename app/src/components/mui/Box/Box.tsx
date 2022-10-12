import React from 'react';
import { Box as MuiBox, BoxProps as MuiBoxProps } from '@mui/material';

export type BoxProps = MuiBoxProps;

const Box = ({ children, ...rest }: BoxProps): JSX.Element => {
  return <MuiBox {...rest}>{children}</MuiBox>;
};

export default Box;
