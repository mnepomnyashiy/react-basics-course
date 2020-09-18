import React from 'react';

import BasketItem from '../BasketItem/BasketItem';

const BasketList = (props) => {
    const {
        order
    } = props;

    console.log('basket order', order);
    
    if (!order.length) {
        return <ul className="list-group">
            <li className="list-group-item active">Корзина</li>
            <li className="list-group-item">Товаров нет</li>
        </ul>
    }
    
    return <ul className="list-group">
        <li className="list-group-item active">Корзина</li>
        {order.map((item, index) => (
            <BasketItem key={index} {...item} />
        ))
        }
    </ul>
}

export default BasketList;