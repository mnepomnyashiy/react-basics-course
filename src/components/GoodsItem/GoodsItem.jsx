import React from 'react';

const GoodsItem = (props) => {
    const {
        name,
        price
    } = props;

    return <div className="card" style={{maxWidth: '300px'}}>
    <img
        src={`https://via.placeholder.com/300x150.png?text=${name.slice(0,10)}`}
        className="card-img-top"
        alt={name}
    />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">Цена: {price} руб.</p>
      <button className="btn btn-primary">Купить</button>
    </div>
  </div>
}

export default GoodsItem;