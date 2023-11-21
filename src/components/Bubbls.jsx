import React, { useEffect } from 'react';

function Bubbls() {
  useEffect(() => {
    // Function to generate a random number between min and max
    const getRandomNumber = (min, max) => Math.random() * (max - min) + min;

    // Function to create a random delay for the animation
    const getRandomDelay = () => Math.random() * 4000; // Adjust as needed

    // Function to create a random position for the bubble
    const getRandomPosition = () => ({
      top: getRandomNumber(0, window.innerHeight),
      left: getRandomNumber(0, window.innerWidth),
    });

    // Function to create a random bubble element
    const createRandomBubble = () => {
      const bubble = document.createElement('div');

      // Random size (between 10 and 40 pixels)
      const size = getRandomNumber(10, 90);
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;

      // Random blur class (sm, md, or lg)
      const blurClasses = ['blur-sm', 'blur-md', 'blur-lg'];
      const randomBlurClass = blurClasses[Math.floor(Math.random() * blurClasses.length)];
      bubble.classList.add(randomBlurClass);

      bubble.className = `absolute bg-yellow-100 rounded-full mix-blend-multiply filter ${randomBlurClass} opacity-70 animate-blob`;

      const position = getRandomPosition();
      bubble.style.top = `${position.top}px`;
      bubble.style.left = `${position.left}px`;

      const delay = getRandomDelay();
      bubble.style.animationDelay = `${delay}ms`;

      document.body.appendChild(bubble);
    };

    // Create a new random bubble every 2 seconds
    const intervalId = setInterval(() => {
        createRandomBubble();
      }, 200);
  
      // Clear the interval when the component is unmounted
      return () => clearInterval(intervalId);
  }, []); // Run once on component mount

  return (
    <div className="relative w-full max-w-lg">
      {/* Your existing bubble elements */}
      <div className="absolute top-0 left-0 md:-left-4 w-10 h-10 bg-yellow-100 rounded-full mix-blend-multiply filter blur-sm opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 md:-right-4 w-20 h-20 bg-yellow-300 rounded-full mix-blend-multiply filter blur-md opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 md:bottom-0 md:left-20 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    </div>
  );
}

export default Bubbls;
