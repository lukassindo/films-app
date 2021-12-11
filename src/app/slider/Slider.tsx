import React, {FC, useEffect, useMemo, useState } from 'react';
import '../../App.css';
import './Slider.css'
import Image from 'react-bootstrap/Image';
import { Movie } from '../../models/models';
import Slider from "react-slick";

interface Props {
    getMovie: (movie:Movie) => void,
    films: Movie[]
}

const SliderComponent = ({getMovie, films}:Props) => {
    const SLIDES = Math.floor(window.innerWidth / 140)
    const [movies, setMovies] = useState<Movie[]>([])

    const settings = {
        centerMode: true,
        centerPadding: '60px',
        infinite: true,
        slidesToShow: SLIDES,
    };

    useEffect(()=> {
        if(films.length > 0 && films.length < SLIDES) {
            console.log('less')
            let additionalMovies: Movie[] = films
            let y = 0
            for(let i = films.length; i <= SLIDES; i++) {
                if(y < films.length) {
                    additionalMovies.push(films[y]);
                    y++
                } else {
                    y = 0;
                    additionalMovies.push(films[y]);
                }
                
            }
            setMovies(additionalMovies);
        }
        setMovies(films)
    },[films]);
    
    const pickedMovie = (movie:Movie) => {
        getMovie(movie)
    }
   
    return (
        <div className="slider_container">
            <Slider {...settings} className="movie-slider">
                {(movies) && movies.map(movie=> (
                    <Image onClick={(e) => pickedMovie(movie)} key={movie.title} className="slide" src={movie.image}/>
                ))}
            </Slider> 
        </div>
    )
}

export default SliderComponent;