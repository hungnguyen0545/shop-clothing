import React from 'react'
import {withRouter} from 'react-router-dom'
import CustomButton from '../custom-button/custom-button.component'
import {connect} from 'react-redux'
import CartItem from '../cart-item/cart-item.component'
import {selectCartItems} from '../../redux/cart/cart.selector'
import {toggleCartHidden} from '../../redux/cart/cart.action'
import './cart-dropdown.style.scss'

const CartDropdown = ({cartItems, history,dispatch}) => {
    return (
        <div className='cart-dropdown'>
             <div className='cart-items'>
                {
                    cartItems.length ? 
                    (cartItems.map(cartItem => 
                <CartItem key={cartItem.id} item={cartItem}></CartItem>)
                    ) 
                    : <span className='empty-message'> Cart is empty </span>
                }
             </div>
             <CustomButton onClick={() => 
             {
                 history.push("/checkout");
                 dispatch(toggleCartHidden())
             }}>
              Go to Checkout
             </CustomButton>
        </div>
    )
}
const mapStatetoProps = (state) => ({
    cartItems : selectCartItems(state)
})
export default withRouter(connect(mapStatetoProps)(CartDropdown))