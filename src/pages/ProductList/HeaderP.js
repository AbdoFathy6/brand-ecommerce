import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
const HeaderP = () => {
    let navigate = useNavigate();

    return (
        <div className='bg-light'>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand as={NavLink} className="d-flex align-items-center" onClick={() => navigate(-1)}>
                        <FaArrowLeft className='me-2' aria-hidden="true" />
                        Mobile Accessories
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text className='fs-2 p-2 text-black'>
                            <NavLink to='/Cart' aria-label="Shopping Cart" className="me-3">
                                <MdOutlineShoppingCart />
                            </NavLink>
                            <NavLink to='/Checkout' aria-label="Checkout">
                                <IoPersonOutline />
                            </NavLink>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>
                <Form.Control
                    type="text"
                    placeholder="Search"
                    className="form-control "
                />
            </Container>
        </div>
    );
}

export default HeaderP;
