import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './Nav';
import { Footer } from './Footer';
import '../index.css'
import Lottie from 'react-lottie';
import animationData from "../assets/loadingStyle.json";
import colorPalettes from "../assets/color_palettes.json";


function Palette(props){
    /*Nav Bar */
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    const valuesArray = Object.values(colorPalettes);
  
    const colorPaletteCards = valuesArray.map((palette) => {

    const gradientString = `linear-gradient(to right, ${palette.colors.slice(0, 3).map(color => color.hexCode).join(', ')})`;

    const colorsWithHex = palette.colors.map((color) => (
      <div className="d-flex justify-content-between" key={color.hexCode}>
        <div>
          <p>{color.name}</p>
        </div>
        <div className="rounded-circle" style={{ background: color.hexCode, width: '30px', height: '30px' }}></div>
        <div>
          {color.hexCode}
        </div>
      </div>
    ));

    return (
      <div
        className="grid-item d-flex flex-col justify-content-center align-items-center"
        key={palette.name}
        style={{ background: gradientString }}
      >
        <div className="flex flex-col justify-content-center align-items-center bg-light bg-gradient rounded px-3 py-2">
          <div>
            <p className="fw-bold fs-4 text-center">{palette.name}</p>
          </div>
          <div>
            <p className="text-center">{palette.description}</p>
          </div>
          <div>
            <button className="all-buttons rounded fw-semibold" onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? 'Hide Colors' : 'Show Colors'}
            </button>
            {isExpanded && (
              <div className="px-2 py-2">
                {colorsWithHex}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  });

    return(
        <div className='style-page'>
            <NavBar currentUser={props.currentUser} />
            <main>
                <div className="d-flex justify-content-center align-items-center flex-column">
                    <div>
                        <p className="fs-1 fw-bold">Color Palettes</p>
                    </div>
                    <div className="profile-card-section w-75">
                        {colorPaletteCards}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
    
}

export default Palette;