import { FaRegHeart, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React, { useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from "react-router-dom";
import { Row, Card, Button } from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import '../../assets/css/Graid.css'

const ListProduct = ({ displayedProducts = [],
    filteredProducts = [],
    itemsPerPage,
    page,
    setPage,
    handleItemsPerPageChange }) => {

    const oldPrice = 1128.00;
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
    }, [pathname]);
    return (
        <div className="  mb-0">
            <Row className="gap-lg-5 gap-0">

                {displayedProducts.length > 0 ? (
                    displayedProducts.map((product) => (

                        <Card style={{ height: '405px', width: '295px' }} className="shadow   mt-lg-3 m-0 Card-Multy" lg={4} md={6} sm={4}>
                            <Link
                                key={product.id}
                                to={`/products/${product.id}`} state={product}
                            >
                                <Card.Img variant="top" src={product.image} className="p-4 border-bottom" style={{ height: '250px' }} />
                            </Link>

                            <Card.Body className="p-lg-2 p-0">
                                <div className="d-flex">
                                    <h4 className="price pe-2">${product.price}</h4>

                                    <span className="text-decoration-line-through d-lg-flex d-none fs-5 text-secondary">${oldPrice}</span>

                                    <Button variant="outlin-seccondary" className="divHeart ms-auto d-none ps-2 d-lg-block shadow">
                                        <FaRegHeart className="Heart" />
                                    </Button>
                                </div>
                                <Card.Title>
                                    <div className="rating-section mb-2">
                                        <FaStar className="star" />
                                        <FaStar className="star" />
                                        <FaStar className="star" />
                                        <FaStar className="star" />
                                        <FaStarHalfAlt className="star" />
                                        <span className="rating-score">{product.rating?.rate}</span>
                                    </div>
                                </Card.Title>
                                <Card.Text className="small">{product.title.split(' ').slice(0, 4).join(' ')}</Card.Text>
                            </Card.Body>
                        </Card>

                    ))
                ) : (
                    <p>No products found for this category.</p>
                )}
            </Row>

            <div className="d-lg-flex d-none mt-3 justify-content-end flex-row">
                <DropdownButton id="dropdown-basic-button" className="btn-light me-2" variant="light" title={`Show ${itemsPerPage}`}>
                    <Dropdown.Item onClick={() => handleItemsPerPageChange(6)}>6 Items</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleItemsPerPageChange(8)}>8 Items</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleItemsPerPageChange(12)}>12 Items</Dropdown.Item>
                </DropdownButton>
                <Stack spacing={2}>
                    <Pagination count={Math.ceil(filteredProducts.length / itemsPerPage)} page={page} onChange={(e, p) => setPage(p)} variant="outlined" color="primary" shape="rounded" />
                </Stack>
            </div>

            <h2 className="d-lg-none text-dark">You may also like</h2>
            <Swiper className="d-lg-none rounded w-100 h-75" spaceBetween={10} slidesPerView={2.4} style={{ height: '300px' }}>
                {filteredProducts.slice(7, 13).map((product, index) => (
                    <SwiperSlide key={index} className="rounded Similar">
                        <Link
                            key={product.id}
                            to={`/products/${product.id}`} state={product}
                        >
                            <Card className="w-100 h-100">
                                <Card.Img src={product.image} alt={product.title} className="px-4 p-2 swiper-card " />
                                <Card.Body className="pt-2">
                                    <Card.Title>${product.price}</Card.Title>
                                    <Card.Text className="small">{product.title.split(' ').slice(0, 3).join(' ')}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ListProduct;
