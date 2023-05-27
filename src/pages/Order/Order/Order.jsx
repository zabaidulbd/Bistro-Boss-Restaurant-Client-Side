import React, { useState } from 'react';
import Cover from '../../../shared/Cover/Cover';
import orderImg from '../../../assets/order/order.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderCategory from '../OrderCategory/OrderCategory';
import { useParams } from 'react-router-dom';

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [menu] = useMenu();
    const { category } = useParams();
    console.log(category)
    const drinks = menu.filter(item => item.category == 'drinks');
    const desserts = menu.filter(item => item.category == 'dessert');
    const pizza = menu.filter(item => item.category == 'pizza');
    const salad = menu.filter(item => item.category == 'salad');
    const soup = menu.filter(item => item.category == 'soup');
    return (
        <div>
            <Cover img={orderImg} title={'our order'}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
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