import React from 'react';

const CartSkeleton = () => {
    return (
        <div className='container'>
            <div className="bg-light-subtle w-50 rounded m-5">
                <span className='spinner-border m-5'></span>
            </div>
            <div className="bg-light-subtle w-50 rounded m-5">
                <span className='spinner-border m-5'></span>
            </div>
        </div>
    );
}

export default CartSkeleton;
