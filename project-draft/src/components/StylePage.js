import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './Nav';
import { Footer } from './Footer';
import SearchBar from './SearchBar';
import '../index.css'
import Lottie from 'react-lottie';
import animationData from "../assets/loadingStyle.json";

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
    const [isSearching, setIsSearching] = useState(false);
    const filteredStyleData = style_data.filter(style => 
        style.Style_Name.toLowerCase().includes(searchQuery.toLowerCase())
    );


    const handleSearchChange = (newSearchQuery) => {
        setIsSearching(true); // Set isSearching to true when the search query changes
        setSearchQuery(newSearchQuery);
        setTimeout(() => {
            setIsSearching(false); // Set isSearching back to false after a short delay
        }, 2000); // Adjust the delay as needed (500ms in this example)
    };

    return(
        <div className='style-page'>
            <NavBar currentUser={props.currentUser} />
            <main>
                <div className='content-container'>
                    <SearchBar Query={searchQuery} setSearchQuery={handleSearchChange}/>
                    {isSearching ? (
                        <div>
                            <Lottie                                 
                                options={{ animationData }}
                                isClickToPauseDisabled
                                height='100%'
                                width='100%'
                            />
                        </div> 

                    ) : (
                        <StyleCardList style_data={filteredStyleData} />
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
    
}


export default StylePage;