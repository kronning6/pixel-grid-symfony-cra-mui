import React from 'react';
import Box from '../mui/Box/Box';

export interface PixelProps {
  color: string;
  backgroundColor: string;
  label: string;
  size: number;
}

const Pixel = (props: PixelProps): JSX.Element => {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: props.backgroundColor,
        border: '1px solid #a0a0a0',
        color: props.color,
        cursor: 'pointer',
        fontSize: '100%',
        height: `${props.size}px`,
        width: `${props.size}px`,
      }}
    >
      {props.label}
    </Box>
  );
};

export default Pixel;
