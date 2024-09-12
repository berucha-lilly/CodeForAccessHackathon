// FormValidation.js
// Challenge: Accessible Form Validation
// Objective: Create a simple form with real-time, accessible error messaging. Ensure error messages are clear, descriptive, screen-reader friendly, and visually displayed without relying solely on color.

import React, { useState } from 'react';
import '../../css/FormValidation.css';

function FormValidation() {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [realTimeValidationErr, setRealTimeValidationErr] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
    // TODO 1: Implement real-time validation here
    // TODO 1: Implemented
    if (e.target.value === '') {
      setRealTimeValidationErr('This field is required.');
    }
    else {
      setRealTimeValidationErr('');
    }

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Bug 1: Resolved
    // Bug 1: The validation logic is incorrect - it triggers an error when input is not empty
    if (inputValue === '') {
      setErrorMessage('This field is required.');
    } else {
      setErrorMessage('');
      alert('Form submitted successfully!');
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
      />
      {realTimeValidationErr && (
        <span id="real-time-error" style={{ color: 'red' }}>
          {realTimeValidationErr}
        </span>
      )}
      <button type="submit">Submit</button>
      {/* Bug 2: The error message lacks proper accessibility attributes */}
      {errorMessage && (
        <span id="error-message" style={{ color: 'red' }}>
          {errorMessage}
        </span>
      )}
      {/* TODO 2: Add success message display */}
    </form>
  );
}

export default FormValidation;
