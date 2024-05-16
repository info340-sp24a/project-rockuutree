import React from 'react';
import { useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import '../../css/style.css';
import hairColor from '../../assets/hair-color.jpeg';
import eyeColor from '../../assets/eyes.jpeg';
import veins from '../../assets/veins.jpeg';
import jewelry from '../../assets/veins.jpeg';
import tanning from '../../assets/tanning.jpeg';
import colors from '../../assets/colors.jpeg';

const ColorPalette = (props) => {
  return (
    <div>
      <nav>
        <div className="logo">
            <a href="#">styleU</a>
        </div>
        <div className="components_header text-center">
          <a href="/">Home</a>
          <a href="style-quiz.html">Style Quiz</a>
          <a href="palette-analysis-index.html">Color Analysis Quiz</a>
          <a href="style-page.html">Styles</a>
        </div>
        <div className="hamburger-menu" aria-label="Toggle Menu">
            <a href="#"><span className="material-symbols-outlined">menu</span></a>
        </div>
      </nav>

      <main>
        <Quiz />
      </main>

      <footer>
        <div className="footer-content">
          <p>&copy; 2023 styleU. All rights reserved.</p>
          <ul className="footer-links">
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </footer>
    </div>
  )
};

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  function back() {
    setCurrentQuestion(currentQuestion - 1);
  }

  function next() {
    setCurrentQuestion(currentQuestion + 1);
  }

  const options = {
    hairColor: ['Blonde', 'Brown', 'Black', 'Red'],
    eyeColor: ['Blue', 'Green', 'Brown', 'Hazel'],
    skinUndertone: ['Cool', 'Warm', 'Neutral'],
    overallSeason: ['Spring', 'Summer', 'Autumn', 'Winter'],
    jewelryPreference: ['Silver', 'Gold', 'Both'],
    comfortableColors: ['Pastels and light colors', 'Earth tones and muted colors', 'Bright and bold colors', 'Deep and rich colors'],
    tanningAbility: ['Burns easily and rarely tans', 'Burns then tans', 'Tans easily and rarely burns', 'Doesn\'t burn or tan much'],
    favoriteSeason: ['Spring', 'Summer', 'Autumn', 'Winter'],
  };

  const questionData = [
    { questionNumber: "1", question: "What is your natural hair color?", image: hairColor, options: options.hairColor },
    { questionNumber: "2", question: "What is your eye color?", image: eyeColor, options: options.eyeColor },
    { questionNumber: "3", question: "What is your skin undertone?", image: veins, options: options.skinUndertone },
    { questionNumber: "4", question: "Which type of jewelry looks best on you?", image: jewelry, options: options.jewelryPreference },
    { questionNumber: "5", question: "When you tan, how does your skin react?", image: tanning, options: options.tanningAbility },
    { questionNumber: "6", question: "What colors do you reach for?", image: colors, options: options.comfortableColors }
  ]

  function renderQuestion() {
    const question = questionData[currentQuestion];
    return (
      <Question questionNumber={question.questionNumber} question={question.question} image={question.image} options={question.options} back={back} next={next}/>
    );
  };

  return (
    <>
        <p className="text-center h1 fw-semibold fs-1">Palette Analysis</p>
        {renderQuestion()}
    </>
  );
}

function Question(props) {
  const { questionNumber, question, image, options, back, next } = props;
  const newThing = options.map((option) => { 
    const transformed = (
    <div className="col-md-4">
      <div className="form-check selection rounded px-5 py-2 my-2">
        <input className="form-check-input" type="radio" name="veinColor" id="green" value="green"/>
        <label className="form-check-label" htmlFor="green">{option}</label>
      </div>
    </div>)
    return transformed;
  })

  return (
    <div>
      <div className="back w-75 shadow-sm d-flex flex-column">
        <div className="position-relative">
          <p className="h2 text-center">{"Question " + questionNumber}</p>
          <div>
            {questionNumber === "1" ? (
              ""
            ) : (
              <span onClick={back} className="position-absolute top-0 start-0 material-symbols-outlined">arrow_back</span>
            )}
          </div>
        </div>

        <div className="text-center">
          <img className="img-fluid rounded" src={image} alt="Blue, green and purple vein colors"/>
        </div>

        <div>
          <p className="fs-4 text-center">{question}</p>
        </div>

        <div className="choices row justify-content-center">
          {newThing}
          <div>
            {questionNumber === "6" ? (
              <div className="center">
                <button className="submit-button rounded px-5 py-2 my-2">Submit</button>
              </div>
            ) : (
              <div>
                <div className="quiz-bottom">
                  <p className="h5 mt-2">Next</p>
                  <span onClick={next} className="material-symbols-outlined">arrow_forward</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function IntroductionPage(props) {
  return (
    <div>
      
    </div>
  );
}

export default ColorPalette;
