import React from 'react'

const product = React.memo(({ image, title, text }) => {
    return (
        <div style={{ textAlign: 'center', padding: '10px' }}>
            <img src={image} alt={title} style={{ width: '100%', height: '100%' }} />
            <h6 className='text-black'>{title}</h6>
            <span style={{
                color: '#ff4d4d',
                padding: '5px 10px',
                display: 'inline-block',
            }}>
                {text}
            </span>
        </div>
    )
})

export default product;
