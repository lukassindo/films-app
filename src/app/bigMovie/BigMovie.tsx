import React, {useState, useEffect} from 'react';
import '../../App.css';
import './BigMovie.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Movie } from '../../models/models';

interface Props {
    picked: Movie,
    film: Movie,
}

const BigMovie = ({picked, film}:Props) => {
    const [pickedFilm, setPickedFilm] = useState<Movie>(film);
   
    useEffect(()=> { 
        setPickedFilm(picked)
    },[picked]);

    useEffect(()=>{
        setPickedFilm(film)
    },[film]);

    const addFavorite = (favorite: string) => {
        localStorage.setItem(favorite,favorite);
    }

    const showMovie = (
        <div className="bigMovie">
            <h1 className="font-link">{pickedFilm.title}</h1>
            <p>{pickedFilm.summary}</p>
            <div className="buttons">
                <Button className="watch" onClick={(e)=>e.preventDefault()}>
                    WATCH
                </Button>
                <Button onClick={()=>addFavorite(pickedFilm.title)}className="add">
                    ADD LIST
                </Button>
            </div>
        </div>
    )

    return (
        <Container>
            <Row>
                <Col>
                {(pickedFilm && showMovie)}
                </Col>
            </Row>
        </Container>
    )
}

export default BigMovie;