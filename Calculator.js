import React, { useState } from 'react';
import CalculatorButtonGrid from './CalculatorButtonGrid';
import './App.css';

function Calculator() {
  const [displayValue, setDisplayValue] = useState('');

  const handleButtonClick = (label) => {
    if (label === '=') {
      try {
        const result = Function(`return ${displayValue}`)();
        setDisplayValue(result.toString());
      } catch (error) {
        setDisplayValue('Error');
      }
    } else if (label === 'C') {
      setDisplayValue('');
    } else {
      setDisplayValue((prevDisplayValue) => prevDisplayValue + label);
    }
  };
  
  return (
    
    <div className="calculator">
        <p>CALCULATOR</p>
      <input type="text" value={displayValue} readOnly />
      <CalculatorButtonGrid handleButtonClick={handleButtonClick} />
    </div>
  );
}

export default Calculator;
