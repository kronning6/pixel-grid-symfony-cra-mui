import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '../../components/mui/Box/Box';
import Button from '../../components/mui/Button/Button';
import Stack from '../../components/mui/Stack/Stack';
import Typography from '../../components/mui/Typography/Typography';

const Admin = (): JSX.Element => {
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
          <Typography variant="h2">Admin</Typography>
        </Box>
        <Box mt={5} textAlign="center">
          TODO - Add Pixels
        </Box>
        <Box mt={2} textAlign="center">
          TODO - Add User
        </Box>
        <Box mt={2} textAlign="center">
          TODO - Delete User
        </Box>
        <Stack mt={5} spacing={1}>
          <Button variant="outlined" color="primary" size="large" onClick={() => navigate('/')}>
            Enter the Grid
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Admin;
