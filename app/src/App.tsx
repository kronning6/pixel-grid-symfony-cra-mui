import React from 'react';
import { store } from './core/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './features/Admin/Admin';
import Dashboard from './features/Dashboard/Dashboard';
import Grid from './features/Grid/Grid';
import Profile from './features/Profile/Profile';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Dashboard routes */}
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Grid />} />
            <Route path="admin" element={<Admin />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          {/* End of Dashboard routes */}
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
