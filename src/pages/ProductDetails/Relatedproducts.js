import React from 'react';
import { NavLink } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button';
import { addToCart } from '../../store/slices/cartSlice'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RelatedProduct = ({ products }) => {
    const dispatch = useDispatch();
    const notify = () => toast.success("Product added to cart!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    return (
        <section className='mt-3 w-100 d-lg-inline-block'>
            <article className="card p-3 mb-4">
                <h5 className="card-title">Related products</h5>
                <div className="d-none d-lg-block">
                    {/* Regular grid display for larger screens */}
                    <div className="row justify-content-around">
                        {products.slice(0, 6).map((product, index) => (
                            <div className="col-xxl-2 col-xl-2 col-sm-4 col-6" key={index}>
                                <figure className="card-product-grid product-sm">
                                    <NavLink to="#" className="img-wrap  ">
                                        <img
                                            src={product.image}
                                            className="border rounded shadow img-bord"
                                            alt={product.title}

                                        />
                                    </NavLink>
                                    <figcaption className="mt-2 ms-2">
                                        <NavLink to="#" className="card-title">{product.title.split(' ').slice(0, 3).join(' ')}</NavLink>
                                        <p className="mt-1 text-muted">${product.price}.00-$40.00</p>
                                        <Button variant="outline-primary"
                                            onClick={() => {
                                                dispatch(addToCart(product));
                                                notify();
                                            }}
                                        >
                                            Add to Cart
                                        </Button>
                                    </figcaption>
                                </figure>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Swiper for mobile screens */}
                <div className="d-lg-none">
                    <Swiper spaceBetween={10} slidesPerView={2}>
                        {products.slice(0, 5).map((product, index) => (
                            <SwiperSlide key={index}>
                                <figure className="card-product-grid product-sm">
                                    <NavLink to="#" className="img-wrap rounded">
                                        <img
                                            src={product.image}
                                            className="border rounded shadow img-bord"
                                            alt={product.title}
                                        />
                                    </NavLink>
                                    <figcaption className="mt-2 ms-2">
                                        <NavLink to="#" className="card-title">{product.title.split(' ').slice(0, 5).join(' ')}</NavLink>
                                        <p className="mt-1 text-muted">${product.price}.00-$40.00</p>
                                    </figcaption>
                                </figure>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </article>
        </section>
    );
};

export default RelatedProduct;
