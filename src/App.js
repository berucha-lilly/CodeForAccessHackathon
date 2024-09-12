// App.js
import React, { useState, useEffect } from 'react';
// If you're building components from scratch, you'll need to create these files
// in the appropriate directories and import them here
import ContrastToggle from './components/ColorContrastEnhancer/ContrastToggle';
import FormValidation from './components/AccessibleFormValidation/FormValidation';
import KeyboardNav from './components/KeyboardFriendlyNavigation/KeyboardNav';
import './css/App.css';

function App() {
  // State to track which component is selected
  const [activeComponent, setActiveComponent] = useState('ContrastToggle');

  return (
    <div className="App">
      <header>
        <h1>Accessibility Feature Demo</h1>
      </header>

      {/* Only the selected component will be rendered */}
      {/* If building from scratch, ensure your component names match these exactly */}
      {activeComponent === 'ContrastToggle' && <ContrastToggle />}
      {activeComponent === 'FormValidation' && <FormValidation />}
      {activeComponent === 'KeyboardNav' && <KeyboardNav />}

      {/* Radio buttons to select the active component */}
      <div className="radio-group" role="radiogroup" aria-labelledby="component-selector">
        <label id="component-selector">Select a component:</label>
        <label>
          <input
            type="radio"
            name="component"
            value="ContrastToggle"
            checked={activeComponent === 'ContrastToggle'}
            onChange={() => setActiveComponent('ContrastToggle')}
          />
          Contrast Toggle
        </label>
        <label>
          <input
            type="radio"
            name="component"
            value="FormValidation"
            checked={activeComponent === 'FormValidation'}
            onChange={() => setActiveComponent('FormValidation')}
          />
          Form Validation
        </label>
        <label>
          <input
            type="radio"
            name="component"
            value="KeyboardNav"
            checked={activeComponent === 'KeyboardNav'}
            onChange={() => setActiveComponent('KeyboardNav')}
          />
          Keyboard Navigation
        </label>
      </div>

      {/* 
        If you're building from scratch, your component should:
        - For ContrastToggle: Implement a button that toggles between normal and high-contrast modes
        - For FormValidation: Create a form with accessible, real-time error messaging
        - For KeyboardNav: Design a navigation menu that's fully functional with keyboard controls
      */}
    </div>
  );
}

export default App;
