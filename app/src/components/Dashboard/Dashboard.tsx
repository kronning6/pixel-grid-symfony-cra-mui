import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import AppBar from '../mui/AppBar/AppBar';
import Autocomplete from '../mui/Autocomplete/Autocomplete';
import Box from '../mui/Box/Box';
import TextField from '../mui/TextField/TextField';
import Toolbar from '../mui/Toolbar/Toolbar';
import Typography from '../mui/Typography/Typography';
import IconButton from '../mui/IconButton/IconButton';
import EditProfileIcon from '../mui/icons/EditProfileIcon';

const Dashboard = (): JSX.Element => {
  const navigate = useNavigate();
  const users = [
    { fullName: 'Kyle Ronning', id: 1 },
    { fullName: 'Det Sorthepharack', id: 2 },
    { fullName: 'John Cloeter', id: 3 },
    { fullName: 'Matt Bouc', id: 4 },
    { fullName: 'Maxwell Lafontant', id: 5 },
  ];
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
            <Box
              sx={{
                display: 'flex',
              }}
            >
              <Autocomplete
                sx={{
                  width: '200px',
                }}
                size={'small'}
                options={users.map((user) => ({ label: user.fullName, value: user.id.toString() }))}
                renderInput={(params) => <TextField color={'primary'} {...params} label="User" />}
              />
              <IconButton sx={{ color: '#fff', marginLeft: '5px' }} onClick={() => navigate('profile')}>
                <EditProfileIcon />
              </IconButton>
            </Box>
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
