import React, { useState, useEffect } from 'react';
import Wave from 'react-wavify';

const LoadingScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadingText, setLoadingText] = useState('LOADING...');

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % loadingText.length);
    }, 300);

    const targetHeight = window.innerHeight; // target height in pixels
    const timeRequired = targetHeight / 15; // time required to reach the target height in seconds

    const startTime = new Date().getTime();
    const updateWave = () => {
      const currentTime = new Date().getTime();
      const elapsedTime = (currentTime - startTime) / 1000; // elapsed time in seconds

      if (elapsedTime >= timeRequired) {
        setLoadingText('DONE');
        setWaveHeight(targetHeight);
      } else {
        const waveHeightValue = elapsedTime * targetHeight; // wave height in pixels
        setWaveHeight(waveHeightValue);
        requestAnimationFrame(updateWave);
      }
    };

    const setWaveHeight = (height) => {
      const wave = document.querySelector('.wavify');
      if (wave) {
        wave.style.height = `${height}px`;
      }
    };

    requestAnimationFrame(updateWave);

    return () => clearInterval(interval);
  }, [loadingText.length]);

  return (
    <div className="flex flex-col justify-center items-center h-screen relative">
      {/* Loading text */}
      <div className="flex z-10">
        {loadingText.split('').map((letter, index) => (
          <span
            key={index}
            className={`text-6xl font-bold cursor-pointer mx-0.5 transition-transform duration-200
                        ${index === activeIndex? 'animate-bounce' : ''}
                        hover:scale-110 hover:text-blue-500`}>
            {letter}
          </span>
        ))}
      </div>

      {/* Interactive waves */}
      <div className="absolute inset-x-0 bottom-0 z-0">
        <Wave
          className="wavify"
          fill='#f2f2f2'
          paused={false}
          options={{
            height: 0,
            amplitude: 60,
            speed: 0.15,
            points: 4,
          }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;