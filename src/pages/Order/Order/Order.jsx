import React from 'react';
import Cover from '../../../shared/Cover/Cover';
import orderImg from '../../../assets/order/order.jpg'

const Order = () => {
    return (
        <div>
            <Cover img={orderImg} title={'our order'}></Cover>
        </div>
    );
};

export default Order;