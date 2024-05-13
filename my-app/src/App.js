import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homepage/homepage';
// import StyleQuizPage from './components/StyleQuizPage';
// import PaletteAnalysisPage from './components/PaletteAnalysisPage';
// import StylesPage from './components/StylesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/style-quiz" element={<StyleQuizPage />} />
        <Route path="/palette-analysis" element={<PaletteAnalysisPage />} />
        <Route path="/styles" element={<StylesPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;