import { Link } from 'react-router-dom';
import { useNavigation } from './navScript';
import '../../css/homestyle.css';
import home from "../../assets/home.svg";
import shirt from "../../assets/shirt.svg";
import palette from "../../assets/palette.svg";
import store from "../../assets/store.svg";
import person from "../../assets/person.svg";

const NavBar = () => {
  const { isMenuOpen, toggleMenu } = useNavigation();

  return (
    <>
      <nav>
        <div className="logo">
          <Link to="/">styleU</Link>
        </div>
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
          <Link to="/profile" onClick={toggleMenu}>
            <img src={person} alt="Profile" className="menu-icon" />
            Profile
          </Link>
          <li role="presentation" aria-hidden="true" className="menu-tab-divider"></li>
          <Link to="/styles">Sign Out</Link>
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
      {/* /* Nav Bar stuff end*/}
    </>
  );
};

export default NavBar;