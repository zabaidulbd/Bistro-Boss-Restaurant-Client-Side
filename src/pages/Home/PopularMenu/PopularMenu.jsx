import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import PopularItem from '../../../shared/PopularItem/PopularItem';

const PopularMenu = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(singleData => singleData.category == 'popular')
                setMenu(popularItems)
            })
    }, [])



    return (
        <section className='my-20'>
            <SectionTitle
                subHeading={'check it out'}
                heading={'from our menu'}
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-4'>
                {
                    menu.map(item => <PopularItem
                        key={item._id} item={item}
                    ></PopularItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;