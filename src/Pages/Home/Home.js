import React from 'react';
import Banner from './Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
           <div>
           <Banner></Banner>
           </div>
           <div className="services">
            <Services></Services>
           </div>
        </div>
    );
};

export default Home;