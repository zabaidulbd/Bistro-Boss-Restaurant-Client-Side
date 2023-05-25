import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../../shared/Cover/Cover';
import menuImg from '../../../assets/menu/menu.jpg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={'our menu'}></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImg} title={'our menu'}></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImg} title={'our menu'}></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;