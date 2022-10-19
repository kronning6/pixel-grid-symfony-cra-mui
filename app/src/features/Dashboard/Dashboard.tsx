import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
// Layout
import AppBar from '../../components/mui/AppBar/AppBar';
import Autocomplete from '../../components/mui/Autocomplete/Autocomplete';
import Box from '../../components/mui/Box/Box';
import TextField from '../../components/mui/TextField/TextField';
import ThemeProvider from '../../components/mui/ThemeProvider/ThemeProvider';
import Toolbar from '../../components/mui/Toolbar/Toolbar';
import Typography from '../../components/mui/Typography/Typography';
import IconButton from '../../components/mui/IconButton/IconButton';
import AdminToolsIcon from '../../components/mui/icons/AdminToolsIcon';
import EditProfileIcon from '../../components/mui/icons/EditProfileIcon';
// Hooks
import { useAppDispatch, useAppSelector } from '../../core/hooks';
import { setTheme, setUser } from './dashboardSlice';
import { useGetUsersQuery } from '../../services/userApi';
import ApiUserResource from '../../types/ApiUserResource';

const Dashboard = (): JSX.Element => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.dashboard.user);
  const fg = useAppSelector((state) => state.dashboard.fg);
  const bg = useAppSelector((state) => state.dashboard.bg);
  const dispatch = useAppDispatch();
  const { data: users } = useGetUsersQuery();

  return (
    <ThemeProvider fg={fg} bg={bg}>
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
                options={(users ?? [])
                  .map((user) => user)
                  .sort((a, b) => `${a.firstName} ${a.lastName}`.localeCompare(`${b.firstName} ${b.lastName}`))}
                renderInput={(params) => <TextField color={'primary'} {...params} label="User" />}
                onChange={(event, newValue: ApiUserResource | null) => {
                  dispatch(setUser(newValue));
                  dispatch(
                    setTheme({
                      fg: newValue?.foregroundColor,
                      bg: newValue?.backgroundColor,
                    }),
                  );
                  if (!newValue) {
                    navigate('/');
                  }
                }}
                getOptionLabel={(option) => `${option.firstName} ${option.lastName}`}
                value={user}
              />
              <IconButton disabled={!user} sx={{ color: fg, marginLeft: '5px' }} onClick={() => navigate('profile')}>
                <EditProfileIcon />
              </IconButton>
              <IconButton sx={{ color: fg, marginLeft: '5px' }} onClick={() => navigate('admin')}>
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
            paddingBottom: '100px',
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
