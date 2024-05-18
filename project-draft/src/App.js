import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage';
import Profile from './components/Profile'; //
import StylePage from './components/StylePage';
import StyleQuiz from './components/StyleQuiz';
import ColorPalette from './components/ColorPalette';


function App(props) {
  const {style_data} = props;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/styles" element={<StylePage style_data={style_data} />} />
        <Route path="/style-quiz" element={<StyleQuiz />} />
        <Route path="/palette-analysis" element={<ColorPalette />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;