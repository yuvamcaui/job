import React from 'react';
import Header2 from '../layout/Header2';
import Scroller from './Home/Scroller';
import Search from './Home/Search';
import Service from './Home/Service';
import Explor from './Home/Explor';
import Footer from '../layout/Footer';

const Home = () =>{
    return(<div>
        <Header2 />
            <Scroller />
            {/* <Search /> */}
            {/* <Service /> */}
            <Explor />
        <Footer />
    </div>)
}
export default Home