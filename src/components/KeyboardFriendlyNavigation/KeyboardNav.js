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
      // TODO: Implement logic to move focus down the menu
      // Bug 1: you might want to ADD to prevIndex instead of substract
      setFocusedIndex((prevIndex) => (prevIndex - 1) % items.length);
    } else if (e.key === 'ArrowUp') {
      // TODO: Implement logic to move focus up the menu
      setFocusedIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    } else if (e.key === 'Enter') {
      // TODO: Implement logic to handle item selection
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
              backgroundColor: focusedIndex === index ? '#e0e0e0' : 'transparent',
              padding: '8px',
              cursor: 'pointer',
              outline: focusedIndex === index ? '2px solid blue' : 'none'
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
