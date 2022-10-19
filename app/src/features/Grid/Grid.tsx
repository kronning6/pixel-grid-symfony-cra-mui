import React, { useEffect, useState } from 'react';
// Layout
import Box from '../../components/mui/Box/Box';
import Pixel from '../../components/Pixel/Pixel';
import Typography from '../../components/mui/Typography/Typography';
// Hooks
import { useAppSelector } from '../../core/hooks';
import { useGetPixelsQuery, useUpdatePixelMutation } from '../../services/pixelApi';
import ApiPixelResource from '../../types/ApiPixelResource';

const Grid = (): JSX.Element => {
  // Global state
  const loggedInUser = useAppSelector((state) => state.dashboard.user);
  const { data: pixelData, isLoading: isPixelDataLoading } = useGetPixelsQuery();
  const [updatePixel] = useUpdatePixelMutation();
  // Local state
  const pixelSize = 50;
  const [pixelsWide, setPixelsWide] = useState<number>(15);
  const [localPixelData, setLocalPixelData] = useState<ApiPixelResource[] | null>(null);

  // Temp data
  // const gridList = [];
  // for (let y = 14; y >= 0; y--) {
  //   for (let x = 0; x <= 14; x++) {
  //     gridList.push({ x: x, y: y, available: true, user: null });
  //   }
  // }

  useEffect(() => {
    if (pixelData) {
      setPixelsWide(
        1 +
          Math.abs(pixelData.reduce((min, p) => (p.x < min ? p.x : min), pixelData[0].x)) +
          pixelData.reduce((max, p) => (p.x > max ? p.x : max), pixelData[0].x),
      );
      setLocalPixelData(pixelData);
    }
  }, [pixelData]);

  let gridData = null;
  if (!isPixelDataLoading && localPixelData) {
    gridData = localPixelData
      .filter((pixel) => pixel.available)
      .sort((a, b) => a.x - b.x)
      .sort((a, b) => b.y - a.y)
      .map((pixel, index) => {
        const initials = pixel.user ? pixel.user.firstName.substring(0, 1) + pixel.user.lastName.substring(0, 1) : 'PG';
        const fg = pixel.user ? pixel.user.foregroundColor ?? 'lightgrey' : 'darkgrey';
        const bg = pixel.user ? pixel.user.backgroundColor ?? 'darkgrey' : 'lightgrey';
        return (
          <Box
            key={index}
            sx={{ display: 'inline-flex' }}
            onClick={() => {
              if (!loggedInUser) {
                return;
              }
              let updatedPixel: ApiPixelResource | null = null;
              if (!pixel.user) {
                updatedPixel = { ...pixel, ...{ user: loggedInUser, userId: loggedInUser.id } };
              } else if (pixel.user && pixel.user.id !== loggedInUser.id) {
                updatedPixel = { ...pixel, ...{ user: null, userId: null } };
              }
              if (updatedPixel) {
                updatePixel(updatedPixel);
                setLocalPixelData(
                  localPixelData.map((localPixel) => {
                    if (localPixel.id === updatedPixel?.id) {
                      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                      return updatedPixel!;
                    }
                    return localPixel;
                  }),
                );
              }
            }}
          >
            <Pixel key={index} label={initials} size={pixelSize} backgroundColor={bg} color={fg} />
          </Box>
        );
      });
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
          width: `${2 + pixelSize * pixelsWide}px`,
        }}
      >
        {gridData ?? (
          <Box>
            <Typography variant="h4" sx={{ textAlign: 'center' }}>
              Loading...
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Grid;
