import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage';
import Profile from './components/Profile';
import StylePage from './components/StylePage';
import StyleQuiz from './components/StyleQuiz';
import ColorPaletteQuiz from './components/ColorPalette';
import ColorResultsPage from './components/ColorPaletteResults';
import IntroductionPage from './components/ColorPaletteIntroductionPage';


function App(props) {
  const {style_data} = props;
  const [userColorPalette, setUserColorPalette] = useState(null);

  function changeUserColorPalette(colorPalette) {
    setUserColorPalette(colorPalette);
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/styles" element={<StylePage style_data={style_data} />} />
        <Route path="/style-quiz" element={<StyleQuiz />} />
        <Route path="/palette-analysis/quiz" element={<ColorPaletteQuiz changeUserColorPalette={changeUserColorPalette}/>} />
        <Route path="/palette-analysis" element={<IntroductionPage />} />
        <Route path="/palette-analysis/results" element={<ColorResultsPage result={userColorPalette}/>} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;