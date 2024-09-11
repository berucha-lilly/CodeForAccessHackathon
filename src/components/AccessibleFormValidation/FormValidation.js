// FormValidation.js
// Challenge: Accessible Form Validation
// Objective: Create a simple form with real-time, accessible error messaging. Ensure error messages are clear, descriptive, screen-reader friendly, and visually displayed without relying solely on color.

import React, { useState } from 'react';
import '../../css/FormValidation.css'; // Separate file for styling

function FormValidation() {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateInput = (value) => {
    if (value.trim() === '') {
      setErrorMessage('This field is required. Please enter some text.');
    } else {
      setErrorMessage('');
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    validateInput(value);
    setIsSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateInput(inputValue);

    if (inputValue.trim() !== '') {
      setIsSubmitted(true);
      alert('Form submitted successfully!');
      // Further processing of valid form input can be implemented here
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="inputField">Enter text:</label>
        <input
          id="inputField"
          type="text"
          value={inputValue}
          onChange={handleChange}
          aria-invalid={!!errorMessage}
          aria-describedby={errorMessage ? "error-message" : undefined}
        />
      </div>
      <button type="submit">Submit</button>
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
      {isSubmitted && !errorMessage && (
        <div 
          className="success-message" 
          role="status"
          aria-live="polite"
        >
          Form submitted successfully!
        </div>
      )}
    </form>
  );
}

export default FormValidation;
