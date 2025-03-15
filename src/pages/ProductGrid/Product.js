import React, { useState, useEffect } from 'react';
import { fetchProducts, fetchCategories, fetchProductCategory } from '../../store/slices/productSlice';
import { useDispatch, useSelector } from "react-redux"; import Header from '../../components/common/Navbar.js';
import Breadcrumbs from '../../components/common/Breadcrumb.js'
import { Col, Row } from 'react-bootstrap';
import useIsMobile from '../../useIsMobile';
import HeaderP from './HeaderP';
import ListNav from './ListNav.js';
import Aside from './Aside';
import ListProduct from './ListProduct.js';
import Subscrip from '../../components/common/Subscrip.js';
import Footer from '../../components/common/Footer';
import Nav from '../../components/common/Nav.js';
const Product = () => {
    const isMobile = useIsMobile();
    const dispatch = useDispatch();
    const products = useSelector((state) => state.productSlice.products);
    const categories = useSelector((state) => state.productSlice.categories);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [page, setPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(9); // State for items per page
    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(fetchCategories());
    }, [dispatch]);
    const handleCategorySelect = (catname) => {
        setSelectedCategory(catname);
        dispatch(fetchProductCategory(catname));
    };

    const filteredProducts = selectedCategory
        ? products.filter(product => product.category === selectedCategory)
        : products;

    // حساب المنتجات على أساس الصفحة
    const startIndex = (page - 1) * itemsPerPage;
    const displayedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);
    const handleItemsPerPageChange = (items) => {
        setItemsPerPage(items);
        setPage(1); // Reset to first page when items per page changes
    };
    return (
        <div>
            {isMobile ? (
                <HeaderP />
            ) : (
                <Header />
            )}

            <Nav />
            <Breadcrumbs />
            {isMobile ? (
                <div>
                    <ListNav categories={categories}
                        selectedCategory={selectedCategory}
                        handleCategorySelect={handleCategorySelect} />

                    <div className='container'>
                        <ListProduct className="mb-0" displayedProducts={displayedProducts}
                            filteredProducts={filteredProducts}
                            itemsPerPage={itemsPerPage}
                            page={page}
                            setPage={setPage}
                            handleItemsPerPageChange={handleItemsPerPageChange} />
                    </div>
                </div>
            )
                : (
                    <div className='container d-lg-block d-none'>
                        <Row>
                            <Aside categories={categories}
                                selectedCategory={selectedCategory}
                                handleCategorySelect={handleCategorySelect}
                            />
                            <Col>
                                <ListNav />
                                <ListProduct displayedProducts={displayedProducts}
                                    filteredProducts={filteredProducts}
                                    itemsPerPage={itemsPerPage}
                                    page={page}
                                    setPage={setPage}
                                    handleItemsPerPageChange={handleItemsPerPageChange}
                                />
                            </Col>
                        </Row>
                    </div>
                )}
            <Subscrip />
            <Footer />
        </div>
    )
}

export default Product
