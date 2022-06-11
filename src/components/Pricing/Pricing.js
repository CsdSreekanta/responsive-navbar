import React from 'react';
import PricingOptions from '../PricingOptions/PricingOptions';

const Pricing = () => {
    const pricingOptions =[
        {id:1 ,name: 'Individual Counseling', price: 99.90, benefits:[
            'Individual Support',
            'Provide Emotional Support',
            'Maintain Confidentiality',
            'Weekly 1 Hour Counselling',
            'Provide Some Materials',
            'Focus on Positivity',
        ]},
        {id:2 ,name: 'Family Counseling', price:199.99 , benefits:[
            'Group Support',
            'Provide Emotional Support',
            'Maintain Confidentiality',
            'Weekly 1hr Family Counselling',
            'Provide Some Materials',
            'Strengthen Family Bonding'
        ] },
        {id:3 ,name: 'Couple Counseling', price: 299.99, benefits:[
            'Couple Support',
            'Provide Emotional Support',
            'Maintain Confidentiality',
            'Weekly 1hr Couple Counselling',
            'Provide Some Materials',
            'Managing Conflict',
        ]},
    ]
    return (
        <div className='bg-indigo-300 p-4 mt-12 '>
            <h2 className='text-6xl font-bold mt-4 text-white'> Our Best Services</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae numquam a alias maxime amet rerum laborum omnis at! Totam, velit.</p>
            <div className='grid md:grid-cols-3 gap-2'>
            {
                pricingOptions.map(option =><PricingOptions
                key={option.id}
                option={option}></PricingOptions>)
            }
            </div>
        </div>
    );
};

export default Pricing;