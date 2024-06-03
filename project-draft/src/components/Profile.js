import React, { useState, useEffect } from 'react';
import '../index.css';
import me from '../assets/mapleMeFace.png';
import NavBar from './Nav';
import { getUserProfile, updateUserProfile, addColorCard, addStyleCard } from './User';
import { getDatabase, ref, onValue, child, get as firebaseGet } from "firebase/database";
import { getAuth } from 'firebase/auth';
import colorPalettes from "../assets/color_palettes.json";
import { StyleCard } from './StyleCardList';

const Profile = (props) => {
    const { currentUser, style_data } = props;
    const [palettes, setPalettes] = useState([]);
    const [userProfileState, setUserProfileState] = useState(getUserProfile());
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [newColorName, setNewColorName] = useState('');
    const [newColorDescription, setNewColorDescription] = useState('');
    const [newStyleName, setNewStyleName] = useState('');
    const [newStyleDescription, setNewStyleDescription] = useState('');
    const [favoriteStyles, setFavoriteStyles] = useState([]);

    const auth = getAuth();
    const user = auth.currentUser;

    const handleSaveProfile = () => {
        const updatedProfile = {
            ...userProfileState,
            name,
            email,
        };
        updateUserProfile(updatedProfile);
        setUserProfileState(updatedProfile);
    };

    const handleAddColorCard = () => {
        const newColor = {
            name: newColorName,
            description: newColorDescription,
        };
        const updatedColors = addColorCard(newColor);
        setUserProfileState((prevProfile) => ({
            ...prevProfile,
            colors: updatedColors,
        }));
        setNewColorName('');
        setNewColorDescription('');
    };

    const handleAddStyleCard = () => {
        const newStyle = {
            name: newStyleName,
            description: newStyleDescription,
        };
        const updatedStyles = addStyleCard(newStyle);
        setUserProfileState((prevProfile) => ({
            ...prevProfile,
            styles: updatedStyles,
        }));
        setNewStyleName('');
        setNewStyleDescription('');
    };

    // gets the user's palettes from Firebase Realtime Database
    useEffect(() => {
        const dbRef = ref(getDatabase());
        // gets the children of palettes key
        firebaseGet(child(dbRef, `users/${currentUser.uid}/palettes`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const data = [];
                    snapshot.forEach((childSnapshot) => {
                        data.push({ key: childSnapshot.key, value: childSnapshot.val() });
                    });
                    setPalettes(data);
                } else {
                    console.log("No data available");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, [currentUser.uid]);

    useEffect(() => {
        if (currentUser) {
            const dbRef = getDatabase();
            const favRef = ref(dbRef, `users/${currentUser.uid}/favorites`);
            onValue(favRef, (snapshot) => {
                const favStyles = [];
                snapshot.forEach((childSnapshot) => {
                    if (childSnapshot.val()) {
                        favStyles.push(childSnapshot.key);
                    }
                });
                setFavoriteStyles(favStyles);
            });
        }
    }, [currentUser]);

    const colorPaletteCards = palettes.map(({ key, value }) => {
        const thisColorPalette = colorPalettes[value];
        const gradientString = `linear-gradient(to right, ${thisColorPalette.colors.slice(0, 3).map(color => color.hexCode).join(', ')})`;
        return (
            <div className="grid-item flex flex-col justify-content-center align-items-center" key={key} style={{ background: gradientString }}>
                <div className="flex flex-col justify-content-center align-items-center bg-light bg-gradient rounded px-3 py-2">
                    <div>
                        <p className='fw-bold fs-4 text-center'>{thisColorPalette.name}</p>
                    </div>
                    <p className="text-center">{thisColorPalette.description}</p>
                </div>
            </div>
        );
    });

    return (
        <>
            <NavBar currentUser={currentUser} />
            <main>
                <div className="profile-container">
                    <div className="profile-header">
                        <img src={me} alt="Profile" className="profile-picture" />
                        <div>
                            <h1>{currentUser.displayName}</h1>
                            <h1>{currentUser.email}</h1>
                        </div>
                    </div>
                    <div className="profile-form">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button onClick={handleSaveProfile}>Save Profile</button>
                    </div>
                    <div className="card-section">
                        <h2>Your Color Palettes</h2>
                        <div className="profile-card-section">
                            {colorPaletteCards}
                        </div>
                    </div>
                    <div className="card-section">
                        <h2>Your Colors</h2>
                        <div className="card-container">
                            {userProfileState.colors && userProfileState.colors.map((color, index) => (
                                <div key={index} className="card" style={{ backgroundColor: color.hexCode || '#f5f5f5' }}>
                                    <div className="card-content">
                                        <h3>{color.name}</h3>
                                        <p>{color.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="add-card-form">
                            <input
                                type="text"
                                placeholder="Color Name"
                                value={newColorName}
                                onChange={(e) => setNewColorName(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Color Description"
                                value={newColorDescription}
                                onChange={(e) => setNewColorDescription(e.target.value)}
                            />
                            <button onClick={handleAddColorCard}>Save Color Card</button>
                        </div>
                    </div>
                    <div className="card-section">
                        <h2>Styles</h2>
                        <div className="card-container">
                            {userProfileState.styles && userProfileState.styles.map((style, index) => (
                                <div key={index} className="card">
                                    <div className="card-content">
                                        <h3>{style.name}</h3>
                                        <p>{style.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="add-card-form">
                            <input
                                type="text"
                                placeholder="Style Name"
                                value={newStyleName}
                                onChange={(e) => setNewStyleName(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Style Description"
                                value={newStyleDescription}
                                onChange={(e) => setNewStyleDescription(e.target.value)}
                            />
                            <button onClick={handleAddStyleCard}>Save Style Card</button>
                        </div>
                    </div>
                    <div className="card-section">
                        <h2>Your Favorite Styles</h2>
                        <div className="profile-card-section">
                            {style_data && favoriteStyles.length > 0 && favoriteStyles.map((styleName, index) => {
                                const styleData = style_data.find(style => style.Style_Name === styleName);
                                return styleData ? <StyleCard key={index} style_data={styleData} /> : null;
                            })}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Profile;
