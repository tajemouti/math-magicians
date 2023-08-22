import React, { useState } from 'react';
import Button from './Button';
import calculate from '../logic/calculate';
import '../App.css';

const Calculator = () => {
  const [calculation, setCalculation] = useState({});

  const handleClick = (buttonName) => {
    const newCalculation = calculate(calculation, buttonName);
    setCalculation(newCalculation);
  };

  return (
    <div id="main">
      <h2>Let&apos;s do some math!</h2>
      <div className="calcul">
        <div className="result">{calculation.next || calculation.total || '0'}</div>
        <div className="row">
          <Button label="AC" onClick={() => handleClick('AC')} />
          <Button label="+/-" onClick={() => handleClick('+/-')} />
          <Button label="%" onClick={() => handleClick('%')} />
          <Button label="÷" type="orange" onClick={() => handleClick('÷')} />
        </div>
        <div className="row">
          <Button label="7" onClick={() => handleClick('7')} />
          <Button label="8" onClick={() => handleClick('8')} />
          <Button label="9" onClick={() => handleClick('9')} />
          <Button label="x" type="orange" onClick={() => handleClick('x')} />
        </div>
        <div className="row">
          <Button label="4" onClick={() => handleClick('4')} />
          <Button label="5" onClick={() => handleClick('5')} />
          <Button label="6" onClick={() => handleClick('6')} />
          <Button label="-" type="orange" onClick={() => handleClick('-')} />
        </div>
        <div className="row">
          <Button label="1" onClick={() => handleClick('1')} />
          <Button label="2" onClick={() => handleClick('2')} />
          <Button label="3" onClick={() => handleClick('3')} />
          <Button label="+" type="orange" onClick={() => handleClick('+')} />
        </div>
        <div className="row">
          <Button label="0" type="zero" onClick={() => handleClick('0')} />
          <Button label="." onClick={() => handleClick('.')} />
          <Button label="=" type="orange" onClick={() => handleClick('=')} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
