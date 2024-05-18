import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homepage/homepage';
import PaletteAnalysisPage from './components/colorpalette/colorpalette';
// import StyleQuiz from './components/stylequiz/StyleQuiz';
import StyleQuizPage from './components/stylequiz/StyleQuiz';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/style-quiz" element={<StyleQuizPage />} />
        <Route path="/palette-analysis" element={<PaletteAnalysisPage />} />
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/styles" element={<StyleQuiz />} /> */}

      </Routes>
    </Router>
  );
}

export default App;