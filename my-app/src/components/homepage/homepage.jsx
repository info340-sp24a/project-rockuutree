import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/style.css';
import techImage from '../../assets/tech.jpeg';
import hoodieImage from '../../assets/hoodie.png';
import Lottie from "react-lottie";
import animationData from "../bounce.json";
import home from "../../assets/home.svg";
import shirt from "../../assets/shirt.svg";
import palette from "../../assets/palette.svg";
import store from "../../assets/store.svg";
import person from "../../assets/person.svg";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav>
      <div className="logo"><Link to="/">styleU</Link></div>
        <div className="components_header text-center">
          <Link to="/">Home</Link>
          <Link to="/style-quiz">Style Quiz</Link>
          <Link to="/palette-analysis">Color Analysis Quiz</Link>
          <Link to="/styles">Styles</Link>
        </div>
        <div className="hamburger-menu" onClick={toggleMenu} aria-label="Toggle Menu">
          <a href="#">
            <span className="material-symbols-outlined">menu</span>
          </a>
        </div>
      </nav>

      <div className={`menu-tab ${isMenuOpen ? 'open' : ''}`}>
  <div className="menu-header">
    <div className="logo">styleU</div>
    <div className="close-icon" onClick={toggleMenu}>
      <span className="material-symbols-outlined">close</span>
    </div>
  </div>
  <ul>
    <li>
    <Link to="/" onClick={toggleMenu}>
      <img src={home} alt="Home" className="menu-icon" />
      Home
    </Link>
  </li>
  <li>
    <Link to="/style-quiz" onClick={toggleMenu}>
      <img src={shirt} alt="Style Quiz" className="menu-icon" />
      Style Quiz
    </Link>
  </li>
  <li>
    <Link to="/palette-analysis" onClick={toggleMenu}>
      <img src={palette} alt="Color Analysis Quiz" className="menu-icon" />
      Color Analysis Quiz
    </Link>
  </li>
  <li>
    <Link to="/styles" onClick={toggleMenu}>
      <img src={store} alt="Styles" className="menu-icon" />
      Styles
    </Link>
  </li>
    <li role="presentation" aria-hidden="true" className="menu-tab-divider"></li>
    <Link to="/login" onClick={toggleMenu}>
      <img src={person} alt="Profile" className="menu-icon" />
      Profile
    </Link>
    <li role="presentation" aria-hidden="true" className="menu-tab-divider"></li>
    <Link to="/logout" onClick={toggleMenu}>
      <img src={person} alt="Log Out" className="menu-icon" />
      Log Out
    </Link>
    {/* <li role="presentation" aria-hidden="true" className="menu-tab-divider"></li> */}
  </ul>
  <div className="menu-tab-footer">
    <p>&copy; 2024 styleU, Inc.</p>
    <ul className="footer-links">
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
      <li>
        <a href="#">Privacy</a>
      </li>
    </ul>
  </div>
</div>


      
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