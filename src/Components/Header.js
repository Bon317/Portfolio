import React, { useState } from 'react';
import Contact from './Contact';

const Header = () => {
  const [isContactVisible, setIsContactVisible] = useState(false);

  const handleButtonClick = () => {
    setIsContactVisible(true);
  };

  const handleCloseContact = () => {
    setIsContactVisible(false);
  };

  return (
    <div className="header">
      <h1>BonDevs</h1>
      <div className="links">
        <a href="#sec1">Home</a>
        <a href="#sec2">Projects</a>
        <a href="#sec3">About</a>
        <span onClick={handleButtonClick}>Contact</span>
      </div>
      {isContactVisible && <Contact isVisible={isContactVisible} onClose={handleCloseContact} />}
    </div>
  );
};

export default Header;