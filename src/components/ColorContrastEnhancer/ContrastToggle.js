// ContrastToggle.js
// Challenge: Color Contrast Enhancer
// Objective: Create a button that toggles between normal and high-contrast modes, improving readability for users with visual impairments.

import React, { useState } from 'react';
import '../../css/ContrastToggle.css';

function ContrastToggle() {
  const [textSize, setTextSize] = useState(12);
  const [highContrast, setHighContrast] = useState(false);

  const toggleContrast = () => {
    setHighContrast(!highContrast);
  };
  const toggleTextSize = () => {
    const sizes = [12, 16, 20, 24, 28];
    const currentIndex = sizes.indexOf(textSize);
    const nextIndex = (currentIndex + 1) % sizes.length;
    setTextSize(sizes[nextIndex]);
  };

  const getTextClass = () => {
    if (textSize <= 16) {
      return highContrast ? 'adjusted-contrast-high' : 'adjusted-contrast-normal';
    }
    return highContrast ? 'high-contrast' : 'normal-contrast';
  };

  return (
    <div className={`contrast-container ${getTextClass()}`}>
      <button 
        onClick={toggleContrast} 
        aria-pressed={highContrast}
        className="contrast-toggle-button"
      >
        {highContrast ? 'Switch to Normal Contrast' : 'Switch to High Contrast'}
      </button>

      <p style={{ fontSize: `${textSize}px` }} className={`sample-text ${getTextClass()}`}>
        This is a sample text to demonstrate contrast toggling.
      </p>

      <button onClick={toggleTextSize}>Toggle Text Size</button>
      <div>
        <p style={{ fontSize: `${textSize}px` }} className={`sample-text ${getTextClass()}`}>This is a text with size {textSize}px.</p>
      </div>
    </div>
  );
}

export default ContrastToggle;
