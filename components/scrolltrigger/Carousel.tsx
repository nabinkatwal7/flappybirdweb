// Carousel.js
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CarouselItem from './CarouselItem';

gsap.registerPlugin(ScrollTrigger);

const Carousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carouselElement = carouselRef.current || null;


    const items = carouselElement.querySelectorAll('.carousel-item');

    gsap.to(items, {
      xPercent: -100 * (items.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: carouselElement,
        start: 'top top',
        end: () => `+=${carouselElement.offsetWidth * (items.length - 1)}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });
  }, []);

  return (
    <div ref={carouselRef} className="w-full h-screen relative">
      <div className="flex">
        <CarouselItem color="blue-500" text="Item 1" />
        <CarouselItem color="green-500" text="Item 2" />
        <CarouselItem color="green-500" text="Item 2" />
        {/* Add more CarouselItem components as needed */}
      </div>
    </div>
  );
};

export default Carousel;
