import React, { useState, useEffect } from 'react';
import NavBar from './Nav.js';
import { Footer } from './Footer.js';
import {StyleCard} from './StyleCardList.js';
import {RelatedStyles} from './StyleCardDetailPage.js';
import Jeans from '../assets/jeansGraphic.jpg';
import Tops from '../assets/typeofTops.jpg';
import Shoes from '../assets/typeofShoes.jpg';
import Colors from '../assets/colorCategories.jpg';
import Clothes from '../assets/typeofClothes.jpg';
import Outerwear from '../assets/typeofOuterwear.jpg';
import Accessories from '../assets/typeofAccessories.jpg';
import { getDatabase, ref, push as firebasePush } from 'firebase/database';


const questions = [
    {
        id: 1,
        question: 'How do you like your Jeans to fit?',
        options: ['Skinny', 'Slim', 'Straight', 'Relaxed', 'Baggy'],
        image: Jeans,
        alt: 'Five different jean styles'
    },
    {
        id: 2,
        question: 'How do you like your Tops to fit?',
        options: ['Cropped', 'Fitted', 'Regular', 'Relaxed', 'Oversized'],
        image: Tops,
        alt: 'Five different shirt styles'
    },
    {
        id: 3,
        question: 'What kind of Shoes do you generally reach for?',
        options: ['Sneakers', 'Loafers', 'Trainers', 'Thin', 'Bulky'],
        image: Shoes,
        alt: 'Different shoe styles'
    },
    {
        id: 4,
        question: 'What type of colors do you like wearing?',
        options: ['Monochrome', 'Earth Tones', 'Pastel', 'Neutral', 'Primary'],
        image: Colors,
        alt: 'Four different color types'
    },
    {
        id: 5,
        question: 'What type of Tops do you like?',
        options: ['Sweaters', 'Long Sleeves', 'T-shirts', 'Dress Shirts', 'Hoodies'],
        image: Clothes,
        alt: 'Many different shirt styles'
    },
    {
        id: 6,
        question: 'What is your preferred outerwear style?',
        options: ['Denim jacket', 'Leather jacket', 'Blazer', 'Parka', 'Work Jacket'],
        image: Outerwear,
        alt: 'Many different outerwear styles'
    },
    {
        id: 7,
        question: 'Which accessories do you often wear?',
        options: ['Statement Jewelry', 'Minimal Jewelry', 'Hats', 'A Bag', 'Nothing'],
        image: Accessories,
        alt: 'Different type of accessories'
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
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [responses, setResponses] = useState([]);
    const [finalResult, setFinalResult] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleResponseChange = (questionId, option) => {
        setResponses(prevResponses => {
            const updatedResponses = [...prevResponses];
            updatedResponses[questionId] = option;
            return updatedResponses;
        });
        setSelectedOption(option);
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex === questions.length - 1) {
            const result = calculateResult(responses, style_data);
            setFinalResult(result);
            saveResultToDatabase(result);
        } else {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
            setSelectedOption(null); // Reset the selected option
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prevIndex => prevIndex - 1);
            setSelectedOption(responses[currentQuestionIndex - 1] || null); // Restore previous selected option
        }
    };

    const handleSubmit = () => {
        const result = calculateResult(responses, style_data);
        setFinalResult(result);
        saveResultToDatabase(result);
    };

    const saveResultToDatabase = (result) => {
        const db = getDatabase();
        const resultsRef = ref(db, 'quizResults');
        firebasePush(resultsRef, result);
    };

    useEffect(() => {
        setSelectedOption(responses[currentQuestionIndex] || null);
    }, [currentQuestionIndex, responses]);

    return (
        <>
            <NavBar />
            <main>
                <p className="text-center h1 fw-semibold fs-1">Style Quiz</p>
                <div className="back w-75 shadow-sm d-flex flex-column">
                    {finalResult ? (
                        <div className="text-center">
                            <div className="position-relative">
                                <p className="h2 fw-bold">Your style is:</p>
                            </div>
                            <div>
                                <img className="img-fluid rounded" src={finalResult.image} alt={finalResult.alt} />
                            </div>
                            <div>
                                <p className="fs-4 fw-bold">{finalResult.Style_Name}</p>
                            </div>
                            <div className='style-quiz-result'>
                            <StyleCard className='style-quiz-main-result'style_data={finalResult} />
                            <h2 className="style-page-deatil-subheader">Related Styles</h2>
                            <RelatedStyles className='style-quiz-related-results' relatedStyles={finalResult.Related_Styles} styleData={style_data} />
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="position-relative">
                                <p className="h2 text-center fw-bold">Question {currentQuestionIndex + 1}</p>
                            </div>
                            <div className="text-center">
                                <img className="question-img" src={questions[currentQuestionIndex].image} alt={questions[currentQuestionIndex].alt} />
                            </div>
                            <div>
                                <p className="fs-4 text-center fw-bold">{questions[currentQuestionIndex].question}</p>
                            </div>
                            <div className="choices row justify-content-center">
                                {questions[currentQuestionIndex].options.map((option, index) => (
                                    <div className="col-md-4 mb-3" key={index}>
                                        <button 
                                            className={`btn-option fw-bold ${selectedOption === option ? 'selected' : ''}`}
                                            onClick={() => handleResponseChange(currentQuestionIndex, option)}
                                        >
                                            {option}
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <div className={`d-flex ${currentQuestionIndex > 0 ? 'justify-content-between' : 'justify-content-end'}`}>
                                {currentQuestionIndex > 0 && (
                                    <div className="quiz-bottom-left">
                                        <button onClick={handlePreviousQuestion} className="bg-transparent border border-0">
                                            <div className="d-flex">
                                                <span className="material-symbols-outlined">arrow_back</span>
                                                <p className="h5 fw-bold">Back</p>
                                            </div>
                                        </button>
                                    </div>
                                )}
                                {currentQuestionIndex < questions.length - 1 && (
                                    <div className="quiz-bottom-right">
                                        <button onClick={handleNextQuestion} className="bg-transparent border border-0">
                                            <div className="d-flex">
                                                <p className="h5 fw-bold">Next</p>
                                                <span className="material-symbols-outlined mb-1">arrow_forward</span>
                                            </div>
                                        </button>
                                    </div>
                                )}
                                {currentQuestionIndex === questions.length - 1 && (
                                    <div className="quiz-bottom-right">
                                        <button onClick={handleSubmit} className="bg-transparent border border-0">
                                            <div className="d-flex">
                                                <p className="h5 fw-bold">Submit</p>
                                                <span className="material-symbols-outlined mb-1">arrow_forward</span>
                                            </div>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}

export default StyleQuiz;