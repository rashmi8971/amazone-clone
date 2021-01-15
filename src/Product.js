import React from 'react'
import './Product.css';

function Product({ title, image, price}) {
    return (
        <div className="product">
            
            <img src={image} alt="" />
            <a className="product__info" href="#">
                <p>{title}</p>
                <p className="product__price">
                    <strong>{price}</strong>
                    <small>rs</small>
                    
                </p>
                
            </a>
            
            
        </div>
    )
}

export default Product
