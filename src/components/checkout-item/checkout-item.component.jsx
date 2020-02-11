import React from 'react'
import {connect} from 'react-redux'
import {addItem,clearItemfromCart,removeItem} from '../../redux/cart/cart.action'

import './checkout-item.style.scss'

const CheckoutItem = ({cartItem ,dispatch }) => {
    const {name, imageUrl,price,quantity} = cartItem
    return(
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='item' src={imageUrl}></img>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
            <div className='arrow' 
            onClick={ () => dispatch(removeItem(cartItem))}>
            &#10094;</div>
            <div className='value'>{quantity}</div>
            <div className='arrow'
            onClick={() => dispatch(addItem(cartItem))}
            >&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button'
            onClick={() => dispatch(clearItemfromCart(cartItem))}
            >&#10005;</div>
        </div>
    )
}
export default connect()(CheckoutItem)