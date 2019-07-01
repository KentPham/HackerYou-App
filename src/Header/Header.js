import React, {Component} from 'react';
import logo from "./img/Logo.png";
import menu from "./img/grid.svg";
import {Navbar, Nav, NavDropdown, Button} from "react-bootstrap"

class Header extends Component {

    constructor() {
        super();

        this.state = {}
    }

    render() {
        return (
            <div className="container-fluid" style={{backgroundColor: "black", color: "white"}}>
                <Navbar expand="lg">
                    <Navbar.Brand href="/home">
                        <img className="Logo" src={logo} width="75" alt="TIFF Logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <img src={menu} width="30px" height="30px"/>;
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Item>
                                <Nav.Link href="/home" style={{color: "white"}}>Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/movies" style={{color: "white"}}>Upcoming Movies</Nav.Link>
                            </Nav.Item>
                            <Button variant="outline-primary" href="/contact-us">Contact</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;