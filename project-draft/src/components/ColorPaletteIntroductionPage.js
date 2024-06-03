
import React from 'react';
import { Link } from 'react-router-dom';
import seasonalColorWheel from '../assets/season-color-wheel.jpeg';
import NavBar from './Nav.js';
import {Footer} from './Footer.js';
import '../index.css';


export default function IntroductionPage(props) {
  const { currentUser } = props
  
    return (
      <>
      <NavBar currentUser={currentUser} />
        <main>
          <div className="d-flex flex-column text-center quiz-intro w-100 pt-5 mt-5">
            <div div className="text-white fw-semibold">
              <p className="fs-2 px-5 py-4 pt-2">
                Find Out Which Colors Reflect Your Unique Style!
              </p>
            </div>
            <div className="d-flex flex-column justify-content-center rounded-5 bg-light text-bubble">
              <p>
                Ever wondered which colors suit your personality and style the best?
              </p>
              <p>
                Our Color Palette Analysis Quiz is designed to help you uncover the perfect hues that complement your unique vibe.
              </p>
              <p>
                Whether you're redecorating your home, revamping your wardrobe, or just curious, this quiz will guide you to your ideal color palette.
              </p>
            </div>
            <div className="text-white pt-4 px-5 text-size">
              <p>
                Simply answer a few fun and easy questions about your preferences, style, and personality. The quiz takes less than 5 minutes and provides instant results tailored just for you!
              </p>
            </div>
            <div className="py-4 mx-10 px-5">
              <img className="responsive-image" src={seasonalColorWheel} alt="Seasonal Color Wheel" />
            </div>
            <div className="ready-statement text-white pt-4 px-5 text-size">
              <p>
                Ready to discover your perfect colors? Click below to start the quiz and find out!
              </p>
            </div>
            <div className="pb-4">
              <Link to="/palette-analysis/quiz">
                <button className="fs-3 px-5 py-2 all-buttons rounded">
                  Begin Quiz
                </button>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </>

    );
  }