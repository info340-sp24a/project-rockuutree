import React from 'react';
import '../index.css';
import NavBar from './Nav';
import { Footer } from './Footer';

const StyleQuiz = () => {
    return (
        <>
            <NavBar />
            <main>
                <p class="text-center h1 fw-semibold fs-1">Style Quiz</p>
                <div class="back w-75 shadow-sm d-flex flex-column">
                    <div class="position-relative">
                        <p class="h2 text-center">Question 1</p>
                        <span class="position-absolute top-0 start-0 material-symbols-outlined">arrow_back</span>
                    </div>
                    <div class="text-center">
                        <img class="img-fluid rounded" src="src/images/fashion-picture.webp" alt="two models posing with clothes analyzation"/>
                    </div>
                    <div>
                        <p class="fs-4 text-center">How do you like your clothes to fit?</p>
                    </div>
                    <div class="choices">
                        <div class="form-check selection rounded px-5 py-2">
                            <input class="form-check-input" type="radio" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                            Snug
                            </label>
                        </div>
                        <div class="form-check selection rounded px-5 py-2">
                            <input class="form-check-input" type="radio" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                            Loose
                            </label>
                        </div>
                        <div class="form-check selection rounded px-5 py-2">
                            <input class="form-check-input" type="radio" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                            Fitted
                            </label>
                        </div>
                        <div class="form-check selection rounded px-5 py-2">
                            <input class="form-check-input" type="radio" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                            Oversized
                            </label>
                        </div>
                        <div class="form-check selection rounded px-5 py-2">
                            <input class="form-check-input" type="radio" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                            Slim-fit
                            </label>
                        </div>
                    </div>
                    <div class="quiz-bottom">
                        <p class="h5">Next</p>
                        <span class="material-symbols-outlined">arrow_forward</span>
                        
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default StyleQuiz;