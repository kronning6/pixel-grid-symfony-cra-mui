import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThemeProvider from './components/mui/ThemeProvider/ThemeProvider';
import Dashboard from './components/Dashboard/Dashboard';

const App = (): JSX.Element => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Dashboard routes */}
          <Route path="/" element={<Dashboard />}>
            <Route index element={<div>Grid</div>} />
            <Route path="profile" element={<div>Profile</div>} />
          </Route>
          {/* End of Dashboard routes */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
