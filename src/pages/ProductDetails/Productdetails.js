import React, { useEffect } from 'react';
import { fetchProducts } from '../../store/slices/productSlice';
import { useDispatch, useSelector } from "react-redux"; import Header from '../../components/common/Navbar'
import Nav from '../../components/common/Nav'
import BreadCrumb from '../../components/common/Breadcrumb'
import Footer from '../../components/common/Footer'
import DetailsOfProduct from './DetailsOfProduct'
import DescriptionOfProduct from './DescriptionOfProduct'
import RelatedProduct from './Relatedproducts'
import { Container, Button } from 'react-bootstrap';
import Prim from '../../assets/images/PriM.jpg'
import HeaderD from './HeaderD'
import useIsMobile from '../../useIsMobile'
import '../../assets/css/Details2.css'

const ProductDetails = ({ addToCart }) => {
    const isMobile = useIsMobile();
    const dispatch = useDispatch();
    const products = useSelector((state) => state.productSlice.products); // Get products from Redux

    useEffect(() => {
        dispatch(fetchProducts()); // Fetch products on page load
    }, [dispatch]);

    return (
        <div >
            {isMobile ? (
                <HeaderD />
            ) : (
                <Header />
            )}

            <div className='d-lg-block d-none'>
                <Nav />
            </div>
            <BreadCrumb className="d-block" />
            {/* For Mobile: Use full-width and stack elements vertically */}
            <div className="d-lg-none ">
                <DetailsOfProduct
                    addToCart={addToCart}
                />
                <div className='container'>
                    <DescriptionOfProduct products={products} />
                    <RelatedProduct products={products} addToCart={addToCart}
                    />
                </div>
            </div>
            {/* For Larg PC: Use full-width and stack elements vertically */}

            <div className="home-page d-none container d-lg-block  ">
                <DetailsOfProduct addToCart={addToCart}
                />
                <DescriptionOfProduct products={products} />
                <RelatedProduct products={products} addToCart={addToCart}
                />
            </div>
            <section className="pb-5 pt-3">
                <Container>
                    <article
                        className=""
                        style={{
                            backgroundImage: `url(${Prim})`,
                            height: '100px',
                            borderRadius: '6px',
                            backgroundSize: 'cover',
                        }}
                    >
                        <div className="card-body text-light pt-3 ps-2">
                            <Button
                                href="#"
                                className="mt-3 me-3 float-end text-light btn-warning"
                            >
                                Shop now
                            </Button>
                            <h3 className="card-title">Super discount on more than 100 USD</h3>
                            <p className="card-text">
                                Have you ever finally just write dummy info
                            </p>
                        </div>
                    </article>
                </Container>
            </section>
            <Footer />
        </div>
    )
}

export default ProductDetails
