import React, { useState, useEffect } from 'react';
import './App.css';

import ButtonGrid from './components/ButtonGrid/index';
import InputDisplay from './components/InputDisplay/index';

const validKeys = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '=', '-', '/', '*', 'Enter', 'Escape', '.']);

const App = () => {

  const [operator, updateOperator] = useState(null);
  const [num1, updateNum1] = useState('');
  const [num2, updateNum2] = useState('');

  useEffect(() => {
    window.addEventListener('keydown', convertKeyToInput);
    return () => {
      window.removeEventListener('keydown', convertKeyToInput);
    };
  });

  const convertKeyToInput = ({ key }) => {
    if (!validKeys.has(key)) return;

    if (key === 'Escape') {
      key = 'clear';
    }

    if (key === 'Enter') {
      key = '=';
    }

    if (key === '*') {
      key = 'x';
    }

    onUserInput(key);
  };

  const onUserInput = (val) => {
    if (val === 'clear') {
      handleClear();
    } else if (val === '+' || val === 'x' || val === '-' || val === '/') {
      updateOperator(val);
    } else if (val === '=') {
      if (num1 !== '' && num2 !== '' && operator) handleSubmit();
    } else {
      if (num1 !== '' && operator) {
        updateNum2(num2 + val);
      } else {
        updateNum1(num1 + val);
      }
    }
  };

  const handleClear = () => {
    updateOperator(null);
    updateNum1('');
    updateNum2('');
  };

  const handleSubmit = () => {

    const num1Converted = Number(num1);
    const num2Converted = Number(num2);

    let calculatedVal;
    switch (operator) {
      case '+':
        calculatedVal = num1Converted + num2Converted;
        break;
      case '-':
        calculatedVal = num1Converted - num2Converted;
        break;
      case 'x':
        calculatedVal = num1Converted * num2Converted;
        break;
      case '/':
        calculatedVal = num1Converted / num2Converted;
        break;
      default:
        return;
    }

    updateNum1(calculatedVal.toString());
    updateNum2('');
    updateOperator(null);
  };

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <InputDisplay display={num2 || num1}/>
        <ButtonGrid onClick={onUserInput}/>
      </main>
    </div>
  );
}

export default App;
