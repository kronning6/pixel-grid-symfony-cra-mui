import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThemeProvider from './components/mui/ThemeProvider/ThemeProvider';
import Dashboard from './components/Dashboard/Dashboard';
import Grid from './components/Grid/Grid';
import Profile from './components/Profile/Profile';

const App = (): JSX.Element => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Dashboard routes */}
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Grid />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          {/* End of Dashboard routes */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
