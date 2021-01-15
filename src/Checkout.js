import React from 'react';
import './Checkout.css';
import './Subtotal.css';

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkot__left">
                <img className="checkout__ad" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq8PirTFA-AY1yDQS5TKqj75JnWtJqt1M9aQ&usqp=CAU" alt="" />
                <div>
                    <h2 className="checkout__title">
                            Your shopping basket
                    </h2>
                    {/* Basket items */}
                </div>
            </div>
            <div className="checkout__right">
                {/* <Subtotal/> */}
                    {/* <h2>The subtotal will go here</h2> */}
            </div>
        </div>
    )
}

export default Checkout
