// FormValidation.js
// Challenge: Accessible Form Validation
// Objective: Create a simple form with real-time, accessible error messaging. Ensure error messages are clear, descriptive, screen-reader friendly, and visually displayed without relying solely on color.

import React, { useState } from "react";
import "../../css/FormValidation.css";

function FormValidation() {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value === "") {
      setErrorMessage("Error: This field is required.");
    } else {
      setErrorMessage("");
    }
    // TODO 1: Implement real-time validation here
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Bug 1: The validation logic is incorrect - it triggers an error when input is not empty
    if (inputValue === "") {
      setErrorMessage("Error: This field is required.");
    } else {
      setErrorMessage("");
      alert("Form submitted successfully!");
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
        tabIndex={1}
      />
      <button
        className={inputValue === "" ? "disabledButton" : "button"}
        disabled={inputValue === ""}
        aria-disabled={inputValue === ""}
        type="submit"
        tabIndex={2}
      >
        Submit
      </button>
      {/* Bug 2: The error message lacks proper accessibility attributes */}
      {errorMessage && (
        <span
          aria-live="assertive"
          aria-label="Error"
          id="error-message"
          style={{ color: "red" }}
        >
          {errorMessage}
        </span>
      )}
    </form>
  );
}

export default FormValidation;
