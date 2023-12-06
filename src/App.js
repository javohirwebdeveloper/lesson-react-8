import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Profile from './Profile';
import useLocalStorage from './hooks/useLocalStorage';

const App = () => {
  const [user, setUser] = useLocalStorage('user', null);

  const handleLogout = () => {
    // Clear user from local storage
    setUser(null);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate to="/profile" /> : <Login setUser={setUser} />}
        />
        <Route
          path="/register"
          element={user ? <Navigate to="/profile" /> : <Register setUser={setUser} />}
        />
        <Route
          path="/profile"
          element={
            user ? (
              <Profile user={user} onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route index element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
