import React, { useState, useEffect } from 'react';
import '../index.css';
import me from '../assets/default_pfp.png';
import NavBar from './Nav';
import { getUserProfile, updateUserProfile, addColorCard, addStyleCard } from './User';
import { getDatabase, ref, onValue, child, get as firebaseGet, push as firebasePush } from "firebase/database";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth, updateProfile } from "firebase/auth";
import colorPalettes from "../assets/color_palettes.json";
import { StyleCard } from './StyleCardList';

const Profile = (props) => {
    const { currentUser, style_data } = props;
    const [palettes, setPalettes] = useState([]);
  const [profileColors, setProfileColors] = useState([]);
    const [userProfileState, setUserProfileState] = useState(getUserProfile());
    const [newName, setNewName] = useState(null);
    const [name, setName] = useState(currentUser.displayName);
    const [newColorName, setNewColorName] = useState('');
    const [newHexCode, setNewHexCode] = useState('');
    const [newStyleName, setNewStyleName] = useState('');
    const [newStyleDescription, setNewStyleDescription] = useState('');
  const [imageFile, setImageFile] = useState(undefined)
  const [imageUrl, setImageUrl] = useState(currentUser.userImg)
    const [favoriteStyles, setFavoriteStyles] = useState([]);

    const auth = getAuth();
    const user = auth.currentUser;

  const handleSaveProfile = () => {
    setName(newName)
    setNewName('');
    const auth = getAuth();
    updateProfile(auth.currentUser, {
      displayName: newName
      }).catch((error) => {
        console.error(error);
      });
  };

    //image uploading!
    const handleChange = (event) => {
      if(event.target.files.length > 0 && event.target.files[0]) {
        const imageFile = event.target.files[0]
        setImageFile(imageFile);
        setImageUrl(URL.createObjectURL(imageFile));
      }
    }
  
    const handleImageUpload = async (event) => {
      const storage = getStorage();
      const imageRef = storageRef(storage, "userImages/" + currentUser.uid + ".png");

      await uploadBytes(imageRef, imageFile)

      const url = await getDownloadURL(imageRef);

      await updateProfile(currentUser, {photoURL: url})
    }

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
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [currentUser.uid]);
 
  
  useEffect(() => {
    const db = getDatabase();
    const colorsRef = ref(db, `users/${currentUser.uid}/colors`); //an object of tasks
    // gets the children of colors key
    onValue(colorsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = [];
        snapshot.forEach((childSnapshot) => {
          data.push({ key: childSnapshot.key, value: childSnapshot.val() });
        });
        setProfileColors(data);
      }
  })
  }, []);

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

  const handleAddColorCard = () => {
    const db = getDatabase();
    const colorsRef = ref(db, `users/${currentUser.uid}/colors`); //an object of tasks
    const result = {[newColorName]: newHexCode};
    firebasePush(colorsRef, result);
    setNewColorName('');
    setNewHexCode('')
  };

  const colorCards = profileColors.map(({key, value}) => {
    const [colorName, hexCode] = Object.entries(value)[0];
    return (
        <div className="grid-item flex flex-col justify-content-center align-items-center" key={key} style={{ background: "#" + hexCode }}>
          <div className="flex flex-col justify-content-center align-items-center bg-light bg-gradient rounded px-3 py-2">
            <div>
              <p className='fw-bold fs-4 text-center'>{colorName}</p>
            </div>
          </div>
        </div>
    )
  });

  const handleAddStyleCard = () => {
    const result = {[newColorName]: newHexCode};
    firebasePush(result);
  }

  return (
    <>
      <NavBar currentUser={currentUser} />
      <main>
        <div className="profile-container">
          <div className="profile-header">
            <div className="d-flex flex-column">
              <div>
                <img src={imageUrl || me} alt="Profile" className="profile-picture" />
              </div>
              <div>
                <label htmlFor="imageUploadInput" className="btn btn-sm btn-secondary me-2 mt-2">Choose Image</label>
                <button className="btn btn-sm btn-success mt-2" onClick={handleImageUpload}>Save to Profile</button>
                <input type="file" name="image" id="imageUploadInput" className="d-none" onChange={handleChange}/>
              </div>
            </div>
            <div>
              <h1>{name}</h1>
              <h1>{currentUser.email}</h1>
            </div>
          </div>
          <div className="profile-form">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
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
              {colorCards}
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
                placeholder="Hex Code: #XXXXXX"
                value={newHexCode}
                onChange={(e) => setNewHexCode(e.target.value)}
              />
              <button onClick={handleAddColorCard}>Add Color</button>
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

