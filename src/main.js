import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import CV from './components/CV';

function App() {
    return <div>
        <h1>Hello from React</h1>
        <CV name="John Doe" spec="React" />
        <CV name="Sara Smith" spec="Vue" />
        <CV name="Brad Pete" spec="Angular" />
    </div>
}

ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
);