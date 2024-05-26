import React from 'react';
import { Link } from 'react-router-dom';
import seasonalColorWheel from '../assets/season-color-wheel.jpeg';
import NavBar from './Nav.js';
import {Footer} from './Footer.js';
import '../css/style.css';


export default function IntroductionPage(props) {
    return (
      <>
        <NavBar />
        <div className="d-flex flex-column text-center quiz-intro w-100 p-0 m-0">
          <div className="text-white fw-semibold">
            <p className='fs-2 px-5 py-4'>
              Find Out Which Colors Reflect Your Unique Style!
            </p>
          </div>
          <div className="text-bubble mx-5 px-5 py-4 rounded-5">
            <p>
              Ever wondered which colors suit your personality and style the best? Our Color Palette Analysis Quiz is designed to help you uncover the perfect hues that complement your unique vibe. Whether you're redecorating your home, revamping your wardrobe, or just curious, this quiz will guide you to your ideal color palette.
            </p>
          </div>
          <div className="text-white pt-4 px-5">
            <p>
            Simply answer a few fun and easy questions about your preferences, style, and personality. The quiz takes less than 5 minutes and provides instant results tailored just for you!
            </p>
          </div>
          <div className="py-4">
            <img src={seasonalColorWheel} />
          </div>
          <div className="ready-statement text-white pt-4 fs-5">
            <p>
              Ready to discover your perfect colors? Click below to start the quiz and find out!
            </p>
          </div>
          <div className="pb-4">
            <Link to="/palette-analysis/quiz"><button className="begin-quiz fs-3 px-5 py-2">
                Begin Quiz
              </button></Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }