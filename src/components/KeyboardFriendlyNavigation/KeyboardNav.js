// KeyboardNav.js
// Challenge: Keyboard-Friendly Navigation
// Objective: Design a navigation menu that is fully functional with keyboard controls. Users should be able to navigate through the menu using the keyboard without relying on a mouse.

import React, { useState } from 'react';

function KeyboardNav() {
  // State to manage which menu item is currently focused
  const [focusedIndex, setFocusedIndex] = useState(0);
  // Sample navigation items
  const items = ['Home', 'About', 'Services', 'Contact'];

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      // TODO: Debug logic to move focus down the menu
      // Bug 1: Adjust logic - should ADD to prevIndex instead of subtracting to navigate correctly down
      setFocusedIndex((prevIndex) => (prevIndex + 1) % items.length);
    } else if (e.key === 'ArrowUp') {
      // TODO: Debug logic to move focus up the menu
      // Bug 2: Ensure that the focus wraps correctly when reaching the top of the list; check if wrapping logic works as expected
      setFocusedIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    } else if (e.key === 'Enter') {
      // TODO: Validate item selection behavior and confirm that alerts display the correct item
      // Bug 3: Verify that the alert shows the right selected item when pressing Enter; ensure no unexpected behavior occurs
      alert(`You selected ${items[focusedIndex]}`);
    }
  };

  return (
    <nav>
      <ul>
        {items.map((item, index) => (
          <li
            key={item}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            style={{
              // TODO: Debug styling to ensure focus visibility - outline should clearly indicate focused state
              // Bug 4: Verify that the outline is visible and consistent across all browsers; check that color contrast is sufficient for accessibility
              backgroundColor: focusedIndex === index ? '#e0e0e0' : 'transparent',
              padding: '8px',
              cursor: 'pointer',
              outline: focusedIndex === index ? '2px solid blue' : 'none' // Confirm that outline correctly highlights the focused item
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default KeyboardNav;
