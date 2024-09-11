// KeyboardNav.js
// Challenge: Keyboard-Friendly Navigation
// Objective: Design a navigation menu that is fully functional with keyboard controls. Users should be able to navigate through the menu using the keyboard without relying on a mouse.

import React, { useState, useRef, useEffect } from 'react';
import './KeyboardNav.css'; // Import the CSS file

function KeyboardNav() {
  // State to manage which menu item is currently focused
  const [focusedIndex, setFocusedIndex] = useState(0);
  // Sample navigation items
  const items = ['Home', 'About', 'Services', 'Contact'];
  // Ref for the nav element
  const navRef = useRef(null);

  // Handle keyboard navigation
  const handleKeyDown = (e, index) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex((prevIndex) => (prevIndex + 1) % items.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        alert(`You selected ${items[index]}`);
        break;
      default:
        break;
    }
  };

  // Focus management
  useEffect(() => {
    const focusedElement = navRef.current.querySelector(`li:nth-child(${focusedIndex + 1})`);
    if (focusedElement) {
      focusedElement.focus();
    }
  }, [focusedIndex]);

  return (
    <nav className="keyboard-nav" ref={navRef}>
      <ul>
        {items.map((item, index) => (
          <li
            key={item}
            tabIndex={focusedIndex === index ? 0 : -1}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={focusedIndex === index ? 'focused' : ''}
            role="menuitem"
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default KeyboardNav;
