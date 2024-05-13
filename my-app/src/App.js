import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homepage/homepage';
// import StyleQuizPage from './components/styles-page/StyleCardList';
// import PaletteAnalysisPage from './components/PaletteAnalysisPage';
import StyleQuiz from './components/stylequiz/StyleQuiz';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/style-quiz" element={<StyleQuizPage />} /> */}
        {/* <Route path="/palette-analysis" element={<PaletteAnalysisPage />} /> */}
        <Route path="/styles" element={<StyleQuiz />} />
      </Routes>
    </Router>
  );
}

export default App;