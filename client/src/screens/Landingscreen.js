// Landingscreen.js
import React from 'react';
import ImageSlider from './ImageSlider'; // Assuming ImageSlider component is in the same directory
import hero1 from'./hero/hero-1.jpg'
import hero2 from './hero/hero-2.jpg'
import hero3 from './hero/hero-3.jpg'
function Landingscreen() {
    const slides = [
        { id: 1, imageUrl: hero1 },
        { id: 2, imageUrl: hero2 },
        { id: 3, imageUrl: hero3 },
        // Add more slides as needed
    ];

    return (
        <div>
            <ImageSlider slides={slides} />
        </div>
    );
}

export default Landingscreen;
