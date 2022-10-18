import React from 'react';
// Layout
import Box from '../../components/mui/Box/Box';
import Pixel from '../../components/Pixel/Pixel';
// Hooks
import { useCreatePixelMutation, useGetPixelsQuery } from '../../services/pixelApi';

const Grid = (): JSX.Element => {
  const { data: pixelData, isLoading: isPixelDataLoading } = useGetPixelsQuery();
  const [createPixel, createPixelResult] = useCreatePixelMutation();

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

  let gridData = null;
  if (!isPixelDataLoading && pixelData) {
    gridData = pixelData
      .filter((pixel) => pixel.available)
      .sort((a, b) => a.x - b.x)
      .sort((a, b) => b.y - a.y)
      .map((pixel, index) => (
        <Box
          key={index}
          sx={{ display: 'inline-flex' }}
          onClick={() => {
            //createPixel({ x: pixelData.x, y: pixelData.y, available: true, user: null });
          }}
        >
          <Pixel key={index} label={`${pixel.x}${pixel.y}`} size={size} backgroundColor="lightgrey" color="darkgrey" />
        </Box>
      ));
  }

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
        {gridData ?? 'Loading...'}
      </Box>
    </Box>
  );
};

export default Grid;
