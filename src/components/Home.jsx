import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import Crafts6_Section from './Crafts6_Section';
import TextSection1 from './TextSection1';


const Home = () => {

    //load all arts 
    const allarts = useLoaderData();


    //slice for crafts section
    const craftarts = allarts.slice(0,6);


    return (
        <div className=''>
            <Banner/>
            <TextSection1/>
            <Crafts6_Section sixArts={craftarts}/>
            
            

        </div>
    );
};

export default Home;

