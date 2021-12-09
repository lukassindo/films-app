import React from 'react';
import '../../App.css';
import Header from '../header/Header'
import BigMovie from '../bigMovie/BigMovie';
import Slider from '../slider/Slider';
import Footer from '../footer/Footer';

const Main = () => {
    return (
        <>
        <Header/>
        <BigMovie/>
        <Slider/>
        <Footer/>
        </>
    )
}

export default Main;