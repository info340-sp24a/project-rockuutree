import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homepage/Homepage';
import Profile from './components/profile/Profile'; //
import StyleQuiz from './components/stylequiz/StyleQuiz';
import StylePage from './components/StylePages/StylePage';


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