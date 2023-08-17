import React from 'react';
import Button from './Button';
import '../App.css';

const Calculator = () => (
  <div>
    <div className="result">0</div>
    <div className="row">
      <Button label="AC" />
      <Button label="+/-" />
      <Button label="%" />
      <Button label="÷" type="operation" />
    </div>
    <div className="row">
      <Button label="7" />
      <Button label="8" />
      <Button label="9" />
      <Button label="x" type="operation" />
    </div>
    <div className="row">
      <Button label="4" />
      <Button label="5" />
      <Button label="6" />
      <Button label="-" type="operation" />
    </div>
    <div className="row">
      <Button label="1" />
      <Button label="2" />
      <Button label="3" />
      <Button label="+" type="operation" />
    </div>
    <div className="row">
      <Button label="0" type="zero" />
      <Button label="." />
      <Button label="=" type="operation" />
    </div>
  </div>
);

export default Calculator;
