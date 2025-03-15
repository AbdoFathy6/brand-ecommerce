import React, { useEffect, useState } from 'react';

import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../../assets/css/main.css';
import ProductCard from './ProductOffer';
import { useMediaQuery } from 'react-responsive';

const Offer = ({ products }) => {


    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = "December, 31, 2025";

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();

        if (time < 0) {
            setDays(0);
            setHours(0);
            setMinutes(0);
            setSeconds(0);
        } else {
            setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
            setMinutes(Math.floor((time / 1000 / 60) % 60));
            setSeconds(Math.floor((time / 1000) % 60));
        }
    };

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Row id="deals-and-offers" className="gx-0 bg-white" style={{ borderRadius: '6px', border: '2px solid rgb(222, 226, 231)' }}>
            <Col lg={3} className="p-0 d-lg-flex flex-column align-items-start" style={{ display: "contents" }}>
                <div>
                    <h3 className="text-black mt-1 ms-3" style={{ fontSize: 'x-large' }}>Deals and offers</h3>
                    <p className="discount ms-3">Hygiene equipment</p>
                </div>
                <ul className="d-flex timer text-white ms-lg-0 ms-4 pe-3 ps-0" role="timer">
                    <li className="p-1 m-2 ms-3 me-0 timer text-bg-secondary rounded d-lg-block d-none">
                        <p className='fw-bold m-0 text-center'>{days < 10 ? "0" + days : days}</p>
                        <small className="p-1 text-dark">Days</small>
                    </li>
                    <li className="p-1 m-2 me-0 timer text-bg-secondary rounded">
                        <p className='fw-bold m-0 text-center'>{hours < 10 ? "0" + hours : hours}</p>
                        <small className="text-dark">Hours</small>
                    </li>
                    <li className="p-1 m-2 me-0 timer text-bg-secondary rounded">
                        <p className='fw-bold m-0 text-center'>{minutes < 10 ? "0" + minutes : minutes}</p>
                        <small className="p-1 text-dark">Min</small>
                    </li>
                    <li className="p-1 m-2 me-0 timer text-bg-secondary rounded">
                        <p className='fw-bold m-0 text-center'>{seconds < 10 ? "0" + seconds : seconds}</p>
                        <small className="p-2 text-dark">Sec</small>
                    </li>
                </ul>
            </Col>

            <Col lg={9} className="border Deals d-flex flex-wrap justify-content-between align-items-center">
                {isMobile ? (
                    <div className="product-container ">
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={2}
                            pagination={{ clickable: true }}
                            className='h-50'
                        >
                            {products.slice(0, 5).map((product) => (
                                <SwiperSlide key={product.id} className='slidee border m-0  px-3 py-lg-3 pb-0 pt-1 '>
                                    <Link
                                        key={product.id}
                                        to={`/products/${product.id}`} state={product}
                                    >
                                        <ProductCard product={product} price={product.price} />
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                ) : (
                    <div className="product-grid">
                        {products.slice(0, 5).map((product) => (
                            <div key={product.id} className={`product-item border-start ${product.class || ''}`}>
                                <Link
                                    key={product.id}
                                    to={`/products/${product.id}`} state={product}
                                >
                                    <ProductCard product={product} />
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </Col>
        </Row>
    );
};

export default Offer;
