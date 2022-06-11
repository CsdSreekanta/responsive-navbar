import React from 'react';
import NavBar from '../NavBar/NavBar';
import Pricing from '../Pricing/Pricing';

const Header = () => {
    return (
        <div>
            <NavBar></NavBar>
            <h2 className='text-4xl font-bold'>Welcome to our counselling website</h2>
          
        </div>
    );
};

export default Header;