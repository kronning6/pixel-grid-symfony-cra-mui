import React from 'react';
import Box from '../../components/mui/Box/Box';

const Admin = (): JSX.Element => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
      }}
    >
      <Box>Admin - Add Pixels</Box>
      <Box>Admin - Add User</Box>
      <Box>Admin - Delete User</Box>
    </Box>
  );
};

export default Admin;
