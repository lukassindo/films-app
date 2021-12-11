import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import logo from '../../img/logo.png';
import Nav from 'react-bootstrap/Nav';
import '../../App.css';
import './MyList.css';
import { Link } from 'react-router-dom';
import { getFavorites } from '../../services/films';
import { Movies, Movie } from '../../models/models';

const MyList = () => {
    const [favorites, setFavorites] = useState<Movies>([]);
    const [removed, setRemoved] = useState<boolean>(false);

    useEffect(()=> {
        let values: string[] = Object.values(localStorage);
        console.log(values);
        const getData =  async () => {
            const data = await getFavorites(values);
            setFavorites(data);
        } 
        getData();
    },[removed]);

    const removeFavorite = (movie: Movie) => {
        localStorage.removeItem(movie.title);
        setRemoved(!removed);
        console.log('remove');
    }

    return (
        <Container>
        <Row>
            <Col className="py-4 d-flex justify-content-between">
                <div className="d-flex">
                    <div className="logo">
                        <Image src={logo}/>
                    </div>
                    <Nav>
                        <Link className="px-4" to="/">Home</Link>
                        <Link className="px-4" to="/mylist">MyList</Link>
                    </Nav>
                </div>
               
            </Col>
        </Row>
        <Row>
            <div className="favorites">
                {(favorites) && favorites.map(movie=> (
                    <div key={movie.title} onClick={(e) => removeFavorite(movie)}>
                        <Image  className="slide" src={movie.image} alt={movie.title}/>
                        <span>Remove from List</span>
                    </div>
                ))}
            </div>
        </Row>
    </Container>
    )
}

export default MyList;