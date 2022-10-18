import React from 'react';
import { useNavigate } from 'react-router-dom';
// Layout
import Box from '../../components/mui/Box/Box';
import Button from '../../components/mui/Button/Button';
import Pixel from '../../components/Pixel/Pixel';
import Stack from '../../components/mui/Stack/Stack';
import TextField from '../../components/mui/TextField/TextField';
import Typography from '../../components/mui/Typography/Typography';
// Hooks
import { useAppSelector } from '../../core/hooks';

const Profile = (): JSX.Element => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.dashboard.user);
  if (!user) {
    return <Box />;
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
          marginTop: '40px',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '400px',
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h2">
            {user.firstName} {user.lastName}
          </Typography>
        </Box>
        <Box mt={5}>
          <Pixel
            label={user.firstName.substring(0, 1) + user.lastName.substring(0, 1)}
            size={400}
            backgroundColor="lightgrey"
            color="darkgrey"
          />
        </Box>
        <Stack mt={8} spacing={1} direction="row" flex={1} justifyContent="space-between">
          <TextField label="Foreground" placeholder="#ffffff" />
          <TextField label="Background" placeholder="#000000" />
        </Stack>
        <Stack mt={3} spacing={1}>
          <Button variant="contained" color="primary" size="large">
            Update
          </Button>
        </Stack>
        <Stack mt={1} spacing={1}>
          <Button variant="outlined" color="primary" size="large" onClick={() => navigate('/')}>
            Enter the Grid
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Profile;
