import React, { useState, useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './components/Homepage';
import Profile from './components/Profile';
import Profile from './components/Profile';
import StylePage from './components/StylePage';
import StyleQuiz from './components/StyleQuiz';
import ColorPaletteQuiz from './components/ColorPalette';
import ColorResultsPage from './components/ColorPaletteResults';
import IntroductionPage from './components/ColorPaletteIntroductionPage';
import SignInPage from './components/SignIn';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBvjZczGvaXO5GHoQvLZDRGy1Qk77UtFo8",
  authDomain: "styleuinfo-83ba6.firebaseapp.com",
  projectId: "styleuinfo-83ba6",
  storageBucket: "styleuinfo-83ba6.appspot.com",
  appId: "1:448592135763:web:812d5fe62b999dd99068a6"
};

initializeApp(firebaseConfig);

function App(props) {
  const { style_data } = props;
  const [userColorPalette, setUserColorPalette] = useState(null);

  function changeUserColorPalette(colorPalette) {
    setUserColorPalette(colorPalette);
  }
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/styles"
          element={currentUser ? <StylePage style_data={style_data} /> : <Navigate to="/sign-in" />}
        />
        <Route
          path="/style-quiz"
          element={currentUser ? <StyleQuiz /> : <Navigate to="/sign-in" />}
        />
        <Route
          path="/profile"
          element={currentUser ? <Profile /> : <Navigate to="/sign-in" />}
        />
        <Route
          path="/sign-in"
          element={<SignInPage currentUser={currentUser} loginCallback={setCurrentUser} />}
        />

        <Route path="/palette-analysis/quiz" element={<ColorPaletteQuiz changeUserColorPalette={changeUserColorPalette}/>} />
        <Route path="/palette-analysis" element={<IntroductionPage />} />
        <Route path="/palette-analysis/results" element={<ColorResultsPage result={userColorPalette}/>} />
      </Routes>
    </Router>
  );
}

export default App;