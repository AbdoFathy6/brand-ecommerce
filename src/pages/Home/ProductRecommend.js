import React from 'react'

const ProductRecommend = ({ product }) => {
    return (
        <div className="Home-card  mb-2   " style={{ height: '310px' }}>
            <img src={product.image} className="card-img-top imgGrid px-lg-5 border-bottom  py-3" height="211px" alt="product" />
            <div className="card-body pt-0 float-start">
                <h6 className="card-price text-black fs-5 float-start p-2">${product.price}</h6>
                <br />
                <p className="card-text float-start  text-secondary">{product.title.split(' ').slice(0, 5).join(' ')}</p>

            </div>
        </div>
    )
}

export default ProductRecommend
