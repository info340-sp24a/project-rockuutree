import React, { useState } from 'react';
import NavBar from './Nav';
import { Footer } from './Footer';
import Jeans from '../assets/jeansGraphic.jpg';
import Tops from '../assets/typeofTops.jpg';
import Shoes from '../assets/typeofShoes.jpg';
import Colors from '../assets/colorCategories.jpg';
import Clothes from '../assets/typeofClothes.jpg';
import Outerwear from '../assets/typeofOuterwear.jpg';
import Accessories from '../assets/typeofAccessories.jpg';
import BusinessImage from '../assets/businessOutfit.jpg';
import StreetwearImage from '../assets/streetwearOutfit.jpg';
import OpiumImage from '../assets/opiumOutfit.jpg';
import MinimalistImage from '../assets/minimalistOutfit.jpg';

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

const results = [
    {
        id: 1,
        title: 'Business',
        keywords: ['Slim', 'Fitted', 'Loafers', 'Monochrome', 'Neutral', 'Sweater', 'Dress Shirt'],
        image: BusinessImage
    },
    {
        id: 2,
        title: 'Streetwear',
        keywords: ['Baggy', 'Relaxed', 'Sneakers', 'Neutral', 'Minimal Jewelry', 'Work Jacket', 'Leather Jacket'],
        image: StreetwearImage
    },
    {
        id: 3,
        title: 'Opium',
        keywords: ['Relaxed', 'Cropped', 'Regular', 'Long Sleeves', 'Bulky', 'Monochrome', 'Statement Jewelry'],
        image: OpiumImage
    },
    {
        id: 4,
        title: 'Minimalist',
        keywords: ['Straight', 'Regular', 'Sneakers', 'T-shirts', 'Neutral', 'Minimal Jewelry', 'Nothing'],
        image: MinimalistImage
    },
];

const calculateResult = (responses) => {
    const resultPoints = new Array(results.length).fill(0);

    responses.forEach((response) => {
        results.forEach((result, resultIndex) => {
            if (result.keywords.includes(response)) {
                resultPoints[resultIndex] += 1;
            }
        });
    });

    const maxIndex = resultPoints.indexOf(Math.max(...resultPoints));
    return results[maxIndex];
};

const StyleQuiz = (props) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [responses, setResponses] = useState([]);
    const [finalResult, setFinalResult] = useState(null);

    const handleResponseChange = (questionId, option) => {
        setResponses(prevResponses => {
            const updatedResponses = [...prevResponses];
            updatedResponses[questionId] = option;
            return updatedResponses;
        });
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex === questions.length - 1) {
            const result = calculateResult(responses);
            setFinalResult(result);
        } else {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prevIndex => prevIndex - 1);
        }
    };

    const handleSubmit = () => {
        const result = calculateResult(responses);
        setFinalResult(result);
    };

    return (
        <>
             <NavBar currentUser={props.currentUser} />
            <main>
                <p className="text-center h1 fw-semibold fs-1">Style Quiz</p>
                <div className="back w-75 shadow-sm d-flex flex-column">
                    {finalResult ? (
                        <>
                            <div className="position-relative">
                                <p className="h2 text-center">Your style is:</p>
                            </div>
                            <div className="text-center">
                                <img className="img-fluid rounded" src={finalResult.image} alt={finalResult.title} />
                            </div>
                            <div>
                                <p className="fs-4 text-center fw-bold">{finalResult.title}</p>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="position-relative">
                                <p className="h2 text-center">Question {currentQuestionIndex + 1}</p>
                                {currentQuestionIndex > 0 && (
                                    <span className="position-absolute top-0 start-0 material-symbols-outlined" onClick={handlePreviousQuestion}>arrow_back</span>
                                )}
                            </div>
                            <div className="text-center">
                                <img className="img-fluid rounded" src={questions[currentQuestionIndex].image} alt={`Question ${currentQuestionIndex + 1}`} />
                            </div>
                            <div>
                                <p className="fs-4 text-center">{questions[currentQuestionIndex].question}</p>
                            </div>
                            <div className="choices row justify-content-center">
                                {questions[currentQuestionIndex].options.map((option, index) => (
                                    <div className="col-md-4 mb-3" key={index}>
                                        <div className="form-check selection rounded px-5 py-2">
                                            <input 
                                                className="form-check-input" 
                                                type="radio" 
                                                name={`question-${currentQuestionIndex}`} 
                                                id={`option-${index}`} 
                                                value={option} 
                                                onChange={() => handleResponseChange(currentQuestionIndex, option)}
                                            />
                                            <label className="form-check-label" htmlFor={`option-${index}`}>
                                                {option}
                                            </label>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {currentQuestionIndex === questions.length - 1 && (
                                <div className="quiz-bottom" onClick={handleSubmit}>
                                    <p className="h5 fw-bold">Submit</p>
                                    <span className="material-symbols-outlined mb-1">arrow_forward</span>
                                </div>
                            )}
                            {currentQuestionIndex < questions.length - 1 && (
                                <div className="quiz-bottom" onClick={handleNextQuestion}>
                                    <p className="h5 fw-bold">Next</p>
                                    <span className="material-symbols-outlined mb-1">arrow_forward</span>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
};

export default StyleQuiz;
