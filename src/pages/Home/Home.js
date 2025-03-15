import React, { useEffect } from 'react';
import Header from '../../components/common/Navbar';
import Nav from '../../components/common/Nav';
import CatigorySlide from './CatigorySlide';
import Offer from './Offer';
import HomeProduct from './Homeproduct';
import Electonics from './Electonics';
import Suppliers from './Suppliers';
import RecommendedItems from './RecommendedItems';
import Services from './Services';
import SuppliersFlag from './SuppliersFlag';
import Subscrip from '../../components/common/Subscrip';
import Footer from '../../components/common/Footer';
import { useMediaQuery } from 'react-responsive';
import { fetchProducts } from '../../store/slices/productSlice';
import { useDispatch, useSelector } from "react-redux";

const Home = ({ userName, isSignedIn }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const dispatch = useDispatch();
    const products = useSelector((state) => state.productSlice.products); // Get products from Redux

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);



    return (
        <div className='w-100'>
            <Header />
            <Nav />
            {isMobile ? (
                <>
                    <CatigorySlide />
                    <Offer products={products} />
                    <HomeProduct products={products} />
                    <Electonics products={products} />
                    <Suppliers />
                    <div className='container'>
                        <RecommendedItems products={products} />
                        <Services />
                        <SuppliersFlag />
                    </div>
                </>
            ) : (
                <div className='container'>
                    <CatigorySlide userName={userName} isSignedIn={isSignedIn} />
                    <Offer products={products} />
                    <HomeProduct products={products} />
                    <Electonics products={products} />
                    <Suppliers products={products} />
                    <RecommendedItems products={products} />
                    <Services />
                    <SuppliersFlag />
                </div>
            )}
            <Subscrip />
            <Footer />
        </div>
    );
}

export default Home;
