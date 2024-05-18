import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homepage/homepage';
// import StyleQuizPage from './components/styles-page/StyleCardList';
import PaletteAnalysisPage from './components/colorpalette/colorpalette';
import StyleQuiz from './components/stylequiz/StyleQuiz';
import IntroductionPage from './components/colorpalette/IntroductionPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/style-quiz" element={<StyleQuizPage />} /> */}
        <Route path="/palette-analysis/quiz" element={<PaletteAnalysisPage />} />
        <Route path="/palette-analysis/introduction" element={<IntroductionPage />} />
        <Route path="/styles" element={<StyleQuiz />} />
      </Routes>
    </Router>
  );
}

export default App;