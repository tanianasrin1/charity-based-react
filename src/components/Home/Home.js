import React from 'react';
import Footer from '../footer/Footer';
import HomeCarusel from './HomeCarusel';
import HomeContant from './HomeContant';

const Home = () => {
    return (
        <div>
            
            <HomeCarusel></HomeCarusel>
            <HomeContant></HomeContant>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;