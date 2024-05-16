import React from 'react';
import '../../css/style.css';
import techImage from '../../assets/tech.jpeg';
import hoodieImage from '../../assets/hoodie.png';
import Lottie from "react-lottie";
import animationData from "../bounce.json";


const HomePage = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <a href="#">styleU</a>
        </div>
        <div className="components_header text-center">
          <a href="index.html">Home</a>
          <a href="style-quiz.html">Style Quiz</a>
          <a href="palette-analysis">Color Analysis Quiz</a>
          <a href="style-page.html">Styles</a>
        </div>
        <div className="hamburger-menu" aria-label="Toggle Menu">
          <a href="#">
            <span className="material-symbols-outlined">menu</span>
          </a>
        </div>
      </nav>


      
      <main>
      <div className="flex flex-col w-full items-start justify-start gap-8 max-w-4xl px-3 py-16 lg:py-12">
        <div className="flex w-full items-start justify-start cursor-default">
          <Lottie
            options={{ animationData }}
            isClickToPauseDisabled
            height={400}
            width={800}
          />
        </div>
        </div>

        <div className="home_container">
          {/* Card 1 */}
          <div className="home_card mb-4">
            <div className="left-container">
              <div className="text-content">
                <h1 class="h1-core text-4xl">Pallette Quiz</h1>
                <p>
                  Picking the correct color pallette for your personal features is essential for your personal style.
                  Figure out what compliments you the most and take this quiz!
                </p>
                <button className="quiz" aria-label="Toggle Palette">
                  Pallette Quiz
                </button>
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
                  <button className="quiz" aria-label="Toggle Style">
                    Style Quiz
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="home_card mb-4">
            <div className="bottom">
              <h3>Want to Explore and Experiment?</h3>
              <button className="explore" aria-label="Toggle Color" onClick={() => window.location.href = 'palette-results-index.html'}>
                Color Palletes
              </button>
              <button className="explore" aria-label="Toggle Style Closet">
                Style Closet
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="footer-content">
          <p>&copy; 2024 styleU. All rights reserved.</p>
          <ul className="footer-links">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default HomePage;