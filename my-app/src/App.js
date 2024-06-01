import React from 'react';
import logo from './logo.svg';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homepage/homepage';
// import StyleQuizPage from './components/styles-page/StyleCardList';
// import PaletteAnalysisPage from './components/PaletteAnalysisPage';
import StyleQuiz from './components/stylequiz/StyleQuiz';
import StylePage from './components/StylePages/StylePage.js';
import { StyleCardDetailPage } from './components/StylePages/StyleCardDetailPage.js';
=======
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homepage/homepage';
import PaletteAnalysisPage from './components/colorpalette/colorpalette';
// import StyleQuiz from './components/stylequiz/StyleQuiz';
import StyleQuizPage from './components/stylequiz/StyleQuiz';
>>>>>>> thien

function App(props) {
  const {style_data} = props;
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/style-quiz" element={<StyleQuizPage />} />
        <Route path="/palette-analysis" element={<PaletteAnalysisPage />} /> */}
        <Route path="/styles" element={<StylePage style_data={style_data} />} />
        <Route path="/styles/:styleName" element={<StyleCardDetailPage style_data={style_data} />} />
      </Routes>
    </Router>
    
    // <StylePage style_data={style_data} />
  );
}

=======
      <Route path="/style-quiz" element={<StyleQuizPage />} />
        <Route path="/palette-analysis" element={<PaletteAnalysisPage />} />
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/styles" element={<StyleQuiz />} /> */}

      </Routes>
    </Router>
  );
}

>>>>>>> thien
export default App;