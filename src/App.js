import React, {Component} from 'react';

import GoodsList from './components/GoodsList/GoodsList';
import BasketList from './components/BasketList/BasketList';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      order: []
    }
  }
  
  addGoodtoOrder = (goodsItem) => {
    const newOrder = this.state.order;
    const isOrdered = newOrder.findIndex(item => item.id === goodsItem.id);
    
    if (isOrdered > -1) {
      newOrder[isOrdered].quantity++;
    } else {
      newOrder.push({
        id: goodsItem.id,
        name:goodsItem.name,
        price: goodsItem.price,
        quantity: 1,
      })
    }
    console.log(newOrder);
    this.setState({order: newOrder});
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <GoodsList goods={this.props.goods} setOrder={this.addGoodtoOrder} />
  
          <BasketList order={this.state.order} />
        </div>
      </div>
    );
  }
}

export default App;
