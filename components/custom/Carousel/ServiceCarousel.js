import React from "react";
import Image from "next/image";
import { Carousel } from 'react-responsive-carousel';
// do not remove, loaded by webpack
import styles from "react-responsive-carousel/lib/styles/carousel.min.css"; 

export default function ServiceCarousel ({ images }) {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} useKeyboardArrows={true} dynamicHeight={true} interval={4000} showStatus={false} >
      {images?.map((image, index) => (
        <div key={image.url || index}>
          <Image 
            src={image.url} 
            alt={image.altText} 
            className="fill" 
            width={image.imageX} 
            height={image.imageY}
            loading={index === 0 ? "eager" : "lazy"}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 70vw"
          />
          <p className="legend">{image.description}</p>
        </div>
      ))}
    </Carousel>
  );
  };