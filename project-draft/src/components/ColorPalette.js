
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './Nav.js';
import {Footer} from './Footer.js';
import hairColor from '../assets/hair-color.jpeg';
import eyeColor from '../assets/eyes.jpeg';
import veins from '../assets/veins.jpeg';
import jewelry from '../assets/jewelry.jpeg';
import tanning from '../assets/tanning.jpeg';
import colors from '../assets/colors.jpeg';
import '../css/style.css';


const ColorPaletteQuiz = (props) => {
  const { changeUserColorPalette } = props;
  return (
    <div>
      <NavBar />
      <main>
        <Quiz changeUserColorPalette={changeUserColorPalette}/>
      </main>
      <Footer />
    </div>
  );
};

function Quiz(props) {
  const { changeUserColorPalette } = props;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const options = {
    hairColor: ['Blonde', 'Brown', 'Black', 'Red'],
    eyeColor: ['Blue', 'Green', 'Brown', 'Hazel'],
    skinUndertone: ['Cool', 'Warm', 'Neutral'],
    jewelryPreference: ['Silver', 'Gold'],
    tanningAbility: ['Burns easily and rarely tans', 'Burns then tans', 'Tans easily and rarely burns', 'Doesn\'t burn or tan much'],
    comfortableColors: ['Pastels and light colors', 'Earth tones and muted colors', 'Bright and bold colors', 'Deep and rich colors']
  };

  const questionData = [
    { questionNumber: "1", question: "What is your natural hair color?", image: hairColor, alt:"Brown, blonde, red, and black hair", options: options.hairColor },
    { questionNumber: "2", question: "What is your eye color?", image: eyeColor, alt:"Blue, green, brown, and hazel eyes", options: options.eyeColor },
    { questionNumber: "3", question: "Which best describes your skin undertone?", image: veins, alt: "Cool, neutral, and warm undertones", options: options.skinUndertone },
    { questionNumber: "4", question: "Which type of jewelry looks best on you?", image: jewelry, alt: "Gold and silver jewelry", options: options.jewelryPreference },
    { questionNumber: "5", question: "When you tan, your skin:", image: tanning, alt: "Two people tanning on beach", options: options.tanningAbility },
    { questionNumber: "6", question: "What colors do you feel most comfortable wearing?", image: colors, alt: "A wide selection of colors", options: options.comfortableColors }
  ];

  const handleAnswer = (questionNumber, answer) => {
    setAnswers({ ...answers, [questionNumber]: answer });
  };

  const back = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const next = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const submit = () => {
    const result = calculateResult(answers)[0];
    console.log('Final result:', result);
    changeUserColorPalette(result)
  };

  const calculateResult = (answers) => {
    const scores = {
      LightSpring: 0,
      WarmSpring: 0,
      ClearSpring: 0,
      CoolWinter: 0,
      ClearWinter: 0,
      DeepWinter: 0,
      SoftAutumn: 0,
      WarmAutumn: 0,
      DeepAutumn: 0,
      CoolSummer: 0,
      LightSummer: 0,
      SoftSummer: 0
    };

    const scoring = {
      "1": {
        "Blonde": ["LightSpring", "WarmSpring", "ClearSpring"],
        "Brown": ["LightSpring", "WarmSpring", "ClearSpring", "CoolWinter", "ClearWinter", "DeepWinter", "SoftAutumn", "WarmAutumn", "DeepAutumn", "CoolSummer", "LightSummer", "SoftSummer"],
        "Black": ["CoolWinter", "ClearWinter", "DeepWinter"],
        "Red": ["WarmSpring", "ClearSpring", "SoftAutumn", "WarmAutumn", "DeepAutumn"]
      },
      "2": {
        "Blue": ["CoolWinter", "ClearWinter"],
        "Green": ["WarmSpring", "ClearSpring", "SoftAutumn", "WarmAutumn"],
        "Brown": ["LightSpring", "WarmSpring", "ClearSpring", "CoolWinter", "ClearWinter", "DeepWinter", "SoftAutumn", "WarmAutumn", "DeepAutumn", "CoolSummer", "LightSummer", "SoftSummer"],
        "Hazel": ["WarmSpring", "ClearSpring", "SoftAutumn", "WarmAutumn", "CoolWinter", "ClearWinter"]
      },
      "3": {
        "Cool": ["CoolWinter", "ClearWinter", "CoolSummer"],
        "Warm": ["WarmSpring", "ClearSpring", "SoftAutumn", "WarmAutumn"],
        "Neutral": ["LightSpring", "WarmSpring", "ClearSpring", "CoolWinter", "ClearWinter", "DeepWinter", "SoftAutumn", "WarmAutumn", "DeepAutumn", "CoolSummer", "LightSummer", "SoftSummer"]
      },
      "4": {
        "Silver": ["CoolWinter", "ClearWinter"],
        "Gold": ["WarmSpring", "ClearSpring", "SoftAutumn", "WarmAutumn"]
      },
      "5": {
        "Burns easily and rarely tans": ["CoolWinter", "ClearWinter"],
        "Burns then tans": ["WarmSpring", "ClearSpring"],
        "Tans easily and rarely burns": ["LightSummer", "SoftSummer", "WarmAutumn", "DeepAutumn"],
        "Doesn't burn or tan much": ["LightSpring", "WarmSpring", "ClearSpring", "CoolWinter", "ClearWinter", "DeepWinter", "SoftAutumn", "WarmAutumn", "DeepAutumn", "CoolSummer", "LightSummer", "SoftSummer"]
      },
      "6": {
        "Pastels and light colors": ["LightSpring", "ClearSpring", "LightSummer", "SoftSummer"],
        "Earth tones and muted colors": ["SoftAutumn", "WarmAutumn", "DeepAutumn"],
        "Bright and bold colors": ["WarmSpring", "ClearSpring", "CoolWinter", "ClearWinter"],
        "Deep and rich colors": ["WarmSpring", "DeepAutumn", "DeepWinter"]
      }
    };

    for (const question in answers) {
      const answer = answers[question];
      const categories = scoring[question][answer];
      
      categories.forEach(category => scores[category]++);
    }

    const maxScore = Math.max(...Object.values(scores));
    const finalCategories = Object.keys(scores).filter(category => scores[category] === maxScore);
    
    return finalCategories;
  };

  const renderQuestion = () => {
    const question = questionData[currentQuestion];
    return (
      <Question 
        questionNumber= {question.questionNumber} 
        question= {question.question} 
        image= {question.image} 
        alt = {question.alt}
        options= {question.options} 
        back= {back} 
        next= {next} 
        handleAnswer= {handleAnswer} 
        selectedAnswer= {answers[question.questionNumber]} 
        submit= {submit} 
      />
    );
  };

  return (
    <>
      <p className="text-center h1 fw-semibold fs-1">Palette Analysis</p>
      {renderQuestion()}
    </>
  );
}

function Question({ questionNumber, question, image, alt, options, back, next, handleAnswer, selectedAnswer, submit }) {
  const arrOfOptions = options.map((option, index) => (
    <div className="col-md-4" key={index}>
      <div className="form-check selection rounded px-5 py-2 my-2 text-size">
        <input 
          className="form-check-input" 
          type="radio" 
          name={`question-${questionNumber}`} 
          id={`${questionNumber}-${index}`} 
          value={option} 
          checked={selectedAnswer === option}
          onChange={() => handleAnswer(questionNumber, option)} 
        />
        <label className="form-check-label" htmlFor={`${questionNumber}-${index}`}>{option}</label>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="back d-flex flex-column question-box-size shadow-lg">
        <div className="position-relative">
          <p className="h2 text-center">{"Question " + questionNumber}</p>
        </div>
        <div className="text-center px-3">
          <img className="img-fluid rounded quiz-image border border-5 border-white" src={image} alt={alt}/>
        </div>

        <div>
          <p className="text-center quiz-question">{question}</p>
        </div>

        <div className="row justify-content-center px-5 choices">
          {arrOfOptions}
        </div>
        <div className='d-flex justify-content-between'>
          {questionNumber > "1" ? (
            <div className="quiz-bottom-left">
            <button onClick={back} className="bg-transparent border border-0">
              <div className="d-flex align-items-center">
                <span className="material-symbols-outlined quiz-question">arrow_back</span>
                <p className="h5 mt-2 quiz-question">Back</p>
              </div>
            </button>
            </div>
          ) : (
            <div></div>
          )}
          {questionNumber === "6" ? (
            <Link to="/palette-analysis/results">
              <div className="center">
                <button onClick={submit} className="rounded px-5 py-2 all-buttons rounded">Submit</button>
              </div>
            </Link>
          ) : (
            <div className="quiz-bottom-right">
              <button onClick={next} className="bg-transparent border border-0">
                <div className="d-flex align-items-center">
                  <p className="h5 mt-2 quiz-question">Next</p>
                  <span className="material-symbols-outlined quiz-question">arrow_forward</span>
                </div>
              </button>
            </div>
          )}
          </div>
      </div>
    </div>
  );
}

export default ColorPaletteQuiz;
