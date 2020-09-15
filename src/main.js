// function App() {
//     return React.createElement(
//         "div",
//         {
//             id: "app"
//         },
//         [
//             React.createElement(
//                 "h1",
//                 null,
//                 "Hello world"
//             ),
//             React.createElement(
//                 "p",
//                 null,
//                 "Lets learn ReactJS"
//             ),
//         ]
//     )
// }

function CV(props) {
    return React.createElement(
        "div",
        {},
        [
            React.createElement('h2', {}, props.name),
            React.createElement('h4', {}, props.prof),
            React.createElement('h4', {}, props.spec),
        ]
    )
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