import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import {connect} from 'react-redux'
import CartItem from '../cart-item/cart-item.component'
import {selectCartItems} from '../../redux/cart/cart.selector'

import './cart-dropdown.style.scss'

const CartDropdown = ({cartItems}) => {
    return (
        <div className='cart-dropdown'>
             <div className='cart-items'>
                {cartItems.map(cartItem => 
                <CartItem key={cartItem.id} item={cartItem}></CartItem>)}
             </div>
             <CustomButton> Go to Checkout </CustomButton>
        </div>
    )
}
const mapStatetoProps = (state) => ({
    cartItems : selectCartItems(state)
})
export default connect(mapStatetoProps)(CartDropdown)