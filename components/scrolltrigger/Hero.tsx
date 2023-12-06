import React from 'react';

const Hero = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} id='Hero' >This is Hero section. </div>
    )
})

export default Hero;