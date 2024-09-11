// FormValidation.js
// Challenge: Accessible Form Validation
// Objective: Create a simple form with real-time, accessible error messaging. Ensure error messages are clear, descriptive, screen-reader friendly, and visually displayed without relying solely on color.

import React, { useState } from 'react';

function FormValidation() {
  // State to manage input value and error message
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    setInputValue(e.target.value);
    // Clear error when the user starts typing
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement validation logic to check if input is empty
    // Bug 1: Fix the bug in line below
    if (inputValue.trim() !== '') {
      setErrorMessage('This field is required.');
    } else {
      setErrorMessage('');
      // TODO: Implement form submission logic or further processing
      // Bug 2: Find correct positioning for the alret statement below
    }
    alert('Form submitted successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="inputField">Enter text:</label>
      <input
        id="inputField"
        type="text"
        value={inputValue}
        onChange={handleChange}
        aria-invalid={!!errorMessage} // Indicates invalid state to screen readers
        aria-describedby="error-message" // Links input to error message for screen readers
      />
      <button type="submit">Submit</button>
      {/* TODO: Bug 3: Ensure error message below has correct styles that it is accessible when announced by screen readers */}
      {errorMessage && (
        <span id="error-message" role="alert" style={{ color: 'white' }}>
          {errorMessage}
        </span>
      )}
    </form>
  );
}

export default FormValidation;
