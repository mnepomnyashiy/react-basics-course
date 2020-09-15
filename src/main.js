import React from 'react';
import ReactDOM from 'react-dom';

function CV(props) {
    // return React.createElement(
    //     "div",
    //     {},
    //     [
    //         React.createElement('h2', {}, props.name),
    //         React.createElement('h4', {}, props.prof),
    //         React.createElement('h4', {}, props.spec),
    //     ]
    // )
    return <div>
        <h2>{props.name}</h2>
        <h4>{props.prof}</h4>
        <h4>{props.spec}</h4>
    </div>
}

function App() {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, 'Hello from React'),
        React.createElement(CV, {
            name: 'John Doe',
            prof: 'Web-Developer',
            spec: 'React'
        }),
        React.createElement(CV, {
            name: 'Sara Smith',
            prof: 'Web-Developer',
            spec: 'Vue'
        }),
        React.createElement(CV, {
            name: 'Brad Pete',
            prof: 'Web-Developer',
            spec: 'Angular'
        }),
    ])
}

ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
);