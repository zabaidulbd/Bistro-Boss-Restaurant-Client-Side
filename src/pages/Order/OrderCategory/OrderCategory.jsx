import React from 'react';
import OrderTab from '../../../shared/OrderTab/OrderTab';

const OrderCategory = ({ items }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                items.map(item => <OrderTab
                    key={item._id} item={item}>
                </OrderTab>)
            }


        </div >
    );
};

export default OrderCategory;