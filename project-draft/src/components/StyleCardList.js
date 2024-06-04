import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import { getAuth } from 'firebase/auth';

export function StyleCard(props) {
    const { style_data } = props;
    const [isFavorited, setIsFavorited] = useState(false);
    const auth = getAuth();
    const user = auth.currentUser;
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            const dbRef = getDatabase();
            const favRef = ref(dbRef, `users/${user.uid}/favorites/${style_data.Style_Name}`);
            onValue(favRef, (snapshot) => {
                setIsFavorited(!!snapshot.val());
            });
        }
    }, [user, style_data.Style_Name]);

    const handleFavoritedButtonClick = () => {
        if (user) {
            const dbRef = getDatabase();
            const favRef = ref(dbRef, `users/${user.uid}/favorites/${style_data.Style_Name}`);
            set(favRef, !isFavorited);
            setIsFavorited(!isFavorited);
        }
    };

    const handleCardClick = () => {
        if (window.innerWidth < 768) {
            navigate(`/styles/${style_data.URL_Name}`);
        }
    };

    return (
        <div className='style-Cards' onClick={handleCardClick}>
            <div className='style-card-container'>
                <div className='image-icon-container'>
                    <img className='style-card-image' src={require(`../assets/${style_data.Main_img}`)} alt={`a model in ${style_data.Style_Name} fashion`} />
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
                    <p className='read-more-button'>
                        <Link to={`/styles/${style_data.URL_Name}`}>Read More</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export function StyleCardList(props) {
    const { style_data } = props;

    const styleCardList = style_data.map((style) => {
        return <StyleCard key={style.Style_Name} style_data={style} />
    });

    return (
        <div className='style-Cards-List'>
            {styleCardList}
        </div>
    );
}

export default StyleCardList;