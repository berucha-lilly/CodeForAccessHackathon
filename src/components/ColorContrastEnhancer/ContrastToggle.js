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
      {/* Bug 1 Fixed: The aria-pressed attribute now correctly reflects the button state */}
      <button 
        onClick={toggleContrast} 
        aria-pressed={highContrast}
        className="contrast-toggle-button"
      >
        {highContrast ? 'Switch to Normal Contrast' : 'Switch to High Contrast'}
      </button>

      {/* TODO 1 Completed: Added more text elements with varying sizes to test contrast */}
      <h1 className="sample-heading">Large Heading</h1>
      <h2 className="sample-subheading">Subheading</h2>
      <p className="sample-text">This is a sample text to demonstrate contrast toggling.</p>
      <small className="sample-small-text">This is smaller text for testing purposes.</small>
    </div>
  );
}

export default ContrastToggle;
