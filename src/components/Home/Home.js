import React from 'react';
import DashBoard from '../DashBoard/DashBoard';
import Header from '../Header/Header';
import Pricing from '../Pricing/Pricing';

const Home = () => {
    return (
        <div>
          
            <Header></Header>
            <Pricing></Pricing>
            <DashBoard></DashBoard>
        </div>
    );
};

export default Home;