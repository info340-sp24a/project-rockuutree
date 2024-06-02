import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';


export function StyleCard(props){
    const { style_data } = props;
    const [isFavorited, setIsFavorited ] = useState(false);

    const handleFavoritedButtonClick = (event) => {
        setIsFavorited(!isFavorited);
    }

    let buttonColor = '#FAF9F6';

    return(
        <div className='style-Cards'>
            <div className='style-card-container'>
            <div className='image-icon-container'>
                    <img className='style-card-image' src={require(`../assets/${style_data.Main_img}`)} alt={`a model in ${style_data.Style_Name} fashion`}/>
                    <i 
                        className="bi bi-heart-fill favoriteIcon" 
                        onClick={handleFavoritedButtonClick}
                        style={{ color: isFavorited ? 'red' : '#FAF9F6' }}
                    ></i>
                </div>
                <div className='style-card-content'>
                    <h2 className='style-card-title'>{style_data.Style_Name}</h2>
                    <p className='long-description'>{style_data.Description}</p>
                    <p className='short-description'>{style_data.Short_Description}</p>
                    {/* I think this will fit better in the individual style card page when users click read more */}
                    {/* <p className='common-clothing-pieces'>{`Common Clothing Pieces: ${style_data.Common_Clothing_Pieces}`}</p> */}
                    <p className='read-more-button'>
                        <Link to={`/styles/${style_data.URL_Name}`}>Read More</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export function StyleCardList(props){
    const { style_data } = props;

    const styleCardList = style_data.map((style) => {
        return <StyleCard key={style.Style_Name} style_data={style}/>
    });
    return(
        <div className='style-Cards-List'>
            {styleCardList}
        </div>
    );
    
}

export default StyleCardList;
