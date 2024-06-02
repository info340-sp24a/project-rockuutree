import React, { useState } from 'react';
import NavBar from './Nav.js';
import { Footer } from './Footer.js';
import { StyleCard } from './StyleCardList.js';
import Jeans from '../assets/jeansGraphic.jpg';
import Tops from '../assets/typeofTops.jpg';
import Shoes from '../assets/typeofShoes.jpg';
import Colors from '../assets/colorCategories.jpg';
import Clothes from '../assets/typeofClothes.jpg';
import Outerwear from '../assets/typeofOuterwear.jpg';
import Accessories from '../assets/typeofAccessories.jpg';
import { RelatedStyles } from './StyleCardDetailPage';

const questions = [
    {
        id: 1,
        question: 'How do you like your Jeans to fit?',
        options: ['Skinny', 'Slim', 'Straight', 'Relaxed', 'Baggy'],
        image: Jeans 
    },
    {
        id: 2,
        question: 'How do you like your Tops to fit?',
        options: ['Cropped', 'Fitted', 'Regular', 'Relaxed', 'Oversized'],
        image: Tops 
    },
    {
        id: 3,
        question: 'What kind of Shoes do you generally reach for?',
        options: ['Sneakers', 'Loafers', 'Trainers', 'Thin', 'Bulky'],
        image: Shoes 
    },
    {
        id: 4,
        question: 'What type of colors do you like wearing?',
        options: ['Monochrome', 'Earth Tones', 'Pastel', 'Neutral', 'Primary'],
        image: Colors 
    },
    {
        id: 5,
        question: 'What type of Tops do you like?',
        options: ['Sweaters', 'Long Sleeves', 'T-shirts', 'Dress Shirts', 'Hoodies'],
        image: Clothes 
    },
    {
        id: 6,
        question: 'What is your preferred outerwear style?',
        options: ['Denim jacket', 'Leather jacket', 'Blazer', 'Parka', 'Work Jacket'],
        image: Outerwear 
    },
    {
        id: 7,
        question: 'Which accessories do you often wear?',
        options: ['Statement Jewelry', 'Minimal Jewelry', 'Hats', 'A Bag', 'Nothing'],
        image: Accessories 
    },
];

const calculateResult = (quizAnswers, styleData) => {
    const scoreStyle = (style, answers) => {
        let score = 0;
        style.style_options.forEach(option => {
            if (answers.includes(option)) {
                score += 1;
            }
        });
        return score;
    };

    let bestMatch = null;
    let highestScore = 0;
    styleData.forEach(style => {
        const score = scoreStyle(style, quizAnswers);
        if (score > highestScore) {
            highestScore = score;
            bestMatch = style;
        }
    });
    return bestMatch;
};

export function StyleQuiz(props) {
    const { style_data } = props;
    const [step, setStep] = useState(0);
    const [quizAnswers, setQuizAnswers] = useState([]);
    const [quizStarted, setQuizStarted] = useState(false);
    const [quizFinished, setQuizFinished] = useState(false);
    const [resultStyle, setResultStyle] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleStartQuiz = () => {
        setQuizStarted(true);
    };

    const handleAnswer = (answer) => {
        setSelectedAnswer(answer);
    };

    const handleNext = () => {
        const newAnswers = [...quizAnswers];
        newAnswers[step] = selectedAnswer;
        setQuizAnswers(newAnswers);
        setSelectedAnswer(null);
        if (step < questions.length - 1) {
            setStep(step + 1);
        } else {
            const result = calculateResult(newAnswers, style_data);
            setResultStyle(result);
            setQuizFinished(true);
        }
    };

    const handleBack = () => {
        if (step > 0) {
            setStep(step - 1);
            const newAnswers = [...quizAnswers];
            newAnswers.pop();
            setQuizAnswers(newAnswers);
            setSelectedAnswer(newAnswers[step - 1] || null);
        }
    };

    return (
        <div>
            <NavBar />
            <main>
                {!quizStarted ? (
                    <div>
                        <button onClick={handleStartQuiz}>Start Quiz</button>
                    </div>
                ) : quizFinished ? (
                    <div>
                        <h1>Your Style: {resultStyle.Style_Name}</h1>
                        <div className='style-card'>
                            <StyleCard style_data={resultStyle} />
                            <h2 className="style-page-deatil-subheader">Related Styles</h2>
                            <RelatedStyles relatedStyles={resultStyle.Related_Styles} styleData={style_data} />
                        </div>
                    </div>
                ) : (
                    <div>
                        <h2>{questions[step].question}</h2>
                        <img src={questions[step].image} alt="question illustration" />
                        <div>
                            {questions[step].options.map((option, index) => (
                                <button key={index} onClick={() => handleAnswer(option)} style={{ backgroundColor: selectedAnswer === option ? '#9A8C98' : '' }}>
                                    {option}
                                </button>
                            ))}
                        </div>
                        <div>
                            {step > 0 && <button onClick={handleBack}>Back</button>}
                            <button onClick={handleNext} disabled={!selectedAnswer}>Next</button>
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}

export default StyleQuiz;
