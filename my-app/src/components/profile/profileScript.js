// profile.js
let userProfile = {
  name: 'Ryan Doe',
  email: 'styleu@cool.com',
  profilePicture: 'path/to/profile-picture.jpg',
  colors: [
    {
      name: 'Blue',
      description: 'Calm and serene',
    },
    {
      name: 'Green',
      description: 'Fresh and natural',
    },
  ],
  styles: [
    {
      name: 'Casual',
      description: 'Relaxed and comfortable',
    },
    {
      name: 'Formal',
      description: 'Elegant and sophisticated',
    },
  ],
};

export const getUserProfile = () => {
  return userProfile;
};

export const updateUserProfile = (updatedProfile) => {
  userProfile = updatedProfile;
};

export const addColorCard = (newColor) => {
  userProfile.colors.push(newColor);
  return userProfile.colors;
};

export const addStyleCard = (newStyle) => {
  userProfile.styles.push(newStyle);
  return userProfile.styles;
};