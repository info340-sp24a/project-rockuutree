import { useState } from 'react';

export const useNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return { isMenuOpen,toggleMenu };
};

