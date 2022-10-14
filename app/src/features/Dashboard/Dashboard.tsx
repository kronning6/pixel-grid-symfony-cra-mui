import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import AppBar from '../../components/mui/AppBar/AppBar';
import Autocomplete from '../../components/mui/Autocomplete/Autocomplete';
import Box from '../../components/mui/Box/Box';
import TextField from '../../components/mui/TextField/TextField';
import Toolbar from '../../components/mui/Toolbar/Toolbar';
import Typography from '../../components/mui/Typography/Typography';
import IconButton from '../../components/mui/IconButton/IconButton';
import AdminToolsIcon from '../../components/mui/icons/AdminToolsIcon';
import EditProfileIcon from '../../components/mui/icons/EditProfileIcon';

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
      <AppBar position="sticky">
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
            <IconButton sx={{ color: '#fff', marginLeft: '5px' }} onClick={() => navigate('admin')}>
              <AdminToolsIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: 'flex',
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
