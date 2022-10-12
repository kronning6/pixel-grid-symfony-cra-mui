import React, { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import Box from '../mui/Box/Box';
import AppBar from '../mui/AppBar/AppBar';
import Toolbar from '../mui/Toolbar/Toolbar';
import Typography from '../mui/Typography/Typography';

const Dashboard = (props: PropsWithChildren): JSX.Element => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
              PixelGrid
            </Typography>
            <Box>Current User</Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        sx={{
          height: '100%',
          width: '100%',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Dashboard;
