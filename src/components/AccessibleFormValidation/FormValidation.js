// FormValidation.js
// Challenge: Accessible Form Validation
// Objective: Create a simple form with real-time, accessible error messaging. Ensure error messages are clear, descriptive, screen-reader friendly, and visually displayed without relying solely on color.

import React, { useState } from 'react';
import '../../css/FormValidation.css';

function FormValidation() {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // Added state for success message

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    // TODO 1 Solution: Implemented real-time validation
    // Check if the trimmed input is empty and set error message accordingly
    if (value.trim() === '') {
      setErrorMessage('This field is required.');
    } else {
      setErrorMessage('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Bug 1 Fix: Changed condition from !== to === to check for empty input
    // Also added trim() to remove whitespace
    if (inputValue.trim() === '') {
      setErrorMessage('This field is required.');
      setSuccessMessage('');
    } else {
      setErrorMessage('');
      setSuccessMessage('Form submitted successfully!'); // Set success message instead of alert
      setInputValue(''); // Clear input after successful submission
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
        aria-invalid={errorMessage !== ''} // Added to indicate invalid input
        aria-describedby={errorMessage ? 'error-message' : undefined} // Links input to error message
      />
      <button type="submit">Submit</button>
      {/* Bug 2 Fix: Replaced span with div, added accessibility attributes */}
      {errorMessage && (
        <div 
          id="error-message" 
          className="error-message" 
          role="alert"
          aria-live="assertive"
        >
          {errorMessage}
        </div>
      )}
      {/* TODO 2 Solution: Added success message display */}
      {successMessage && (
        <div 
          id="success-message" 
          className="success-message" 
          role="status"
          aria-live="polite"
        >
          {successMessage}
        </div>
      )}
    </form>
  );
}

export default FormValidation;
