import React from 'react';

import GoodsItem from '../GoodsItem/GoodsItem';

const GoodsList = (props) => {
    const {
        goods,
        setOrder,
    } = props;

    return <div className="goods-list">
        {goods.map((item) => (
            <GoodsItem key={item.id} setOrder={setOrder} {...item} />
        ))}
    </div>
}

export default GoodsList;