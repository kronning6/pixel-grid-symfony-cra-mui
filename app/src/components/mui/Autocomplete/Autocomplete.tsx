import React from 'react';
import { Autocomplete as MuiAutocomplete, AutocompleteRenderInputParams, SxProps, Theme } from '@mui/material';

// TODO Figure out how to make Autocomplete have a thin wrapper

// export interface AutocompleteProps {
//   options: ReadonlyArray<{ label: string; value: string }>;
//   sx?: SxProps<Theme>;
//   size?: 'small' | 'medium';
//   renderInput: (params: AutocompleteRenderInputParams) => React.ReactNode;
//   onChange?: (event: React.SyntheticEvent) => void;
// }
//
// const Autocomplete = ({ ...rest }: AutocompleteProps): JSX.Element => {
//   return (
//     <MuiAutocomplete disablePortal isOptionEqualToValue={(option, value) => option.value === value.value} {...rest} />
//   );
// };

// export default Autocomplete;

export default MuiAutocomplete;
