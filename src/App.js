import React from 'react';

import GoodsList from './components/GoodsList/GoodsList';

function App({goods}) {
  return (
    <div className="App">
      <div className="container">
        <GoodsList goods={goods} />
      </div>
    </div>
  );
}

export default App;
