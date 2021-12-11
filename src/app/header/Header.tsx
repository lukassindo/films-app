import React from 'react';
import '../../App.css';
import './Header.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import logo from '../../img/logo.png';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

interface Props {
    categories: string[];
    getCategory: (category:string) => void;
}

const Header = ({categories, getCategory}:Props) => {

    const sendData = (e: React.ChangeEvent<HTMLSelectElement>) => {
        getCategory(e.target.value);
    }

    return (
        <Container>
            <Row>
                <Col className="py-4 d-flex">
                    <div className="logo">
                        <Image src={logo}/>
                    </div>
                    <Nav>
                        <Link className="px-4" to="/">Home</Link>
                        <Link className="px-4" to="/mylist">MyList</Link>
                    </Nav>
                </Col>
            </Row>
            <Row>
                <Col>
                    <span className='genre'>Movies</span>
                    <Form.Select aria-label="Pick category of film" onChange={e=>sendData(e)}>
                        <option>Film Genre</option>
                        {categories.map(category=> (
                                <option key={category}>{category}</option>
                        ))}
                    </Form.Select>
                </Col>
            </Row>
        </Container>
    )
}

export default Header;