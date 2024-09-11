// KeyboardNav.js
// Challenge: Keyboard-Friendly Navigation
// Objective: Design a navigation menu that is fully functional with keyboard controls. Users should be able to navigate through the menu using the keyboard without relying on a mouse.

import React, { useState } from 'react';
import './KeyboardNav.css'; // Import the CSS file

function KeyboardNav() {
  // State to manage which menu item is currently focused
  const [focusedIndex, setFocusedIndex] = useState(0);
  // Sample navigation items
  const items = ['Home', 'About', 'Services', 'Contact'];

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      // TODO: Debug logic to move focus down the menu
      // Bug 1: The logic is incorrect for moving down the menu
      setFocusedIndex((prevIndex) => (prevIndex - 1) % items.length);
    } else if (e.key === 'ArrowUp') {
      // TODO: Implement logic to move focus up the menu
      // Bug 2: Logic for moving up the menu is missing
      console.log('Up arrow pressed');
    } else if (e.key === 'Enter') {
      // TODO: Implement item selection behavior
      // Bug 3: The alert is not implemented correctly
      alert('You selected an item');
    }
  };

  return (
    <nav className="keyboard-nav">
      <ul>
        {items.map((item, index) => (
          <li
            key={item}
            // Bug 4: The tabIndex is not implemented correctly
            tabIndex={-1}
            onKeyDown={handleKeyDown}
            className={focusedIndex === index ? 'focused' : ''}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default KeyboardNav;
