import Section01 from './Components/Section01';
import Section02 from './Components/Section02';
import Section03 from './Components/Section03';
import Header from './Components/Header';
import Contact from './Components/Contact.js';
import './index.css';
import './sec2.css';
import './sec3.css';
import './contact.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [isHeaderHidden, setHeaderHidden] = useState(false);
  const [isLinkClicked, setLinkClicked] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    // Add an event listener to the scroll event
    window.addEventListener('scroll', handleScroll);
  
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLinkClicked, prevScrollY]);

  const throttle = (callback, delay) => {
    let lastCall = 0;
    return (...args) => {
      const now = new Date().getTime();
      if (now - lastCall < delay) return;
      lastCall = now;
      callback(...args);
    };
  };
  
  const handleScroll = throttle(() => {
    const scrollThreshold = 0;
    const currentScrollY = window.scrollY;
  
    // If a link has been clicked, do not hide the header
    if (isLinkClicked) {
      setLinkClicked(false);
      setPrevScrollY(currentScrollY);
      return;
    }
  
    // If the user scrolls down more than the threshold, hide the header
    if (currentScrollY > prevScrollY + scrollThreshold) {
      setHeaderHidden(true);
    }
    // If the user scrolls up, show the header again
    else if (currentScrollY < prevScrollY - scrollThreshold) {
      setHeaderHidden(false);
    }
  
    // Update the prevScrollY state after the scroll event has been processed
    setPrevScrollY(currentScrollY);
  }, 100);
  return (
    <div className="Container">
      <Header
      isHeaderHidden={isHeaderHidden}
      isLinkClicked={isLinkClicked}
      setLinkClicked={setLinkClicked}>
      </Header>
      <div className='contentBox'>
        <Contact></Contact>
      </div>
      <Section01></Section01>
      <Section02></Section02>
      <Section03></Section03>
    </div>
  );
}

export default App;
