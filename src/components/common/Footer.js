import '../../assets/css/main.css'
import { Link } from 'react-router-dom';
import { FaYoutube, FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import AppStore from '../../assets/images/App Store.png';
import GooglePlay from '../../assets/images/Google Play.png';
import Logo from '../../assets/images/Logo.png';
import US from '../../assets/Flag/Amerca.png';
import AE from '../../assets/Flag/Emarat.png';
import Alman from '../../assets/Flag/Almania.png';
import Ru from '../../assets/Flag/Russia.png';
import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useState } from "react";
import { MdExpandLess } from 'react-icons/md';
import { NavLink } from 'react-bootstrap';


const Footer = () => {

    const options = [
        <><img src={US} className="me-2" height="20" alt="Flag" /> English</>,
        <> <img src={AE} className="me-2" height="20" alt="Flag" />Arabic</>,
        <> <img src={Ru} className="me-2" height="20" alt="Flag" />Russian</>,
        <><img src={Alman} className="me-2" height="20" alt="Flag" />German</>,
    ];

    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(1);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <footer className="section-footer bg-white w-100">
                <div className="container pt-4">
                    <section className="footer-main padding-y">
                        <div className="row">
                            <aside className="col-12 col-sm-12 col-lg-4">
                                <article className="me-lg-4">
                                    <NavLink href="/home">
                                        <img src={Logo} height="65" className="logo-footer" alt="Logo" /></NavLink>
                                    <p className="mt-3 text-black">
                                        You might remember the Lenovo computer commercials in which
                                        a youth reports this exciting news to his friends.
                                    </p>
                                    <nav className="mb-4">
                                        <Link
                                            className="btn btn-icon btn-light btn-foote FooterIcon text-light mx-1"
                                            title="Facebook"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="#"
                                        >
                                            <FaFacebook />
                                        </Link>
                                        <Link
                                            className="btn btn-icon btn-light btn-foote FooterIcon text-light mx-1"
                                            title="Twitter"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="#"
                                        >
                                            <FaTwitter />
                                        </Link>
                                        <Link
                                            className="btn btn-icon btn-light btn-foote FooterIcon  text-light mx-1"
                                            title="LinkedIn"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="#"
                                        >
                                            <FaLinkedin />
                                        </Link>
                                        <Link
                                            className="btn btn-icon btn-light btn-foote FooterIcon  text-light mx-1"
                                            title="Instagram"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="#"
                                        >
                                            <FaInstagram />
                                        </Link>
                                        <Link
                                            className="btn btn-icon btn-light btn-foote FooterIcon  text-light mx-1"
                                            title="YouTube"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="#"
                                        >
                                            <FaYoutube />
                                        </Link>
                                    </nav>
                                </article>
                            </aside>
                            <aside className="col-6 col-sm-4 col-lg-2" >
                                <h5 className="title text-dark">About</h5>
                                <ul className="list-menu mb-4 ps-0" >
                                    <li ><Link to="#" className='fotLi text-secondary'>About us</Link></li>
                                    <li><Link to="#" className='fotLi'>Find store</Link></li>
                                    <li ><Link to="#" className='fotLi'>Categories</Link></li>
                                    <li><Link to="#" className='fotLi'>Blogs</Link></li>
                                </ul>
                            </aside>
                            <aside className="col-6 col-sm-4 col-lg-2">
                                <h5 className="title text-dark">Information</h5>
                                <ul className="list-menu text-secondary mb-4 ps-0">
                                    <li ><Link to="#" className='fotLi'>Help center</Link></li>
                                    <li ><Link to="#" className='fotLi'>Money refund</Link></li>
                                    <li ><Link to="#" className='fotLi'>Shipping info</Link></li>
                                    <li ><Link to="#" className='fotLi'>Refunds</Link></li>
                                </ul>
                            </aside>
                            <aside className="col-6 col-sm-4 col-lg-2">
                                <h5 className="title text-dark">Support</h5>
                                <ul className="list-menu mb-4 text-secondary ps-0">
                                    <li ><Link to="#" className='fotLi'>Help center</Link></li>
                                    <li ><Link to="#" className='fotLi'>Documents</Link></li>
                                    <li ><Link to="#" className='fotLi'>Account restore</Link></li>
                                    <li><Link to="#" className='fotLi'>My Orders</Link></li>
                                </ul>
                            </aside>
                            <aside className="col-6 col-sm-4 col-lg-2">
                                <h5 className="title text-dark">Download</h5>
                                <Link href="#" className="mb-2 d-inline-block">
                                    <img src={AppStore} height="44" alt="App Store" />
                                </Link>
                                <Link href="#" className="mb-2 d-inline-block">
                                    <img src={GooglePlay} height="44" alt="Google Play" />
                                </Link>
                            </aside>
                        </div>
                    </section>
                </div>
                <hr className="my-0" />
            </footer>

            <section className="footer-bottom pt-2 d-flex justify-content-between">
                <div className="container end">
                    <div className="text-black-50 pt-2">
                        © 2023 Ecommerce.
                    </div>
                    <nav className="dropup">
                        <div>
                            <List
                                component="nav"
                                aria-label="Device settings"
                            >
                                <ListItemButton
                                    id="lock-button"
                                    aria-haspopup="listbox"
                                    aria-controls="lock-menu"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClickListItem}
                                >
                                    <ListItemText
                                        secondary={options[selectedIndex]}
                                    />
                                    <MdExpandLess />
                                </ListItemButton>
                            </List>
                            <Menu
                                id="lock-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'lock-button',
                                    role: 'listbox',
                                }}
                            >
                                {options.map((option, index) => (
                                    <MenuItem
                                        key={option}
                                        disabled={index === 0}
                                        selected={index === selectedIndex}
                                        onClick={(event) => handleMenuItemClick(event, index)}
                                    >
                                        {option}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </div>

                    </nav>
                </div>
            </section>
        </>
    )
};

export default Footer;
