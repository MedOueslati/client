import React from 'react';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';
import './carousel.css'; // Import your custom CSS file

const MyCarousel = () => {
  return (
    <div className="carousel-container">
      <BootstrapCarousel>
        <BootstrapCarousel.Item>
          <img
            className="d-flex"
            src="slider3.png" 
            alt="First slide"
          />

        </BootstrapCarousel.Item>
        <BootstrapCarousel.Item>
          <img
            className="d-flex"
            src="slider2.png"
            alt="Second slide"
          />
          
        </BootstrapCarousel.Item>
        <BootstrapCarousel.Item>
          <img
            className="d-flex"
            src="slider1.png"
            alt="Third slide"
          />
          
        </BootstrapCarousel.Item>
        <BootstrapCarousel.Item>
          <img
            className="d-flex"
            src="114-PhotoRoom.png"
            alt="Second slide"
          />
          
        </BootstrapCarousel.Item>
        
      </BootstrapCarousel>
      
      
    </div>
  );
};

export default MyCarousel;
