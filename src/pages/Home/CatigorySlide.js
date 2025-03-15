import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import '../../assets/css/main.css';
import Avatar from "../../assets/Flag/Avatar.png";
import background from "../../assets/images/background main.png";

const CatigorySlide = ({ userName, isSignedIn }) => {

    return (
        <>
            <div className="position-relative d-lg-none d-block">
                <div className="btn-photo ms-lg-5 ms-2 mt-5 position-absolute">
                    <p className="fs-2">Latest Trending</p>
                    <h3 className="fs-1">Electronic Items</h3>
                    <NavLink to="/home" className="btn border-0 bg-white text-primary">Learn More</NavLink>
                </div>
                <img src={background} className="w-100 p-lg-3 img-Main pe-lg-0 d-block" alt="" />
            </div>
            <Row className="gx-0 bg-white d-lg-flex d-none my-lg-3" style={{ borderRadius: '6px', border: 'solid #DEE2E7 2px' }}>
                <Col lg={3}>
                    <aside>
                        <ul className="content text-black d-lg-block d-none">
                            <li className="main-content p-2 main-content-1 mt-3">Automobiles</li>
                            <li className="main-content p-2">
                                <NavLink to="/products">Clothes and Wear</NavLink>
                            </li>
                            <li className="main-content p-2">
                                <NavLink to="/products">Home Interiors</NavLink>
                            </li>
                            <li className="main-content p-2">
                                <NavLink to="/products">Computer and Tech</NavLink>
                            </li>
                            <li className="main-content p-2">
                                <NavLink to="/products">Tools, Equipment</NavLink>
                            </li>
                            <li className="main-content p-2">
                                <NavLink to="/products">Sport and Outdoor</NavLink>
                            </li>
                            <li className="main-content p-2">
                                <NavLink to="/products">Animal and Pets</NavLink>
                            </li>
                            <li className="main-content p-2">
                                <NavLink to="/products">Machinery Tools</NavLink>
                            </li>
                            <li className="main-content p-2">
                                <NavLink to="/products">More Category</NavLink>
                            </li>
                        </ul>
                    </aside>
                </Col>
                <Col lg={9}>
                    <Row>
                        <div className="col-xxl-9 col-lg-8">
                            <div className="position-relative">
                                <div className="btn-photo ms-lg-5 ms-2 mt-5 position-absolute">
                                    <p className="fs-2">Latest Trending</p>
                                    <h3 className="fs-1">Electronic Items</h3>
                                    <NavLink to="/home" className="btn border-0 bg-white text-primary">Learn More</NavLink>
                                </div>
                                <img src={background} className="w-100 p-lg-3 img-Main pe-lg-0 d-block" alt="" />
                            </div>
                        </div>
                        <div className="col-xxl-3 col-lg-4 mt-2 d-none d-lg-block">
                            <div className="avatar h-25 mt-2 mb-3 me-3">
                                <div className="d-flex align-items-center text-dark">
                                    <img src={Avatar} className="mx-3 mt-2" alt="User Avatar" />
                                    <div className='pt-3'>
                                        {isSignedIn ? (
                                            <div className='fs-6 fw-bold'>
                                                Hi, <span className='fs-5 p-2 text-primary-emphasis'>{userName}</span>
                                                <br />
                                                Welcome back!
                                            </div>
                                        ) : (
                                            <div>
                                                Hi, user
                                                <br />
                                                Let's get started
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {!isSignedIn && (
                                    <>
                                        <NavLink to="/" className="btn btn-primary mt-2 text-light w-75 ms-3">Join Now</NavLink>
                                        <NavLink to="/" className="btn btn-light mt-2 w-75 ms-3 mb-3">Log in</NavLink>
                                    </>
                                )}
                            </div>
                            <div className="bg-warning text-white fs-6 p-3 my-2 me-3" style={{ height: '31%' }}>
                                Get US $10 off
                                <br />with a new
                                <br />supplier
                            </div>
                            <div className="bg-info  text-white fs-6 p-3 me-3" style={{ height: '32%' }}>
                                Send quotes with
                                <br />supplier
                                <br />preferences
                            </div>
                        </div>
                    </Row>
                </Col>
            </Row>
        </>
    );
}

export default CatigorySlide;
