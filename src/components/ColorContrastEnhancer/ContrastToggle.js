// ContrastToggle.js
// Challenge: Color Contrast Enhancer
// Objective: Create a button that toggles between normal and high-contrast modes, improving readability for users with visual impairments.

import React, { useState, useEffect } from 'react';
import './ContrastToggle.css';

function ContrastToggle() {
  const [highContrast, setHighContrast] = useState(false);

  const toggleContrast = () => {
    setHighContrast(!highContrast);
  };

  useEffect(() => {
    // Apply contrast mode to the entire document
    document.body.classList.toggle('high-contrast', highContrast);
  }, [highContrast]);

  return (
    <div className="contrast-container">
      <button 
        onClick={toggleContrast} 
        aria-pressed={highContrast}
        aria-label={highContrast ? "Switch to Normal Contrast" : "Switch to High Contrast"}
        className="contrast-toggle-button"
      >
        {highContrast ? 'Switch to Normal Contrast' : 'Switch to High Contrast'}
      </button>

      <h1 className="sample-heading">Color Contrast Demo</h1>
      <p className="sample-text">This is a sample text to demonstrate contrast toggling.</p>
      <p className="sample-text-small">This is smaller text to test readability in both modes.</p>
      <h2 className="sample-subheading">Subheading Example</h2>
      <p className="sample-text-large">This is larger text to ensure readability across sizes.</p>
      <a href="#" className="sample-link">This is a sample link</a>
    </div>
  );
}

export default ContrastToggle;
