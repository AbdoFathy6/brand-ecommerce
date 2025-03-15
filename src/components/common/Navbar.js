import React from "react";
import { NavLink } from "react-router-dom";
import '../../assets/css/main.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Logo from "../../assets/images/Logo.png";
import ProfileIcon from "../../assets/Flag/Profile.png";
import MessageIcon from "../../assets/Flag/Message.png";
import OrdersIcon from "../../assets/Flag/Orders.png";
import CartIcon from "../../assets/Flag/Cart.png";
import { useSelector } from "react-redux";
import useIsMobile from "../../useIsMobile";
import Form from 'react-bootstrap/Form';

const Header = () => {

    const cart = useSelector((state) => state.cart);
    const isMobile = useIsMobile({ query: '(max-width:768px' });
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary border-bottom fixed ">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Brand href="/home">
                    <img src={Logo} style={{ height: "70px" }} alt="Logo" />
                </Navbar.Brand>

                <Navbar.Collapse id="responsive-navbar-nav">


                    <Nav className="w-100 px-lg-5">
                        {isMobile ? (
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                className="form-control mb-2"
                            />) : (<form className="d-flex w-100 form-header" role="search">
                                <input
                                    className="form-control"
                                    type="search"
                                    placeholder="Search"
                                    id="username"
                                    style={{ border: "1px solid #127FFF", borderRadius: "6px 0 0 6px" }}
                                    aria-label="Search"

                                />
                                <NavDropdown
                                    title="All Categories"
                                    id="collapsible-nav-dropdown"
                                    style={{ border: "1px solid #127FFF", borderRadius: "0" }}
                                >
                                    <NavDropdown.Item href="/products">List-Product</NavDropdown.Item>
                                    <NavDropdown.Item href="/productgrid">Graid-Product</NavDropdown.Item>
                                    <NavDropdown.Item href="/cart">Cart</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/home">Home</NavDropdown.Item>
                                </NavDropdown>
                                <button
                                    className="btn btn-primary w-25 p-2"
                                    style={{ borderRadius: "0 6px 6px 0" }}
                                    type="submit"
                                >
                                    Search
                                </button>
                            </form>
                        )}

                    </Nav>
                    <Nav className="m-sm-auto">
                        <Nav.Link eventKey={2} href="#messages">
                            <img src={MessageIcon} alt="Message" />
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#orders">
                            <img src={OrdersIcon} alt="Orders" />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                <Nav className="icons  ms-auto ">
                    <NavLink className="me-1" to='/Checkout'>
                        <img src={ProfileIcon} alt="Profile" />
                    </NavLink>

                    <NavLink eventKey={2} to="/cart" className="pt-0">
                        <img src={CartIcon} alt="cart" />
                        {cart.length > 0 && (
                            <span className="badge rounded-pill bg-primary">{cart.length}</span>
                        )}
                    </NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
