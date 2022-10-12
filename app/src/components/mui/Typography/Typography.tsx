import React from 'react';
import { Typography as MuiTypography, TypographyProps as MuiTypographyProps } from '@mui/material';

export type TypographyProps = MuiTypographyProps;

const Typography = ({ children, ...rest }: TypographyProps): JSX.Element => {
  return <MuiTypography {...rest}>{children}</MuiTypography>;
};

export default Typography;
