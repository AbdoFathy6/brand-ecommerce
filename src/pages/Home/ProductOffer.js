import React from 'react';
const ProductOffer = ({ product }) => {
    return (
        <div className='offercard pt-0' style={{ textAlign: 'center', padding: '10px', width: '179px', height: '240px', mixBlendMode: 'multiply' }}>
            <img src={product.image} alt={product.title} className='  px-4 py-2  offerImg' style={{ width: '100%', height: '70%' }} />
            <h6 className='text-black ' style={{ fontSize: '12px' }}>{product.title.split(' ').slice(0, 2).join(' ')}</h6>
            <span style={{
                backgroundColor: '#ffe6e6',
                color: '#ff4d4d',
                padding: '5px 10px',
                borderRadius: '20px',
                display: 'inline-block',
            }}>
                25%
            </span>
        </div>
    );
};

export default ProductOffer;
