// Profile.jsx
import React, { useState } from 'react';
import '../index.css';
import me from '../assets/mapleMeFace.png';
import NavBar from './Nav';
import { getUserProfile, updateUserProfile, addColorCard, addStyleCard } from './User';

const Profile = (props) => {
  const [userProfileState, setUserProfileState] = useState(getUserProfile());
  const [name, setName] = useState(userProfileState.name);
  const [email, setEmail] = useState(userProfileState.email);
  const [newColorName, setNewColorName] = useState('');
  const [newColorDescription, setNewColorDescription] = useState('');
  const [newStyleName, setNewStyleName] = useState('');
  const [newStyleDescription, setNewStyleDescription] = useState('');

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

  const { currentUser } = props;

  return (
    <>
      <NavBar currentUser={currentUser} />
      <main>
        <div className="profile-container">
          <div className="profile-header">
            <img src={me} alt="Profile" className="profile-picture" />
            <div>
              <h1>{userProfileState.name}</h1>
              <h1>{userProfileState.email}</h1>
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
            <h2>Colors</h2>
            <div className="card-container">
              {userProfileState.colors.map((color, index) => (
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
              {userProfileState.styles.map((style, index) => (
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
        </div>
      </main>
    </>
  );
};

export default Profile;