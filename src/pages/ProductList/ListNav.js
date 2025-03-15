import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoGridSharp } from 'react-icons/io5';
import { BsList } from 'react-icons/bs';
import { useMediaQuery } from 'react-responsive';
import Form from 'react-bootstrap/Form';
import AsideOffcanvas from './AsideOffcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const ListNav = ({ categories = [], selectedCategory, handleCategorySelect }) => {


    const isLargeScreen = useMediaQuery({ minWidth: 992 }); // You can adjust this breakpoint as needed

    return (
        <div className="mb-3 py-0 border bg-light bg-body-tertiary rounded-lg-1 Navlist ">
            {isLargeScreen ? (
                <div className="container-fluid d-lg-flex d-none align-items-center justify-content-between rounded">
                    <NavLink className="navbar-brand fs-6" to="#">
                        12,911 items in <b>Mobile accessory</b>
                    </NavLink>

                    <ul className="navbar-nav d-lg-flex d-none align-items-baseline py-2 ms-auto mb-2 mb-lg-0">
                        <li className="d-flex ">
                            <Form.Check type="checkbox" aria-label="checkbox 1" className='me-1' />
                            <Form.Check.Label>Verified Only</Form.Check.Label>


                        </li>
                        <li className="nav-item mx-1 ">
                            <DropdownButton
                                as={ButtonGroup}
                                id="dropdown-basic-button" title="Fetuerd"
                                variant='light'
                            >
                                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                <Dropdown.Item eventKey="3" active>
                                    Active Item
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                            </DropdownButton>
                        </li>
                    </ul>
                    <div style={{ width: "70px", height: "40px", display: "flex" }}>
                        <NavLink to={'/productgrid'}>
                            <IoGridSharp className='rounded-start border text-black p-1' style={{ width: "38px", height: "40px" }} />
                        </NavLink>
                        <NavLink to={'/products'}>

                            <BsList className='text-black rounded-end border p-1' style={{ backgroundColor: "#EFF2F4", width: "38px", height: "40px" }} />
                        </NavLink>                    </div>
                </div>
            ) : (
                <div className=" d-flex px-1 py-1    ">
                    {/* Sort Dropdown */}

                    <Form.Select label="Name" className='me-2  py-0 ps-4'>
                        <option>Sort : Newest</option>
                        <option>Sort : Lastest</option>
                        <option>Sort : Oldest</option>
                    </Form.Select>
                    <AsideOffcanvas categories={categories}
                        selectedCategory={selectedCategory}
                        handleCategorySelect={handleCategorySelect} />

                    {/* View Toggle Buttons */}
                    <div style={{ width: "70px", height: "40px", display: "flex" }} className='me-2 fs-5'>
                        <NavLink to={'/productgrid'}>

                            <IoGridSharp className='rounded-start border text-black p-1' style={{ width: "38px", height: "40px", cursor: 'pointer' }} />
                        </NavLink>
                        <NavLink to={'/products'}>

                            <BsList className='text-black rounded-end border p-1' style={{ backgroundColor: "#EFF2F4", width: "38px", height: "40px" }} />
                        </NavLink>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ListNav;
