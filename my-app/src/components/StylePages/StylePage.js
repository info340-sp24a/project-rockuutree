import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from '../nav/nav';
import { Footer } from '../footer/footer';
import '../../index.css'

import StyleCardList from './StyleCardList';

function StylePage(props){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const { style_data } = props;
    return(
        <div className='style-page'>
            <NavBar/>
            <main>
                <StyleCardList style_data={style_data} />
            </main>
        </div>
    );
    
}

export default StylePage;