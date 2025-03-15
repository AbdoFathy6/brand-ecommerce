import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchProducts } from '../../store/slices/productSlice';
import { useDispatch, useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { Card, Row, Col } from 'react-bootstrap';

const SavedForLater = () => {
    const [isMobile, setIsMobile] = useState(false);
    const dispatch = useDispatch();
    const products = useSelector((state) => state.productSlice.products);
    const loading = useSelector((state) => state.productSlice.loading);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.matchMedia("(max-width: 768px)").matches);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const formatTitleForUrl = (title) => {
        return title.replace(/\s+/g, '-').toLowerCase();
    };

    return (
        <section>
            <div className="container p-0">
                <h3 className='text-black d-lg-none d-block py-2'>Save to later</h3>
                {loading ? (
                    <p>Loading...</p>
                ) : products.length === 0 ? (
                    <p>No saved items.</p>
                ) : isMobile ? (
                    products.slice(0, 4).map((product) => (
                        <Card className="product-card shadow" key={product.id}>
                            <Row className="g-0">
                                <Col xs={3}>
                                    <NavLink
                                        to={`/details/${formatTitleForUrl(product.title)}`}
                                        state={{ title: product.title, image: product.image, price: product.price }}>
                                        <Card.Img
                                            src={product.image}
                                            alt="Product"
                                            className="product-image w-100 py-4 px-2 "
                                        />
                                    </NavLink>
                                </Col>
                                <Col xs={9}>
                                    <Card.Body>
                                        <Card.Title>{product.title}</Card.Title>
                                        <h4 className="price">${product.price}</h4>
                                        <button className="btn border m-2 ms-0 text-primary">Move to cart</button>
                                        <button className="btn border m-2 ms-0 text-danger rounded">Remove</button>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    ))
                ) : (
                    <article className="card p-3 pt-4 mb-4">
                        <h5 className="card-title pb-2 text-black fs-4">Saved for later</h5>
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {products.slice(0, 4).map((product) => (
                                <div className="col-xxl-3 col-lg-4 col-6" key={product.id}>
                                    <div className="card" style={{ backgroundColor: '#EEEEEE', height: '404px' }}>
                                        <img src={product.image} height="240" className="card-img-top p-3" alt="Saved Product" style={{ mixBlendMode: 'multiply' }} />
                                        <div className="card-body bg-white">
                                            <h5 className="card-title">${product.price}</h5>
                                            <p className="card-text">{product.title}</p>
                                            <NavLink to={`/home`} className="btn bg-white border text-primary">
                                                <FaShoppingCart /> Learn More
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </article>
                )}
            </div>
        </section>
    );
};

export default SavedForLater;
