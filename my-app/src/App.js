import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homepage/homepage';
import Profile from './components/profile/profile'; // Import the Profile component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* ... (other routes) */}
        <Route path="/login" element={<Profile />} /> {/* Add the profile route */}
      </Routes>
    </Router>
  );
}

export default App;