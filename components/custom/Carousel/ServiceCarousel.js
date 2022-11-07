import React from "react";
import Image from "next/image";
import { Carousel } from 'react-responsive-carousel';
import styles from "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function ServiceCarousel ({ images }) {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} useKeyboardArrows={true} dynamicHeight={true} interval={4000} showStatus={false} >
      {images?.map((image, index) => (
        <div id={index}>
          <Image src={image.url} alt={image.altText} className="fill" width={image.imageX} height={image.imageY}/>
          <p className="legend">{image.description}</p>
        </div>
      ))}
    </Carousel>
  );
  };