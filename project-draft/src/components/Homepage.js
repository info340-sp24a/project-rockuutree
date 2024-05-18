import React, { useState } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import techImage from '../assets/tech.jpeg';
import hoodieImage from '../assets/hoodie.png';
import Lottie from "react-lottie";
import animationData from "../assets/bounce.json";
import NavBar from './Nav';
import { Footer } from './Footer';

const HomePage = (props) => {
  /* Nav Bar Stuff */
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <NavBar />
      <main>
        <div className="home_container">

          <div className="animationDecor">
          <Lottie
            options={{ animationData }}
            isClickToPauseDisabled
            height='100%'
            width='100%'
          />
        </div>
          {/* Card 1 */}
          <div className="home_card mb-4">
            <div className="left-container">
              <div className="text-content">
                <h1 class="h1-core text-4xl">Pallette Quiz</h1>
                <p>
                  Picking the correct color pallette for your personal features is essential for your personal style.
                  Figure out what compliments you the most and take this quiz!
                </p>
                <div>                
                </div>
                <Link to="/palette" className="quiz" aria-label="Toggle Style">
                  Palette Quiz
                </Link>
              </div>
            </div>
            <div className="right-container">
              <div className="image-content">
                <img src={techImage} alt="color pallete fabrics" className="tech pb-3 text-center" />
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="home_card mb-4">
            <div className="left-container">
              <div className="image-content">
                <img
                  id="rack"
                  src={hoodieImage}
                  alt="clothing on a rack with a pink backdrop"
                  className="rack pb-3"
                />
                <div className="overlay overlay-1 aos-init" data-aos="fade-left" aria-label="Successful Overlay">
                  <p className="title">
                    3m<span></span>+
                  </p>
                  <span className="sub-title">Successful queries</span>
                </div>
                <div className="overlay overlay-2 aos-init" data-aos="fade-right" aria-label="Supported Overlay">
                  <p className="title">
                    250<span>+</span>
                  </p>
                  <span className="sub-title">Supported users</span>
                </div>
              </div>
            </div>
            <div className="right-container">
              <div className="text-content">
                <h2>Style Quiz</h2>
                <p>Don't be buying pieces that don't fit your vibe. Figure out what you like with this quiz!</p>
                <div className="text-center">
                <Link to="/style-quiz" className="quiz" aria-label="Toggle Style">
                  Style Quiz
                </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="home_card mb-4">
            <div className="bottom">
              <h3>Want to Explore and Experiment?</h3>
                <Link to="/palette" className="explore" aria-label="Toggle Color">
                  Color Palettes
                </Link>
                <Link to="/styles" className="explore" aria-label="Toggle Style Closet">
                  Style Closet
                </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
};

export default HomePage;