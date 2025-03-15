import React from 'react';
import Avatar from "../../assets/Flag/Avatar.png";
import { Nav } from 'react-bootstrap';
import { FaHome, FaHeart, FaBox, FaHeadset, FaFileAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CheckOut = ({ userName, isSignedIn }) => {


    return (

        <section className='m-auto ' style={{
            borderRight: "8rem solid rgb(108 117 125) ", width: '480px',
        }}>
            <div className='py-3 ps-2' style={{ backgroundColor: '#EFF2F4', height: '75px' }}>
                <img src={Avatar} alt="Profile" className="pe-2" />

                {isSignedIn ? (
                    <span className='fs-4 '>{userName} </span>
                ) : (<>
                    <span>
                        <Link to={'/Auth'}> Sign in</Link>|</span>
                    <span><Link> Register</Link></span>
                </>
                )}
            </div>
            <div className='bg-light container ' style={{ height: '100vh' }} >
                {/* Sidebar navigation */}
                <Nav.Link href="/home" className="d-flex align-items-center pt-1 mb-4">
                    <FaHome className="me-2" /> Home
                </Nav.Link>

                <Nav.Link href="/products " className="d-flex align-items-center mb-4">
                    <FaBox className="me-2" /> Categories
                </Nav.Link>

                <Nav.Link href="/home" className="d-flex align-items-center mb-4">
                    <FaHeart className="me-2" /> Favorites
                </Nav.Link>

                <Nav.Link href="/cart" className="d-flex align-items-center mb-4">
                    <FaBox className="me-2" /> My Orders
                </Nav.Link>

                <hr />

                {/* Language & Currency Selector */}
                <Nav.Link href="#" className="d-flex align-items-center mb-4">
                    <FaHeadset className="me-2" /> English | USD
                </Nav.Link>
                {/* Contact Us */}
                <Nav.Link href="#" className="d-flex align-items-center mb-4">
                    <FaHeadset className="me-2" /> Contact Us
                </Nav.Link>

                {/* About */}
                <Nav.Link href="#" className="d-flex align-items-center mb-4">
                    <FaFileAlt className="me-2" /> About
                </Nav.Link>

                <hr />

                {/* Other Links */}
                <Nav.Link href="#" className="d-flex align-items-center mb-3">
                    User Agreement
                </Nav.Link>
                <Nav.Link href="#" className="d-flex align-items-center mb-3">
                    Partnership
                </Nav.Link>
                <Nav.Link href="#" className="d-flex align-items-center mb-3">
                    Privacy Policy
                </Nav.Link>
            </div>
        </section>
    );
}

export default CheckOut;
