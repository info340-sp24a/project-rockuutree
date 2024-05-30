import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homepage/homepage';
// import StyleQuizPage from './components/styles-page/StyleCardList';
// import PaletteAnalysisPage from './components/PaletteAnalysisPage';
import StyleQuiz from './components/stylequiz/StyleQuiz';
import StylePage from './components/StylePages/StylePage.js';

function App(props) {
  const {style_data} = props;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/style-quiz" element={<StyleQuizPage />} />
        <Route path="/palette-analysis" element={<PaletteAnalysisPage />} /> */}
        <Route path="/styles" element={<StylePage style_data={style_data} />} />
      </Routes>
    </Router>
    
    // <StylePage style_data={style_data} />
  );
}

export default App;