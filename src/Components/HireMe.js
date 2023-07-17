import React, { useState } from 'react';
import Contact from './Contact';

const HireMe = () => {

  const [isContactVisible, setIsContactVisible] = useState(false);

  const handleButtonClick = () => {
    setIsContactVisible(true);
  };

  const handleCloseContact = () => {
    setIsContactVisible(false);
  };

    return (
      <div className="hireMe">
          <span onClick={handleButtonClick}>Hire me</span>
          {isContactVisible && <Contact isVisible={isContactVisible} onClose={handleCloseContact} />}
      </div>
    )
  }
  export default HireMe