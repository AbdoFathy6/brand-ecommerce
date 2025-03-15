import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';
import { Card } from "react-bootstrap";
import { fetchProducts } from '../../store/slices/productSlice';
import '../../assets/css/list.css'
import { useDispatch, useSelector } from "react-redux";

const Similarproducts = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.productSlice.products);
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    return (
        <>
            <h2 className="d-lg-none text-dark">You may also like</h2>
            <Swiper
                className="d-lg-none rounded w-100 h-75"
                spaceBetween={10}
                slidesPerView={2.5}
                style={{ height: '300px' }}

            >
                {products.map((product, index) => (
                    <SwiperSlide className="rounded Similar">

                        <Card style={{ width: '150px', height: '220px' }}>
                            <Link
                                to={`/products/${product.id}`}
                                state={product}
                                key={product.id}
                                className='w-25'
                            >
                                <Card.Img variant="top" src={product.image} alt={product.title} className=" px-2   swiper-card mt-2" />
                            </Link>

                            <Card.Body className="pt-2">
                                <Card.Title>${product.price}</Card.Title>
                                <Card.Text className="small">
                                    {product.title.split(' ').slice(0, 2).join(' ')}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default Similarproducts
