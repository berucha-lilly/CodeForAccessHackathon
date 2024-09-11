// ContrastToggle.js
// Challenge: Color Contrast Enhancer
// Objective: Create a button that toggles between normal and high-contrast modes, improving readability for users with visual impairments.

import React, { useState } from 'react';

function ContrastToggle() {
  // State to manage high contrast mode
  const [highContrast, setHighContrast] = useState(false);

  // Function to toggle high contrast mode
  const toggleContrast = () => {
    setHighContrast(!highContrast);
  };

  return (
    <div
      style={{
        // TODO: background Update color values to meet WCAG 2.1 AA standards for high contrast
        // Bug 1 : Are you sure #c0c0c0 and #d3d3d3 right colours for the background? I would use a black and white. 
        backgroundColor: highContrast ? '#c0c0c0' : '#d3d3d3',
        color: highContrast ? '#ffffff' : '#000000',
        padding: '20px',
        textAlign: 'center'
      }}
    >
      {/* TODO: Ensure the button is accessible with proper ARIA attributes , Bug 2: we wanna make sure that high contrast is true when pressed is ON. */}
      <button 
        onClick={toggleContrast} 
        aria-pressed={!highContrast} 
        aria-label={highContrast ? 'Switch to normal contrast' : 'Switch to high contrast'}
      >
        {highContrast ? 'Switch to Normal Contrast' : 'Switch to High Contrast'}
      </button>
      {/* Sample text to demonstrate contrast toggling */}
      <p>This is a sample text to demonstrate contrast toggling.</p>
    </div>
  );
}

export default ContrastToggle;
