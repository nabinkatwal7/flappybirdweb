"use client"
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Carousel from './Carousel';

gsap.registerPlugin(ScrollTrigger);

function ScrollTriggerWrapper() {
    
//     const triggerRef = useRef(null);

//   useEffect(() => {
//     const triggerElement = triggerRef.current;

//     gsap.from(triggerElement, {
//       opacity: 0,
//       y: 50,
//       duration: 5,
//       scrollTrigger: {
//         trigger: triggerElement,
//         start: 'top center+=100',
//         end: 'bottom center-=100',
//         scrub: true,
//       },
//     });
//   }, []);

  return (
    <div >
        {/* <div className='h-screen'>
            <h1 className="text-white text-4xl font-bold">Scroll Trigger Component</h1>
        </div>
        <div ref={triggerRef} className="bg-blue-500 h-screen flex items-center justify-center">
            <h1 className="text-white text-4xl font-bold">Scroll Trigger Component2</h1>
        </div> */}
            <Carousel />

    </div>
  );
}

export default ScrollTriggerWrapper;