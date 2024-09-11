# Keyboard-Friendly Navigation Challenge

## Objective

Your task is to design a navigation menu that is fully functional with keyboard controls (or debug the one provided). Users should be able to navigate through the menu using the keyboard without relying on a mouse.

## Getting Started

1. **Open the Starter Code:**
   - Navigate to the `KeyboardNav.js` file in this folder or create a new file to start from scratch.
   - Also, open the `KeyboardNav.css` file or create one if working from scratch.

2. **Understand the Current Setup:**
   - The JS file includes a basic navigation menu with several items.
   - The CSS file contains basic styling for the navigation menu.
   - There are intentional bugs and areas for improvement marked with TODOs in both files.

3. **Your Task:**
   - Debug and enhance the navigation to ensure keyboard accessibility:
     - Fix the keyboard navigation logic.
     - Implement proper focus management.
     - Ensure that the focus state is visible and meets accessibility standards.

4. **Steps to Complete:**
   - **In KeyboardNav.js:**
     - Step 1: Debug the logic for moving focus down the menu using the down arrow key.
     - Step 2: Implement the missing logic for moving focus up the menu using the up arrow key.
     - Step 3: Fix the item selection behavior when pressing the Enter key.
     - Step 4: Correct the `tabIndex` implementation for proper keyboard navigation.

   - **In KeyboardNav.css:**
     - Step 5: Implement proper focus styles to ensure visibility.
     - Step 6: Ensure sufficient color contrast for focused items.
     - Step 7: Add distinct styles for keyboard focus vs. mouse hover.

5. **Testing Your Work:**
   - Use keyboard-only navigation to ensure all items can be accessed and selected.
   - Check that focus indicators are clearly visible and meet accessibility standards.
   - Test the wrapping behavior when reaching the top or bottom of the menu.

## Tips and Hints

- Use the `focus` and `focus-visible` pseudo-classes in CSS to style focused elements appropriately.
- Ensure that the focus wraps correctly when reaching the top or bottom of the list.
- Consider using ARIA attributes to enhance accessibility for screen readers.

## Resources

- Review the `/resources/AccessibilityGuide.md` for detailed tips on keyboard navigation and focus management.
- Use `/resources/ReactCheatSheet.md` for React-specific help and best practices.
- Refer to [WCAG 2.1 guidelines on keyboard accessibility](https://www.w3.org/WAI/WCAG21/Understanding/keyboard-accessible) for best practices.
