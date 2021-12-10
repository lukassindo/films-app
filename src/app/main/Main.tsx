import React from 'react';
import '../../App.css';
import Header from '../header/Header'
import BigMovie from '../bigMovie/BigMovie';
import Footer from '../footer/Footer';
import SliderComponent from '../slider/Slider';

const Main = () => {
    return (
        <>
        <Header/>
        <BigMovie/>
        <SliderComponent/>
        <Footer/>
        </>
    )
}

export default Main;