import React from 'react';
import './Button.css'; // Import the button's own styling

const Button = ({ text }) => {
  return (
    <button className="login-button">
      {text}
    </button>
  );
};

export default Button;
