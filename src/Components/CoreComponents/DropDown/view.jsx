import React, { useState, useEffect, useRef } from 'react';
import './Styles.css';

const DropDown = ({ trigger, items = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="core-dropdown" ref={dropdownRef}>
      <div className="core-dropdown__trigger" onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>

      {isOpen && (
        <div className="core-dropdown__menu">
          {items.map((item, index) => {
            if (item.type === 'divider') {
              return <div key={index} className="dropdown-divider" />;
            }

            return (
              <div 
                key={index} 
                className={`dropdown-item ${item.isActive ? 'dropdown-item--active' : ''}`}
                onClick={(e) => {
                  // Execute the selection/click logic
                  if (item.onClick) item.onClick(e);
                  
                  // Close the dropdown ONLY if keepOpen is not true
                  if (!item.keepOpen) {
                    setIsOpen(false);
                  }
                }}
              >
                <span className="dropdown-item__label">{item.label}</span>
                <div className="dropdown-item__right">
                  {item.rightElement}
                  {/* The dot now appears dynamically based on isActive state */}
                  {item.isActive && <div className="update-dot" />}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DropDown;