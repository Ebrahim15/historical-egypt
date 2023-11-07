"use client"

import React, { useEffect, useState } from 'react'
import './ImageSlider.css'
import Image from 'next/image'
import { ChevronLeftCircle, ChevronRightCircle, Circle, CircleDot } from 'lucide-react'

const ImageSlider = ({images}) => {
  const [imgIndex, setImgIndex] = useState(0)
  const [slideText, setSlideText] = useState('')

  const showPrevImage = () => {
    setImgIndex(imgIndex === 0 ? images.length - 1 : imgIndex - 1);
  }

  const showNextImage = () => {
    setImgIndex(imgIndex === images.length - 1 ? 0 : imgIndex + 1);
  }

//   useEffect(() => {   
//     // const interval = setInterval(() => {
//     //   imgIndex === images.length - 1
//     //     ? setImgIndex(0)
//     //     : setImgIndex(imgIndex + 1);
//     // }, 5000); 

//     // return () => clearInterval(interval); 
// }, [imgIndex]); 
  
  useEffect(() => {
    setSlideText('Slide to see photos')
  }, [])

  return (
    <div className="img_slider_container flex overflow-hidden w-full h-[300px] relative lg:w-[30%]">
      {/* <p className="absolute text-black z-100 m-10">{slideText}</p> */}
      {images.map((image, index) => (
        <div
          key={index}
          className="img_container relative w-full shrink-0"
          style={{ translate: `${-100 * imgIndex}%` }}
        >
          <Image
            src={image.src}
            layout="fill"
            alt={image.alt}
            // style={{ translate: `${-100 * imgIndex}%` }}
          />
        </div>
      ))}
      <div className="slider_buttons_container opacity-50 absolute w-full flex justify-between items-center p-3 h-full">
        <button
          className="slider_buttons"
          style={{
            opacity: `${imgIndex === 0 ? 0 : 1}`,
            pointerEvents: `${imgIndex === 0 ? "none" : "all"}`,
          }}
          onClick={showPrevImage}
        >
          <ChevronLeftCircle
            size={30}
            strokeWidth={1}
            color="white"
            fill="black"
            fillOpacity={1}
          />
        </button>
        <button
          className="slider_buttons"
          style={{
            opacity: `${imgIndex === images.length - 1 ? 0 : 1}`,
            pointerEvents: `${imgIndex === images.length - 1 ? "none" : "all"}`,
          }}
          onClick={showNextImage}
        >
          <ChevronRightCircle
            size={30}
            strokeWidth={1}
            color="white"
            fill="black"
            fillOpacity={1}
          />
        </button>
      </div>
      <div className="slider_index_buttons_container opacity-50 absolute w-full h-full flex justify-center items-end p-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setImgIndex(index)}
            className="mx-1 h-fit"
          >
            {index === imgIndex ? (
              <CircleDot size={14} color="white" fill="black" />
            ) : (
              <Circle size={12} color="white" fill="black" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider