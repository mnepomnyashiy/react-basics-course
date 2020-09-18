import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {goods} from './data/goods';

ReactDOM.render(
  <React.StrictMode>
    <App goods={goods} />
  </React.StrictMode>,
  document.getElementById('root')
);
