import React from 'react';

import { Row, Col, Card } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../../assets/css/main.css';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Electonics = ({ products }) => {



    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <section className="mb-3 mt-lg-5 mt-1 p-0">
            <Row className="gx-0 mt-3">
                {!isMobile && (
                    <Col lg={3} className="p-4 d-lg-block d-none bg-cover-1">
                        <aside>
                            <h3 className="mb-3 text-black">Consumer<br /> electronics and gadgets</h3>
                            <Link to="/products" className="btn btn-light">Source now</Link>
                        </aside>
                    </Col>
                )}
                <Col lg={9} className="bg-white ">
                    <h3 className="d-lg-none d-block text-black border-bottom p-3 mb-0">Home and Outdoor</h3>
                    {
                        isMobile ? (
                            <Swiper spaceBetween={10} slidesPerView={2} className='h-75' style={{ height: '270px', width: '100%' }}>
                                {products.slice(9, 17).map((product, index) => (
                                    <SwiperSlide key={index} className='m-0 rounded-0'>
                                        <Link
                                            key={product.id}
                                            to={`/products/${product.id}`} state={product}
                                        >
                                            <Card style={{ width: '100%', height: "100%", borderRadius: "0", borderRight: 'none' }}>
                                                <Card.Img variant="top" src={product.image} alt={product.title} className='offerImg d-flex px-4 pt-3 
                                            '   style={{ marginLeft: '30px' }} />
                                                <Card.Body className='body'>
                                                    <Card.Title className='fs-6'>{product.title.split(' ').slice(0, 2).join(' ')}</Card.Title>
                                                    <Card.Text className="text-muted text-center small">
                                                        From {product.price}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        ) : (
                            <Row className="ps-0 g-0 m-0">
                                {products.slice(9, 17).map((product) => (
                                    <Col key={product.id} xs={6} md={4} lg={3} className="border">
                                        <Link
                                            key={product.id}
                                            to={`/products/${product.id}`} state={product}
                                        >
                                            <Card className='border-0 d-flex flex-row' style={{ width: '223px', height: '127px' }}>
                                                <Card.Body className='p-1  w-50'>
                                                    <Card.Title className='fs-6 ' >{product.title.split(' ').slice(0, 2).join(' ')}</Card.Title>
                                                    <Card.Text className="text-muted  small float-start">
                                                        From<br /> USD{product.price}
                                                    </Card.Text>
                                                </Card.Body>
                                                <Card.Img src={product.image} alt={product.title} className=' mt-5 ms-auto' style={{ width: '60px', height: '60px' }} />
                                            </Card>
                                        </Link>
                                    </Col>
                                ))}
                            </Row>
                        )}
                </Col>
            </Row>
            <div className='bg-white border-bottom py-3 px-3 d-lg-none d-block' style={{ height: "60px", fontWeight: "500" }}>
                <Link to="/products" className='text-primary'>Source now<FaArrowRight /></Link>
            </div>
        </section>
    );
}

export default Electonics
