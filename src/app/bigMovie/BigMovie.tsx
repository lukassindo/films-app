import React, {useState, useEffect, useRef, useMemo} from 'react';
import '../../App.css';
import './BigMovie.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Movie } from '../../models/models';

interface Props {
    picked: Movie,
    film: Movie,
}

const BigMovie = ({picked, film}:Props) => {
    const [selected, setSelected] = useState<boolean>(false);
    const [pickedFilm, setPickedFilm] = useState<Movie>(film);
    const filmRef = useRef<Movie>();


    console.log(film)
    useEffect(()=> { 
        setPickedFilm(picked)
    },[picked]);

    useMemo(()=>{
        setPickedFilm(film)
    },[film])

    const showMovie = (
        <div className="bigMovie">
            <h1 className="font-link">{pickedFilm.title}</h1>
            <p>{pickedFilm.summary}</p>
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