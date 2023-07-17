import React from 'react';
import Section01 from './Components/Section01';
import Section02 from './Components/Section02';
import Section03 from './Components/Section03';
import Header from './Components/Header';
import Contact from './Components/Contact.js';
import './index.css';
import './sec2.css';
import './sec3.css';
import './contact.css';

function App() {

  return (
    <div className="Container">
      <Header></Header>
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
