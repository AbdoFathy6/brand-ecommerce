import * as React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { RiStarFill } from "react-icons/ri";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Accordion from 'react-bootstrap/Accordion';
import { CiFilter } from "react-icons/ci";

const AsideOffcanvas = ({ categories = [], selectedCategory, handleCategorySelect }) => {
    const [show, setShow] = useState(false);
    const [value, setValue] = React.useState([0, 999]);
    const [min, setMin] = React.useState(0);
    const [max, setMax] = React.useState(999);

    // Update slider when the input fields change
    const handleMinChange = (e) => {
        const newMin = parseInt(e.target.value, 10);
        setMin(newMin);
        setValue([newMin, value[1]]);
    };

    const handleMaxChange = (e) => {
        const newMax = parseInt(e.target.value, 10);
        setMax(newMax);
        setValue([value[0], newMax]);
    };

    // Update inputs when the slider changes
    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
        setMin(newValue[0]);
        setMax(newValue[1]);
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='container ps-0 '>
            <Button variant="light  " className='border rounded w-100' onClick={handleShow}>
                Filter(3) <CiFilter className='  fs-3' />

            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="content">
                        {/* Accordion with all items open by default */}
                        <Accordion defaultActiveKey={['0']} className="border-0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Condition</Accordion.Header>
                                <Accordion.Body>
                                    <ul className="ps-0 d-flex flex-column align-items-start">
                                        {categories.map((category) => (
                                            <Button
                                                key={category}
                                                variant={selectedCategory === category ? "light" : "outline"}
                                                className="me-2 mb-2 transparent-button text-dark "
                                                onClick={() => handleCategorySelect(category)}
                                            >
                                                {category}
                                            </Button>
                                        ))}
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Brands</Accordion.Header>
                                <Accordion.Body>
                                    <ul className="ps-0">
                                        {['Samsung', 'Apple', 'Huawei', 'Poco', 'Lenovo'].map((brand, index) => (
                                            <li key={index}>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id={`brand${index}`} />
                                                    <label className="form-check-label" htmlFor={`brand${index}`}>{brand}</label>
                                                </div>
                                            </li>
                                        ))}
                                        <li className="seeall">
                                            <button type="button" className="btn btn-link text-decoration-none ps-0">See all</button>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Features</Accordion.Header>
                                <Accordion.Body>
                                    <ul className="ps-0">
                                        {['Metallic', 'Plastic cover', '8GB Ram', 'Super power', 'Large Memory'].map((feature, index) => (
                                            <li key={index}>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id={`feature${index}`} />
                                                    <label className="form-check-label" htmlFor={`feature${index}`}>{feature}</label>
                                                </div>
                                            </li>
                                        ))}
                                        <li className="seeall">
                                            <button type="button" className="btn btn-link text-decoration-none ps-0">See all</button>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Category</Accordion.Header>
                                <Accordion.Body>
                                    <ul className="ps-0">
                                        {['Mobile accessory', 'Electronics', 'Smartphones', 'Modern tech'].map((Category, index) => (
                                            <li key={index}>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id={`Category${index}`} />
                                                    <label className="form-check-label" htmlFor={`Category${index}`}>{Category}</label>
                                                </div>
                                            </li>
                                        ))}

                                        <li className="seeall">
                                            <button type="button" className="btn btn-link text-decoration-none ps-0">See all</button>
                                        </li>
                                        <li className="bord"></li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Features</Accordion.Header>
                                <Accordion.Body>
                                    <ul className="ps-0">
                                        {['Metallic', 'Plastic cover', '8GB Ram', 'Jackets', 'Large Memory'].map((feature, index) => (
                                            <li key={index}>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id={`feature${index}`} />
                                                    <label className="form-check-label" htmlFor={`feature${index}`}>{feature}</label>
                                                </div>
                                            </li>
                                        ))}
                                        <li className="seeall">
                                            <button type="button" className="btn btn-link text-decoration-none ps-0">See all</button>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="5">
                                <Accordion.Header>Price range</Accordion.Header>
                                <Accordion.Body>
                                    <ul className="ps-0">
                                        <Box className="form-range w-75">
                                            <Slider
                                                value={value}
                                                onChange={handleSliderChange}
                                                valueLabelDisplay="auto"
                                                min={0}
                                                max={999}
                                            />
                                        </Box>
                                        <li>
                                            <div className="row">
                                                <div className="col pe-0">
                                                    <label>Min</label>
                                                    <input
                                                        type="number"
                                                        className="form-control w-75"
                                                        value={min}
                                                        onChange={handleMinChange}
                                                        placeholder="0"
                                                    />
                                                </div>
                                                <div className="col p-0 me-5">
                                                    <label>Max</label>
                                                    <input
                                                        type="number"
                                                        className="form-control w-75"
                                                        value={max}
                                                        onChange={handleMaxChange}
                                                        placeholder="999"
                                                    />
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <button className="btn btn-primary mt-2 w-75">Submit</button>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="6">
                                <Accordion.Header>Condition</Accordion.Header>
                                <Accordion.Body>
                                    <ul className="ps-0">
                                        {['Any', 'Refurbished', 'Brand new', 'Old item'].map((condition, index) => (
                                            <li key={index}>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="condition" id={`condition${index}`} />
                                                    <label className="form-check-label" htmlFor={`condition${index}`}>{condition}</label>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="7">
                                <Accordion.Header>Ratings</Accordion.Header>
                                <Accordion.Body>
                                    <ul className="ps-0">
                                        {[5, 4, 3, 2].map((stars, index) => (
                                            <li key={index}>
                                                <div className="form-check d-flex align-items-center mb-1">
                                                    <input className="form-check-input" type="checkbox" id={`rating${index}`} />
                                                    <label className="form-check-label" htmlFor={`rating${index}`}>
                                                        <span className="color-rate p-2">
                                                            {Array(stars).fill().map((_, i) => (
                                                                <RiStarFill key={i} className='fs-5 text-warning' />
                                                            ))}
                                                            {Array(5 - stars).fill().map((_, i) => (
                                                                <RiStarFill key={i} className="fa fa-star fs-5" />
                                                            ))}
                                                        </span>
                                                    </label>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default AsideOffcanvas
