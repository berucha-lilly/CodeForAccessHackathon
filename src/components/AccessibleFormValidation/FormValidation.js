import React, { useState } from 'react';
import '../../css/FormValidation.css';

function FormValidation() {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
    // TODO 1: Implement real-time validation here
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Bug 1: Fix the validation logic - it should trigger an error when input is empty
    if (inputValue !== '') {
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
