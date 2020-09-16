import React from 'react';
import './App.css';

import ClickerFn from './components/ClickerFn/ClickerFn';
import ClickerClass from './components/ClickerClass/ClickerClass';

function App() {
  return (
    <div className="App">
      Hello from React
      <br />
      {/* <ClickerFn /> */}
      <br />
      <ClickerClass />
    </div>
  );
}

export default App;
