import React, { useState } from 'react';
import Cover from '../../../shared/Cover/Cover';
import orderImg from '../../../assets/order/order.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderCategory from '../OrderCategory/OrderCategory';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {

    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drink']
    const { category } = useParams();
    const categoryIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(categoryIndex)
    const [menu] = useMenu();
    const drinks = menu.filter(item => item.category == 'drinks');
    const desserts = menu.filter(item => item.category == 'dessert');
    const pizza = menu.filter(item => item.category == 'pizza');
    const salad = menu.filter(item => item.category == 'salad');
    const soup = menu.filter(item => item.category == 'soup');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order</title>
            </Helmet>
            <Cover img={orderImg} title={'our order'}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drink</Tab>
                </TabList>
                <TabPanel>
                    <div>
                        {
                            <OrderCategory items={salad}></OrderCategory>
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div>
                        {
                            <OrderCategory items={pizza}></OrderCategory>
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        {
                            <OrderCategory items={desserts}></OrderCategory>
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        {
                            <OrderCategory items={soup}></OrderCategory>
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    {
                        <OrderCategory items={drinks}></OrderCategory>
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;