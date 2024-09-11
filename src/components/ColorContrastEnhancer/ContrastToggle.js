// ContrastToggle.js
// Challenge: Color Contrast Enhancer
// Objective: Create a button that toggles between normal and high-contrast modes, improving readability for users with visual impairments.

import React, { useState } from 'react';
import '../../css/ContrastToggle.css'; // Separate file for styling

function ContrastToggle() {
  // State to manage high contrast mode
  const [highContrast, setHighContrast] = useState(false);

  // Function to toggle high contrast mode
  const toggleContrast = () => {
    setHighContrast(!highContrast);
  };

  return (
    <div className={`contrast-container ${highContrast ? 'high-contrast' : 'normal-contrast'}`}>
      {/* TODO: Ensure the button is accessible with proper ARIA attributes */}
      {/* Bug 2: The aria-pressed attribute is incorrectly implemented. */}
      <button 
        onClick={toggleContrast} 
        aria-pressed="false" // This should dynamically change based on state
        // Bug 3: The aria-label is missing. Participants should add an appropriate label.
        className="contrast-toggle-button"
      >
        {highContrast ? 'Switch to Normal Contrast' : 'Switch to High Contrast'}
      </button>

      {/* Sample text to demonstrate contrast toggling */}
      <p className="sample-text">This is a sample text to demonstrate contrast toggling.</p>

      {/* TODO: Add more text elements with varying sizes to test contrast */}
      {/* Bug 4: There's no consideration for different text sizes. Participants should add and style various text elements. */}
    </div>
  );
}

export default ContrastToggle;
