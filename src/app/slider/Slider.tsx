import React, { useEffect, useMemo, useState } from 'react';
import '../../App.css';
import './Slider.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { getFilms } from '../../services/films';
import { Movies } from '../../models/models';
import Slider from "react-slick";

const SliderComponent = () => {
    const SLIDES = Math.floor(window.innerWidth / 140)
    const [films, setFilms] = useState<Movies>([]);
    console.log(SLIDES)

    const settings = {
        centerMode: true,
        centerPadding: '60px',
        infinite: true,
        slidesToShow: SLIDES,
        responsive: [
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '20px',
                slidesToShow: 2
              }
            }
          ]
      };

    useEffect(()=> {
        const getData =  async () => {
            const data = await getFilms();
            console.log(data);
            setFilms(data)
        } 
        getData();
    },[]);

    console.log(films)
    return (
        <div className="slider_container">
            <Slider {...settings} className="movie-slider">
                {films.map((movie, index)=> (
                    <Image key={movie.title} className="slide" src={movie.image}/>
                ))}
            </Slider> 
        </div>
    )
}

export default SliderComponent;