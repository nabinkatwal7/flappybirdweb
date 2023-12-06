// CarouselItem.js
import React from 'react';

const CarouselItem = ({ color, text }:{color:string, text:string}) => {
  return (
    <div className={`w-screen h-screen bg-${color} flex items-center justify-center`}>
      <p className="text-white text-4xl font-bold">{text}</p>
    </div>
  );
};

export default CarouselItem;
