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
    // TODO: Debug validation logic to ensure input is correctly validated
    // Bug 1: Fix the bug in the line below - validation should trigger error when input is empty
    if (inputValue.trim() === '') {
      setErrorMessage('This field is required.');
      // Bug 2: Find correct positioning for the alert statement below to only trigger on successful submission
    } else {
      setErrorMessage('');
      alert('Form submitted successfully!'); // Consider relocating this to correctly align with validation logic
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
        aria-invalid={!!errorMessage} // Indicates invalid state to screen readers
        aria-describedby="error-message" // Links input to error message for screen readers
      />
      <button type="submit">Submit</button>
      {/* TODO: Bug 3: Ensure error message has correct styles to be accessible when announced by screen readers */}
      {errorMessage && (
        <span id="error-message" role="alert" style={{ color: 'white' }}>
          {errorMessage}
        </span>
      )}
    </form>
  );
}

export default FormValidation;
