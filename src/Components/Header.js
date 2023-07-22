import React, { useState } from 'react';
import Contact from './Contact';

const Header = (props) => {
  const {isHeaderHidden} = props;
  const [isContactVisible, setIsContactVisible] = useState(false);

  const handleButtonClick = () => {
    setIsContactVisible(true);
  };
  const handleLinkClick = () => {
    props.setLinkClicked(true); 
  };

  const handleCloseContact = () => {
    setIsContactVisible(false);
  };

  return (
    <div className={`${isHeaderHidden ? 'header hidden' : 'header'}`}>
      <h1>BonDevs</h1>
      <div className="links">
        <a href="#sec1" onClick={handleLinkClick}>Home</a>
        <a href="#sec2" onClick={handleLinkClick}>Projects</a>
        <a href="#sec3" onClick={handleLinkClick}>About</a>
        <span onClick={handleButtonClick}>Contact</span>
      </div>
      {isContactVisible && <Contact isVisible={isContactVisible} onClose={handleCloseContact} />}
    </div>
  );
};

export default Header;