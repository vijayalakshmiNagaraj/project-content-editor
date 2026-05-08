import React from 'react';
import './Styles.css'; // Direct CSS import

const Toggle = ({ 
  isOn, 
  onToggle, 
  id, 
  disabled = false 
}) => {
  return (
    <label className={`core-toggle ${disabled ? 'core-toggle--disabled' : ''}`}>
      <input
        id={id}
        type="checkbox"
        checked={isOn}
        onChange={onToggle}
        disabled={disabled}
        className="core-toggle__input"
      />
      <span className="core-toggle__slider" />
    </label>
  );
};

export default Toggle;