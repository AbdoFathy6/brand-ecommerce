import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa6";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";


const HeaderD = () => {
    return (

        <Navbar className="bg-body-tertiary border-bottom fixed-top">
            <Container>
                <Navbar.Brand href="/"><FaArrowLeft className='me-2' />  </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className='fs-2 p-2 text-black'>
                        <NavLink to='/Cart'>  <MdOutlineShoppingCart /></NavLink>
                        <NavLink to='/Checkout'>  <IoPersonOutline /></NavLink>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    )
}

export default HeaderD
