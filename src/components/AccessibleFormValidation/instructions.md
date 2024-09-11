# Accessible Form Validation Challenge

## Objective

Your task is to create a simple form (or debug the one provided) with real-time, accessible error messaging. Error messages should be clear, descriptive, screen-reader friendly, and visually displayed without relying solely on color.

## Getting Started

1. **Open the Starter Code:**
   - Navigate to the `FormValidation.js` file in this folder or create a new file to start from scratch.
   - Also, open the `FormValidation.css` file or create one if working from scratch.

2. **Understand the Current Setup:**
   - The JS file includes a form with an input field and submit button.
   - There are intentional bugs and areas for improvement marked with TODOs.
   - The CSS file contains basic styling for the form elements.

3. **Your Task:**
   - Debug and enhance the form validation to meet accessibility standards:
     - Fix the validation logic to correctly handle empty inputs.
     - Ensure error messages are announced by screen readers.
     - Use ARIA attributes to enhance form elements for accessibility.
     - Add visual indicators for errors that do not rely solely on color.
     - Improve the CSS to enhance visual accessibility.

4. **Steps to Complete:**
   - **In FormValidation.js:**
     - Step 1: Debug the validation logic in the `handleSubmit` function.
     - Step 2: Implement real-time validation in the `handleChange` function.
     - Step 3: Add appropriate ARIA attributes to the input field and error message.
     - Step 4: Ensure the success alert is triggered only on successful form submission.

   - **In FormValidation.css:**
     - Step 5: Enhance the styling of form elements for better visual accessibility.
     - Step 6: Create styles for error states that don't rely solely on color.
     - Step 7: Ensure sufficient color contrast for all text elements.
     
5. **Testing Your Work:**
   - Use screen readers to check if error messages are announced.
   - Test the form's keyboard navigation.
   - Verify form behavior for valid and invalid inputs.
   - Check visual accessibility using tools like the WAVE browser extension.

## Tips and Hints

- Use `aria-live="assertive"` for error messages.
- Ensure proper labeling with `label` tags or `aria-label` attributes.
- In CSS, consider using `:focus` styles for keyboard navigation.
- Use symbols or patterns in addition to color for indicating errors.

## Resources

- Refer to the `/resources/AccessibilityGuide.md` for more on accessible forms.
- Check the `/resources/GitGuide.md` if you need help pushing your changes.
- Visit [WebAIM's Color Contrast Checker](https://webaim.org/resources/contrastchecker/) for color contrast guidelines.
