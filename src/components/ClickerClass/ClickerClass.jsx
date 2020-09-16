import React, {Component} from 'react';

class ClickerClass extends Component {
    state = {
        count: 0,
        name: "Mikhail"
    }

    clickHandler = (number) => {
        this.setState({count: this.state.count + number})
    }

    componentDidMount() {
        console.log('ClickerClass did mount');
    }

    componentDidUpdate() {
        console.log('ClickerClass did update');
    }

    render() {
        console.log('ClickerClass rendered')
        return <div>
            <button onClick={() => this.clickHandler(-1)}>
                -
            </button>
            <span style={{padding: '0 1rem'}}>
                {this.state.count}
            </span>
            <button onClick={() => this.clickHandler(1)}>
                +
            </button>
        </div>
    }
}

export default ClickerClass;