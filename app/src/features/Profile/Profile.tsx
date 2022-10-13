import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '../../components/mui/Box/Box';
import Button from '../../components/mui/Button/Button';
import Stack from '../../components/mui/Stack/Stack';
import TextField from '../../components/mui/TextField/TextField';
import Typography from '../../components/mui/Typography/Typography';
import Pixel from '../../components/Pixel/Pixel';

const Profile = (): JSX.Element => {
  const navigate = useNavigate();
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
          <Typography variant="h2">Kyle Ronning</Typography>
        </Box>
        <Box mt={5}>
          <Pixel label={'PG'} size={400} backgroundColor="lightgrey" color="darkgrey" />
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
