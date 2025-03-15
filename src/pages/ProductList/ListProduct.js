import React, { useEffect } from 'react'
import { FaRegHeart, FaStar, FaStarHalfAlt, FaCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Card, Row, Col, Button } from "react-bootstrap";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import '../../assets/css/list.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Spinner from 'react-bootstrap/Spinner';
import { useLocation } from 'react-router-dom';
import Similarproducts from './Similarproducts';

const ListProduct = ({ displayedProducts = [],
    filteredProducts = [],
    itemsPerPage,
    page,
    setPage,
    handleItemsPerPageChange,
}) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
    }, [pathname]);

    return (
        <div className="row g-1 mb-0">
            {displayedProducts.length > 0 ? (
                displayedProducts.map((product) => (
                    <Card className="product-card shadow p-1 " style={{ maxHeight: '245px' }}>
                        <Row className="g-0">
                            <Col xs={3}>
                                <Link
                                    key={product.id}
                                    to={`/products/${product.id}`} state={product}
                                >
                                    <Card.Img
                                        src={product.image}
                                        alt="Product"
                                        className="product-image p-3 ps-0 pe-4"
                                        style={{ maxWidth: '235px', maxHeight: '220px' }}
                                    />
                                </Link>
                            </Col>
                            <Col xs={9}>
                                <Card.Body>
                                    <Card.Title>
                                        {product.title.split(' ').slice(0, 3).join(' ')}
                                        <Button variant="outlin-seccondary" className="divHeart d-none ps-2 d-lg-block shadow">
                                            <FaRegHeart className="Heart" />
                                        </Button>
                                    </Card.Title>
                                    <h4 className="price">${product.price}</h4>
                                    <div className="rating-section">
                                        <FaStar className="star" />
                                        <FaStar className="star" />
                                        <FaStar className="star" />
                                        <FaStar className="star" />
                                        <FaStarHalfAlt className="star" />
                                        <span className="rating-score">{product.rating.rate}</span>
                                        <FaCircle style={{ color: '#DEE2E7', padding: '0 2px 0 7px' }} />
                                        <span className="orders">{product.rating.count} orders</span>
                                        <FaCircle style={{ color: '#DEE2E7', padding: '0 2px 0 7px' }} />
                                        <div className="free-shipping">Free Shipping</div>
                                    </div>
                                    <div className="product-description d-none d-lg-block">
                                        {product.description.split(' ').slice(0, 20).join(' ')}
                                    </div>
                                    <button type="button" className="btn mt-auto p-0 btn-link text-decoration-none d-none d-lg-block">
                                        View details
                                    </button>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                )))
                : (
                    <Spinner animation="border" />
                )}

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

            {/* Swiper for smaller screens */}
            <Similarproducts />
        </div>
    );
};

export default ListProduct;
