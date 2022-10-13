import React from 'react';
import Box from '../mui/Box/Box';
import Typography from '../mui/Typography/Typography';

const Profile = (): JSX.Element => {
  return (
    <Box
      sx={{
        backgroundColor: 'orange',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
      }}
    >
      <Typography variant="h1">Profile</Typography>
    </Box>
  );
};

export default Profile;
