import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../../assets/css/Cart-2.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from "../../assets/images/Logo.png";
import ProfileIcon from "../../assets/Flag/Profile.png";
import MessageIcon from "../../assets/Flag/Message.png";
import OrdersIcon from "../../assets/Flag/Orders.png";
import CartIcon from "../../assets/Flag/Cart.png";
import { FaArrowLeft } from "react-icons/fa6";
import Footer from '../../components/common/Footer'
import Prim from '../../assets/images/PriM.jpg'
import SavedForLater from './SavedForLater'
import CartItem from './CartItem';
import { useLocation } from 'react-router-dom';

const Cart = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
    }, [pathname]);

    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary border-bottom d-lg-flex d-none">
                <Container>
                    <Navbar.Brand href="/home">
                        <img src={Logo} style={{ height: "70px" }} alt="Logo" />
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="#messages"><img src={MessageIcon} alt="Message" /></Nav.Link>
                        <Nav.Link href="#orders"><img src={OrdersIcon} alt="Orders" /></Nav.Link>
                        <NavLink to='/Checkout'><img src={ProfileIcon} alt="Profile" className='mt-2' /></NavLink>
                        <Nav.Link href="/Cart"><img src={CartIcon} alt="Cart" /></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <NavLink to={'/home'} className='d-lg-none d-md-none d-flex align-center text-dark fs-3 bg-light border-bottom p-3' style={{ height: '65px' }} >
                <FaArrowLeft className='me-2' /> Shopping cart
            </NavLink>
            <Container >
                <CartItem />
                <SavedForLater />
                <article
                    className="mb-5 mt-3"
                    style={{
                        backgroundImage: `url(${Prim})`,
                        height: '100px',
                        borderRadius: '6px',
                        backgroundSize: 'cover',
                    }}
                >
                    <div className="card-body text-light pt-3 ps-2">
                        <Button
                            href="#"
                            className="mt-3 me-3 float-end text-light btn-warning"
                        >
                            Shop now
                        </Button>
                        <h3 className="card-title">Super discount on more than 100 USD</h3>
                        <p className="card-text">
                            Have you ever finally just write dummy info
                        </p>
                    </div>
                </article>
            </Container>
            <Footer />
        </div>
    );
};

export default Cart;


