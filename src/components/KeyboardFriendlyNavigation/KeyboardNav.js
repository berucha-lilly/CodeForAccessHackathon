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
      // Bug 1: The logic is incorrect for moving down the menu
      setFocusedIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    } else if (e.key === 'ArrowUp') {
      // TODO 1: Implement logic to move focus up the menu
      setFocusedIndex((prevIndex) => (prevIndex + 1 + items.length) % items.length);
      console.log('Up arrow pressed');
    } else if (e.key === 'Enter') {
      // Bug 2: The alert is not implemented correctly
      alert('You selected: ${items[focusedIndex]}');
    }
  };

  return (
    <nav className="keyboard-nav">
      <ul>
        {items.map((item, index) => (
          <li
            key={item}
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
