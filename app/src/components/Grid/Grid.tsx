import React from 'react';
import Box from '../mui/Box/Box';
import Pixel from '../Pixel/Pixel';

const Grid = (): JSX.Element => {
  // Temp data
  const gridList = [];
  for (let y = 14; y >= 0; y--) {
    for (let x = 0; x <= 14; x++) {
      gridList.push({ x: x, y: y, available: true, user: null });
    }
  }
  const pixelsWide =
    1 +
    Math.abs(gridList.reduce((min, p) => (p.x < min ? p.x : min), gridList[0].x)) +
    gridList.reduce((max, p) => (p.x > max ? p.x : max), gridList[0].x);
  const size = 50;
  // Temp data

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
      }}
    >
      <Box
        sx={{
          border: '1px solid #a0a0a0',
          marginTop: '40px',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: `${2 + size * pixelsWide}px`,
        }}
      >
        {gridList
          .filter((pixelData) => pixelData.available)
          .map((pixelData, index) => (
            <Pixel key={index} label={'PG'} size={size} backgroundColor="lightgrey" color="darkgrey" />
          ))}
      </Box>
    </Box>
  );
};

export default Grid;
