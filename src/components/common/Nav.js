import { NavLink } from "react-router-dom";
import '../../assets/css/main.css'
import france from "../../assets/Flag/Franc.png";
import { FaBars } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Nav = () => {
    const categories = [
        'All category',
        'Gadgets',
        'Clothes',
        'Accessories',
        'Shoes',
        'Home',
    ];
    return (
        <div>

            <section className="header-child d-lg-block d-none bg-light border-bottom">
                <div className="container p-0 align-items-baseline" >
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid align-items-baseline p-0">
                            <NavLink to="/products" className="category " style={{ fontSize: '17px' }} >
                                <FaBars className='m-2 ' /> All category
                            </NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse  justify-content-between" id="navbarNav">
                                <ul className="navbar-nav align-items-baseline">
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" aria-current="page" to="/home">Hot offers</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" aria-current="page" to="/home">Gift boxes</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" aria-current="page" to="/home">Project</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" aria-current="page" to="/home">Menu item</NavLink>
                                    </li>
                                    <li className="nav-item  ">

                                        <Dropdown>
                                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                                Help
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#">contact</Dropdown.Item>
                                                <Dropdown.Item href="#"> Faq</Dropdown.Item>
                                                <Dropdown.Item href="#">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </li>
                                </ul>
                                <div className="d-flex justify-content-end">

                                    <Dropdown>
                                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                                            English, USD
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#">contact</Dropdown.Item>
                                            <Dropdown.Item href="#"> Faq</Dropdown.Item>
                                            <Dropdown.Item href="#">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                    <DropdownButton
                                        id="dropdown-button-dark-example2"
                                        variant="light"
                                        title={<span>Ship to <img src={france} alt="Country Flag" /></span>}
                                        className="border-0 ms-0 pe-2"
                                    >
                                        <Dropdown.Item href="#" active>
                                            Action
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#">Something else</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                    </DropdownButton>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
            <Swiper
                spaceBetween={10}
                slidesPerView={'auto'}
                freeMode={true}
                className="d-lg-none d-block bg-light py-3 ps-2"
            >
                {categories.map((category, index) => (
                    <SwiperSlide key={index} style={{ width: 'auto', cursor: 'pointer' }}>
                        <NavLink to='/products' className='text-primary'>   <div style={{
                            padding: '10px 20px',
                            background: '#EFF2F4',
                            borderRadius: '10px',
                            textAlign: 'center',
                            color: '#0D6EFD ',
                            fontWeight: '400'
                        }}>
                            {category}
                        </div>
                        </NavLink>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};



export default Nav
