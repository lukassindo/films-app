import React, {useEffect, useState } from 'react';
import '../../App.css';
import './Slider.css'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { Movie } from '../../models/models';
import Slider from "react-slick";
import rocket from '../../img/rocket.png';

interface Props {
    getMovie: (movie:Movie) => void,
    films: Movie[]
}

const SliderComponent = ({getMovie, films}:Props) => {
    const SLIDES = Math.floor(window.innerWidth / 140)
    const [movies, setMovies] = useState<Movie[]>([])
 
    const settings = {
        infinite: true,
        slidesToShow: SLIDES,
        speed: 500
    };

    useEffect(()=> {
        if(films.length > 0 && films.length < SLIDES) {
            let additionalMovies: Movie[] = films;
            let y = 0;
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
        <>
            <Container>
                <h2><Image className="py-2 pe-2" src={rocket}/>Popular in Netflix</h2>
            </Container>
            <div className="slider_container">
                <Slider {...settings} className="movie-slider">
                    {(movies) && movies.map(movie=> (
                        <Image onClick={(e) => pickedMovie(movie)} key={movie.title} className="slide" src={movie.image} alt={movie.title}/>
                    ))}
                </Slider> 
            </div>
        </>
    )
}

export default SliderComponent;