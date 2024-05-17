import COLORS from './color';

// profile.js
let userProfile = {
  name: 'Ryan Doe',
  email: 'styleu@cool.com',
  profilePicture: 'path/to/profile-picture.jpg',
  colors: [
    {
      name: 'Deep Sky Blue',
      description: 'Calm and serene',
      hexCode: '#00BFFF',
    },
    {
      name: 'Light Green',
      description: 'Fresh and natural',
      hexCode: '#90EE90',
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
  const colorName = newColor.name.toLowerCase().replace(/\s+/g, '');
  const colorDetails = COLORS.find(([name]) => name === colorName);
  if (colorDetails) {
    const [, hexCode] = colorDetails;
    userProfile.colors.push({ ...newColor, hexCode });
  } else {
    userProfile.colors.push(newColor);
  }
  return userProfile.colors;
};

export const addStyleCard = (newStyle) => {
  userProfile.styles.push(newStyle);
  return userProfile.styles;
};