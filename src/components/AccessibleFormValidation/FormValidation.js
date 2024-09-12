// FormValidation.js
// Challenge: Accessible Form Validation
// Objective: Create a simple form with real-time, accessible error messaging. Ensure error messages are clear, descriptive, screen-reader friendly, and visually displayed without relying solely on color.

import React, { useState } from 'react';
import '../../css/FormValidation.css';

function FormValidation() {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [realTimeValidationErr, setRealTimeValidationErr] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

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
    const successMsg = 'Form submitted successfully!';
    e.preventDefault();
    // Bug 1: Resolved
    // Bug 1: The validation logic is incorrect - it triggers an error when input is not empty
    if (inputValue === '') {
      setErrorMessage('Invalid form inputs');
      setSuccessMessage('');
    } else {
      setErrorMessage('');
      setSuccessMessage(successMsg);
      alert(successMsg);
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
        <span id="real-time-error" style={{ color: 'red' }} role='alert' aria-live="assertive">
          {realTimeValidationErr}
        </span>
      )}
      <br/>
      <button type="submit">Submit</button>
      {/* Bug 2: The error message lacks proper accessibility attributes */}
      {errorMessage && (
        <span id="error-message" style={{ color: 'red' }} role='alert' aria-live="assertive">
          <br/>
          {errorMessage}
        </span>
      )}
      {/* TODO 2: Add success message display */}
      {successMessage && (
        <span id="success-message" style={{ color: 'green' }} role='alert' aria-live="assertive">
          <br/>
          {successMessage}
        </span>
      )}
    </form>
  );
}

export default FormValidation;
