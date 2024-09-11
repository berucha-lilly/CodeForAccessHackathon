// FormValidation.js
// Challenge: Accessible Form Validation
// Objective: Create a simple form with real-time, accessible error messaging. Ensure error messages are clear, descriptive, screen-reader friendly, and visually displayed without relying solely on color.

import React, { useState } from 'react';
import '../../css/FormValidation.css'; // Separate file for styling

function FormValidation() {
  // State to manage input value and error message
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    setInputValue(e.target.value);
    // TODO: Implement real-time validation here
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Debug validation logic to ensure input is correctly validated
    // Bug 1: Fix the bug in the line below - validation should trigger error when input is empty
    if (inputValue !== '') {
      setErrorMessage('This field is required.');
    } else {
      setErrorMessage('');
      // Bug 2: Find correct positioning for the alert statement below to only trigger on successful submission
      alert('Form submitted successfully!');
      // TODO: Implement further processing of valid form input
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="inputField">Enter text:</label>
      <input
        id="inputField"
        type="text"
        value={inputValue}
        onChange={handleChange}
        // TODO: Add appropriate ARIA attributes for accessibility
      />
      <button type="submit">Submit</button>
      {/* TODO: Bug 3: Ensure error message has correct styles and ARIA attributes to be accessible */}
      {errorMessage && (
        <span id="error-message" style={{ color: 'red' }}>
          {errorMessage}
        </span>
      )}
    </form>
  );
}

export default FormValidation;
