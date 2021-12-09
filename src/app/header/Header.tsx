import React from 'react';
import '../../App.css';
import './Header.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import logo from '../../img/logo.png';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';


const Header = () => {
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
            </Row>
            
        </Container>
    )
}

export default Header;