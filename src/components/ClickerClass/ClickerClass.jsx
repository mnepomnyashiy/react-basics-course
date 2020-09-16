import React, {Component} from 'react';

class ClickerClass extends Component {
    state = {
        count: 0
    }

    clickHandler = () => {
        this.setState({count: this.state.count + 1})
    }

    render() {
        return <button onClick={this.clickHandler}>
            {this.state.count}
        </button>
    }
}

export default ClickerClass;