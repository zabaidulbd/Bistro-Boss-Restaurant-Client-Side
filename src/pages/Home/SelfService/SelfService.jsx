import React from 'react';
import chefImg from '../../../assets/home/chef-service.jpg'

const SelfService = () => {
    return (
        <div>
            <div className='relative'>
                <img src={chefImg} alt="" />
            </div>
            <div className='absolute -mt-72 w-3/4 ms-40 bg-white p-14'>
                <h2 className='text-3xl text-center my-3'>Bistro Boss</h2>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>


        </div>
    );
};

export default SelfService;