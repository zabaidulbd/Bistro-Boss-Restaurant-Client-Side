import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='mx-auto text-center w-2/4 my-10'>
            <p className='text-orange-400 text-2xl'>... {subHeading} ...</p>
            <h2 className='uppercase border-y-2 text-3xl font-bold'>{heading}</h2>
        </div>
    );
};

export default SectionTitle;