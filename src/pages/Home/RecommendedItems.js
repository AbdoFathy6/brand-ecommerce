import '../../assets/css/main.css'
import ProductRecommend from './ProductRecommend';
import React from "react";
import { Link } from 'react-router-dom';

const RecommendedItems = ({ products }) => {


    return (
        <section className='products-list '>
            <h3 className='text-black py-2'>Suppliers by region</h3>
            <div className="product-graid">
                {products.slice(0, 10).map((product) => ( // Limit to 10 products
                    <Link
                        key={product.id}
                        to={`/products/${product.id}`} state={product}

                    >
                        <ProductRecommend
                            product={product}

                        />
                    </Link>
                ))}
            </div>
        </section>
    );

}

export default RecommendedItems
