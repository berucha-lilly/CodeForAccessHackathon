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
        // TODO: Update background color values to meet WCAG 2.1 AA standards for high contrast.
        // Bug 1: The current color combinations don't meet accessibility standards. 
        // Participants should research and implement appropriate high-contrast color pairs.
        backgroundColor: highContrast ? '#c0c0c0' : '#d3d3d3',
        color: highContrast ? '#333333' : '#000000',
        padding: '20px',
        textAlign: 'center'
      }}
    >
      {/* TODO: Ensure the button is accessible with proper ARIA attributes */}
      {/* Bug 2: The aria-pressed attribute is incorrectly implemented. */}
      <button 
        onClick={toggleContrast} 
        aria-pressed="false" // This should dynamically change based on state
        // Bug 3: The aria-label is missing. Participants should add an appropriate label.
      >
        {highContrast ? 'Switch to Normal Contrast' : 'Switch to High Contrast'}
      </button>

      {/* Sample text to demonstrate contrast toggling */}
      <p>This is a sample text to demonstrate contrast toggling.</p>

      {/* TODO: Add more text elements with varying sizes to test contrast */}
      {/* Bug 4: There's no consideration for different text sizes. Participants should add and style various text elements. */}
    </div>
  );
}

export default ContrastToggle;
