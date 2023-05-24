import React from 'react';
import CalculatorButton from './CalculatorButton';

function CalculatorButtonGrid({ handleButtonClick }) {
  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', 'C', '=', '+',
  ];

  return (
    <div className="calculator-button-grid">
      {buttons.map((label) => (
        <CalculatorButton
          key={label}
          label={label}
          handleButtonClick={handleButtonClick}
        />
      ))}
    </div>
  );
}

export default CalculatorButtonGrid;
