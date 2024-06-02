import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './Nav';
import { Footer } from './Footer';
import SearchBar from './SearchBar';
import '../index.css'

import StyleCardList from './StyleCardList';

function StylePage(props){
    /*Nav Bar */
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    const { style_data } = props;

    // Search Bar 
    const [searchQuery, setSearchQuery] = useState('');
    const filteredStyleData = style_data.filter(style => 
        style.Style_Name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return(
        <div className='style-page'>
            <NavBar currentUser={props.currentUser} />
            <main>
                <div className='content-container'>
                    <SearchBar Query={searchQuery} setSearchQuery={setSearchQuery}/>
                    <StyleCardList style_data={filteredStyleData} />
                </div>
            </main>
            <Footer />
        </div>
    );
    
}


export default StylePage;