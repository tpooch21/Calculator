import React, { useState } from 'react';
import './App.css';

import ButtonGrid from './components/ButtonGrid/index';
import InputDisplay from './components/InputDisplay/index';

const App = () => {

  const [operator, changeOperator] = useState(null);
  const [num1, updateNum1] = useState('');
  const [num2, updateNum2] = useState('');

  const onUserInput = (val) => {
    if (num1 === '' && operator) {
      updateNum2(num2 + val);
    } else {
      updateNum1(num1 + val);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <InputDisplay display={num1}/>
        <ButtonGrid onClick={onUserInput}/>
      </main>
    </div>
  );
}

export default App;
