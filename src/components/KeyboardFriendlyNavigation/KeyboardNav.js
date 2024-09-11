// KeyboardNav.js
// Challenge: Keyboard-Friendly Navigation
// Objective: Design a navigation menu that is fully functional with keyboard controls. Users should be able to navigate through the menu using the keyboard without relying on a mouse.

import React, { useState } from 'react';
import '../../css/KeyboardNav.css';

function KeyboardNav() {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const items = ['Home', 'About', 'Services', 'Contact'];

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      // Bug 1 Fix: Corrected the logic for moving down the menu
      // Changed from decrementing to incrementing, and simplified the modulo operation
      setFocusedIndex((prevIndex) => (prevIndex + 1) % items.length);
    } else if (e.key === 'ArrowUp') {
      // TODO 1 Solution: Implemented logic to move focus up the menu
      // Added logic similar to ArrowDown, but decrementing and handling negative numbers
      setFocusedIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    } else if (e.key === 'Enter') {
      // Bug 2 Fix: Implemented correct alert to show the selected item
      alert(`You selected: ${items[focusedIndex]}`);
    }
  };

  return (
    <nav className="keyboard-nav">
      <ul>
        {items.map((item, index) => (
          <li
            key={item}
            // Changed tabIndex to allow focus on the current item
            tabIndex={index === focusedIndex ? 0 : -1}
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
