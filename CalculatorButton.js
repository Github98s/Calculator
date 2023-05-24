import React from 'react';

function CalculatorButton({ label, handleButtonClick }) {
  const handleClick = () => {
    handleButtonClick(label);
  };

  return (
    <button className="calculator-button" onClick={handleClick}>
      {label}
    </button>
  );
}

export default CalculatorButton;
