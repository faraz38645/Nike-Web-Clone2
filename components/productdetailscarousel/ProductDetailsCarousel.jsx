import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the CSS for the carousel

const ProductDetailsCarousel = () => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1260px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        {/* Use require to import the image correctly */}
        <div>
          <img src='../src/pic1.jpg' alt="Product 1" />
        </div>
        <div>
          <img src='../src/pic2.jpg' alt="Product 1" />
        </div>
        <div>
          <img src='../src/pic3.jpg' alt="Product 1" />
        </div>
        <div>
          <img src='../src/pic4.jpg' alt="Product 1" />
        </div>
        {/* Add more images here as needed */}
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;
