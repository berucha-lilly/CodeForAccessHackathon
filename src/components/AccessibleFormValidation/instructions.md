# Accessible Form Validation Challenge

## Objective

Your task is to create a simple form (or debug the one provided) with real-time, accessible error messaging. Error messages should be clear, descriptive, screen-reader friendly, and visually displayed without relying solely on color.

## Getting Started

1. **Open the Starter Code:**
   - Navigate to the `FormValidation.js` file in this folder or create a new file to start from scratch. 

2. **Understand the Current Setup:**
   - The starter code includes a basic form with an input field and submit button. It currently displays a simple error message if the input is empty.

3. **Your Task:**
   - Debug and enhance the form validation to meet accessibility standards:
     - Fix the validation logic to correctly handle empty inputs.
     - Ensure error messages are announced by screen readers.
     - Use ARIA attributes to enhance form elements for accessibility.
     - Add visual indicators for errors that do not rely solely on color.

4. **Steps to Complete:**
   - **Step 1:** Debug the validation logic in the `handleSubmit` function.
   - **Step 2:** Implement real-time validation in the `handleChange` function.
   - **Step 3:** Add appropriate ARIA attributes to the input field and error message.
   - **Step 4:** Modify the error message styling to include symbols or other non-color indicators.
   - **Step 5:** Ensure the success alert is triggered only on successful form submission.
     
5. **Testing Your Work:**
   - Use screen readers like NVDA (Windows) or VoiceOver (Mac) to check if error messages are announced.
   - Test the form’s keyboard navigation to ensure full accessibility.
   - Verify that the form behaves correctly for both valid and invalid inputs.

## Tips and Hints

- Use `aria-live="assertive"` for error messages to ensure they are announced immediately.
- Ensure all form elements have proper labels using `label` tags or `aria-label` attributes.
- Consider using `aria-invalid` and `aria-describedby` to enhance the accessibility of the input field.

## Resources

- Refer to the `/resources/AccessibilityGuide.md` for more on accessible forms.
- Check the `/resources/GitGuide.md` if you need help pushing your changes.
