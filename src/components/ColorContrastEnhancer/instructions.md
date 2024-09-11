# Color Contrast Enhancer Challenge

## Objective

Your task is to create a button that toggles between normal and high-contrast modes (or debug the one provided), improving readability for users with visual impairments. The high-contrast mode should adjust text and background colors to meet WCAG 2.1 AA standards for color contrast.

## Getting Started

1. **Open the Starter Code:**
   - Navigate to the `ContrastToggle.js` file in this folder or create a new file to start from scratch.
   - Also, open the `ContrastToggle.css` file or create one if working from scratch.
     
2. **Understand the Current Setup:**
   - The JS file includes a button and a text section that changes its appearance based on the `highContrast` state.
   - The CSS file contains basic styling for the component.
   - There are intentional bugs and areas for improvement marked with TODOs in both files.

3. **Your Task:**
   - Debug and enhance the current implementation to meet the following criteria:
     - Adjust colors to ensure high contrast that meets WCAG 2.1 AA standards.
     - Update the button's accessibility features.
     - Ensure that the feature is keyboard accessible.
     - Implement styles for different text sizes.

4. **Steps to Complete:**
   - **In ContrastToggle.js:**
     - Step 1: Fix the `aria-pressed` attribute to correctly reflect the button's state.
     - Step 2: Add an appropriate `aria-label` to the button.
     - Step 3: Ensure the toggle function correctly updates the component's state.

   - **In ContrastToggle.css:**
     - Step 4: Update color values for both normal and high-contrast modes to meet WCAG 2.1 AA standards.
     - Step 5: Implement clear focus styles for keyboard navigation.
     - Step 6: Add styles for different text sizes to ensure readability in both modes.

5. **Testing Your Work:**
   - Use accessibility testing tools like [Chrome's Lighthouse audit](https://developer.chrome.com/docs/lighthouse/overview#get-started) to check color contrast compliance.
   - Test keyboard accessibility to ensure all functionality can be operated without a mouse.
   - Use a screen reader to verify that the button state is properly announced.

## Tips and Hints

- Use online tools like the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) to test color contrast ratios.
- Remember to style both the button and the text content for different contrast modes.
- Use CSS classes to manage different contrast modes instead of inline styles.

## Resources

- Refer to the `/resources/AccessibilityGuide.md` for more tips on color contrast and accessible design.
- Use `/resources/ReactCheatSheet.md` if you need a refresher on React basics.
- Check [MDN's guide on ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) for proper use of ARIA attributes.
