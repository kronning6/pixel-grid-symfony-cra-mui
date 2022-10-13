import React from 'react';
import { Autocomplete as MuiAutocomplete, AutocompleteRenderInputParams, SxProps, Theme } from '@mui/material';

export interface AutocompleteProps {
  options: ReadonlyArray<{ label: string; value: string }>;
  sx?: SxProps<Theme>;
  size?: 'small' | 'medium';
  renderInput: (params: AutocompleteRenderInputParams) => React.ReactNode;
}

const Autocomplete = ({ ...rest }: AutocompleteProps): JSX.Element => {
  return (
    <MuiAutocomplete disablePortal isOptionEqualToValue={(option, value) => option.value === value.value} {...rest} />
  );
};

export default Autocomplete;
