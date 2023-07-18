import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import p1Image from '../p1.png';
import p2Image from '../p2.png';
import p3Image from '../p3.png';
import p4Image from '../p4.png';
import p5Image from '../p5.png';
import p6Image from '../p6.png';
import p7Image from '../p7.png';
import p8Image from '../p8.png';

const Gallery = () => {
  const galleryItems = [
    { link:"", title:"3D Space Themed Site", description: "Created with Three.js. One of the first sites I made. This allowed me to use my Unity experience to create a solar system that moves on scroll. However it lacks responsiveness and polish. It was a fun beginner project tailored to a specific screen size.", photo: p1Image, className: 'galleryItem1 galleryItem' },
    { link:"https://bon317.github.io/ResponsiveCloneSite/", title:"Cloned Bird Website", description: "A project with the objective of making a clone of a random website found online. Responsiveness and progressive enhancement methodology were the main goals in this project. This was done in vanilla js html and css and was my first responsive project. ", photo: p2Image, className: 'galleryItem2 galleryItem' },
    { link:"https://bon317.github.io/StylizedSearchBar/", title:"Stylized Search Bar", description: "A Search Bar that animates open and closed on click. A very simple project that I put in to represent all the minor projects done to hone my design skills, but don't quite qualify for a full project. This was done with a focus on developing css and js skills.", photo: p3Image, className: 'galleryItem3 galleryItem' },
    { link:"https://bon317.github.io/WeatherApp/", title:"Weather App", description: "This project makes two API calls to retrieve data on the weather of a given city, and a photo of that city. This project was an introduction to asynchronous programming with promises in javascript with http api requests. ", photo: p4Image, className: 'galleryItem4 galleryItem' },
    { link:"https://bon317.github.io/TaskTracker/", title:"Task Tracker App", description: "This was my first project with the react library. An introduction to component based programming using functional components. As well as introduction to JSX and other react paradigms.", photo: p5Image, className: 'galleryItem5 galleryItem' },
    { link:"https://bon317.github.io/NWSite", title:"Northwest Counseling Website", description: "This was a site created with the goal of recreating a website builder site in order to gain full customizability over it. A custom image carousel was added, images were cleaned up, and animation effects were added. This was done in vanilla js html and css.", photo: p6Image, className: 'galleryItem6 galleryItem' },
    { link:"", title:"React Login App", description: "Introduction to full stack development with React, Node.js and express, connected to an SQL database. Used Wamp servers to maintain the server. This was also a lesson in using class components instead of functional ones.", photo: p7Image, className: 'galleryItem7 galleryItem' },
    { link:"", title:"Portfolio Site", description: "This site was an opportunity to combine my design knowledge with my understanding of functional react components to make a fun showcase for my projects. With this project I obtained a wider understanding of a variety of react hooks and got an opportunity to work with emailJS APIs. This project also refreshed my github and github pages knowledge.", photo: p8Image, className: 'galleryItem8 galleryItem' }
  ];

  const [carouselArray, setCarouselArray] = useState(galleryItems);
  const [lastClickTime, setLastClickTime] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    setCarouselArray((prevArray) => {
      const updatedArray = prevArray.map((item, index) => {
        const updatedItem = { ...item };
        updatedItem.photo = galleryItems[index].photo;
        return updatedItem;
      });
      return updatedArray;
    });
    // eslint-disable-next-line
  },[]);
  const setCurrentState = (direction) => {
    const currentTime = Date.now();
    if (currentTime - lastClickTime < 300) {
      return; // Ignore clicks within 0.3 seconds
    }
    setLastClickTime(currentTime);
    
    setActiveIndex((prevIndex) => {
      const lastIndex = carouselArray.length - 1;
      let newIndex;
      if (direction === 'left') {
        newIndex = prevIndex === 0 ? lastIndex : prevIndex - 1;
      } else {
        newIndex = prevIndex === lastIndex ? 0 : prevIndex + 1;
      }
      return newIndex;
    });

    setCarouselArray((prevArray) => {
      const updatedArray = direction === 'left'
        ? [...prevArray.slice(1), prevArray[0]]
        : [prevArray[prevArray.length - 1], ...prevArray.slice(0, -1)];
      return updatedArray.map((item, index) => ({
        ...item,
        photo: galleryItems[index].photo,
        description: galleryItems[index].description,
        title: galleryItems[index].title,
        link: galleryItems[index].link,
      }));
    });
  };

  return (
    <div className="gallery">
      <div className="leftArrowBox" onClick={() => setCurrentState('left')}>
        <i className="fas fa-arrow-left fa-2x whiteArrow"></i>
      </div>
      <div className="cardContainer">
        {carouselArray.map((item, index) => (
          <ProjectCard
            key={index}
            link={item.link}
            title={item.title}
            description={item.description}
            photo={item.photo}
            className={item.className}
            style={{ transform: `translateX(${(index - activeIndex) * 100}%)` }}
          />
        ))}
      </div>
      <div className="rightArrowBox" onClick={() => setCurrentState('right')}>
        <i className="fas fa-arrow-right fa-2x whiteArrow"></i>
      </div>
    </div>
  );
};

export default Gallery;