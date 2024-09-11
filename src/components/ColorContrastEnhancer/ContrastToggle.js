// ContrastToggle.js
// Challenge: Color Contrast Enhancer
// Objective: Create a button that toggles between normal and high-contrast modes, improving readability for users with visual impairments.

import React, { useState } from 'react';
import '../../css/ContrastToggle.css';

function ContrastToggle() {
  const [highContrast, setHighContrast] = useState(false);

  const toggleContrast = () => {
    setHighContrast(!highContrast);
  };

  return (
    <div className={`contrast-container ${highContrast ? 'high-contrast' : 'normal-contrast'}`}>
      {/* Bug 1 Fix: Changed aria-pressed to use the highContrast state */}
      {/* This ensures the aria-pressed attribute correctly reflects the button's state */}
      <button 
        onClick={toggleContrast} 
        aria-pressed={highContrast}
        className="contrast-toggle-button"
      >
        {highContrast ? 'Switch to Normal Contrast' : 'Switch to High Contrast'}
      </button>

      <p className="sample-text">This is a sample text to demonstrate contrast toggling.</p>

      {/* TODO 1 Solution: Added more text elements with varying sizes to test contrast */}
      <h1 className="large-text">Large Heading</h1>
      <h2 className="medium-text">Medium Heading</h2>
      <p className="small-text">This is smaller text for testing different font sizes.</p>
      <a href="#" className="link-text">This is a sample link</a>
    </div>
  );
}

export default ContrastToggle;
