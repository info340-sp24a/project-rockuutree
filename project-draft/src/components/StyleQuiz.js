import React, { useState, useEffect } from 'react';
import NavBar from './Nav.js';
import { Footer } from './Footer.js';
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

const results = [
    {
        id: 1,
        title: 'Business',
        keywords: ['Slim', 'Fitted', 'Loafers', 'Monochrome', 'Neutral', 'Sweater', 'Dress Shirt'],
        image: BusinessImage,
        description: "The Business style is polished, professional, and sophisticated, ideal for office environments and formal settings. Think tailored suits, crisp shirts, pencil skirts, blazers, and classic accessories like ties, cufflinks, and leather shoes.",
        alt: 'Business style'
    },
    {
        id: 2,
        title: 'Streetwear',
        keywords: ['Baggy', 'Relaxed', 'Sneakers', 'Neutral', 'Minimal Jewelry', 'Work Jacket', 'Leather Jacket'],
        image: StreetwearImage,
        description: "Streetwear is casual, trendy, and inspired by urban culture, often featuring bold graphics and comfortable fits. Choose graphic tees, hoodies, joggers, sneakers, baseball caps, and oversized outerwear, often incorporating popular brand logos and vibrant patterns.",
        alt: 'Streetwear style'
    },
    {
        id: 3,
        title: 'Opium',
        keywords: ['Relaxed', 'Cropped', 'Regular', 'Long Sleeves', 'Bulky', 'Monochrome', 'Statement Jewelry'],
        image: OpiumImage,
        description: "The Opium style is luxurious, dramatic, and edgy, inspired by high fashion and avant-garde designs. Opt for bold, statement pieces such as velvet blazers, silk blouses, intricate embroidery, dark florals, and unique accessories that stand out.",
        alt: 'Opium style'
    },
    {
        id: 4,
        title: 'Minimalist',
        keywords: ['Straight', 'Regular', 'Sneakers', 'T-shirts', 'Neutral', 'Minimal Jewelry', 'Nothing'],
        image: MinimalistImage,
        description: "The Minimalist style is clean, simple, and understated, focusing on quality over quantity and neutral color palettes. Select well-fitted basics like plain tees, tailored trousers, monochrome outfits, and versatile pieces that can be easily mixed and matched, emphasizing functionality and a sleek look.",
        alt: 'Minimalist Style'
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
            const result = calculateResult(responses);
            setFinalResult(result)
        } else {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
            setSelectedOption(null); // Reset the selected option
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

    useEffect(() => {
        // Reset the selected option when the current question changes
        setSelectedOption(responses[currentQuestionIndex] || null);
    }, [currentQuestionIndex, responses]);


    return (
        <>
             <NavBar currentUser={props.currentUser} />
            <main>
                <p className="text-center h1 fw-semibold fs-1">Style Quiz</p>
                <div className="back w-75 shadow-sm d-flex flex-column">
                    {finalResult ? (
                        <>
                        <div className="text-center">
                            <div className="position-relative">
                                <p className="h2 fw-bold">Your style is:</p>
                            </div>
                            <div>
                                <img className="img-fluid rounded" src={finalResult.image} alt={finalResult.alt} />
                            </div>
                            <div>
                                <p className="fs-4 fw-bold">{finalResult.title}</p>
                            </div>
                            <div className="style-description">
                                <p>{finalResult.description}</p>
                            </div>
                        </div>
                        </>
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
                            <div className="d-flex justify-content-between">
                                {currentQuestionIndex > 0 ? (
                                    <div className="quiz-bottom-left">
                                        <button onClick={handlePreviousQuestion} className="bg-transparent border border-0">
                                            <div className="d-flex">
                                                <span className="material-symbols-outlined">arrow_back</span>
                                                <p className="h5 fw-bold mt-2">Back</p>
                                            </div>
                                        </button>
                                    </div>
                                ) : (
                                    <div></div>
                                )}
                                {currentQuestionIndex < questions.length - 1 && (
                                    <div className="quiz-bottom-right">
                                        <button onClick={handleNextQuestion} className="bg-transparent border border-0">
                                            <div className="d-flex">
                                                <p className="h5 fw-bold mt-2">Next</p>
                                                <span className="material-symbols-outlined mb-1">arrow_forward</span>
                                            </div>
                                        </button>
                                    </div>
                                )}
                                {currentQuestionIndex === questions.length - 1 && (
                                    <div className="quiz-bottom-right">
                                        <button onClick={handleSubmit} className="bg-transparent border border-0">
                                            <div className="d-flex">
                                                <p className="h5 fw-bold mt-2">Submit</p>
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
};

export default StyleQuiz;