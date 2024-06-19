// feature.jsx
import React from 'react';
import { features } from '../../data/dummy';

const Feature = () => {
return (
    <div id="feature" className='flex flex-col gap-y-2 mt-5 lg:px-[72px] py-16'>
        <h1 className='font-bold text-[20px] text-brown'>
            SIMPLE AND EFFICIENT
        </h1>  
        <h1 className='font-bold text-3xl lg:text-[30px]'>
            Explore Our Unique Features
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {features.map((item, i) => (
            <div
                className="flex flex-col gap-3 justify-center items-center "
                key={i}
            >
                <div className="w-[300px] h-[300px]">
                <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover"
                />
                </div>
                <h1 className="text-[16px] lg:text-[20px] font-bold text-center">
                {item.title}
                </h1>
                <p className="text-text text-[16px] lg:text-[20px] max-w-[400px] text-center">
                {item.desc}
                </p>
            </div>
            ))}
        </div>
        </div>
    );
};

export default Feature;
