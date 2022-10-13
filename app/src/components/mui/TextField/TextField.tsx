import React from 'react';
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@mui/material';

export type TextFieldProps = MuiTextFieldProps;

const TextField = ({ ...rest }: TextFieldProps): JSX.Element => {
  return <MuiTextField {...rest} />;
};

export default TextField;
