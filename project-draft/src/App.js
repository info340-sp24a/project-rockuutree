import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage';
import Profile from './components/Profile'; //
import StyleQuiz from './components/StyleQuiz';
import StylePage from './components/StylePage';


function App(props) {
  const {style_data} = props;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/styles" element={<StylePage style_data={style_data} />} />
        {/* ... (other routes) */}
        <Route path="/profile" element={<Profile />} /> {/* Add the profile route */}
      </Routes>
    </Router>
  );
}

export default App;