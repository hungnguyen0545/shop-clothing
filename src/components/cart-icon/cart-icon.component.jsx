import React from 'react'
import {connect} from 'react-redux'

import {ReactComponent as ShoppingIcon} from '../../assets/11.3 shopping-bag.svg.svg'
import {toggleCartHidden} from '../../redux/cart/cart.action'

import './cart-icon.style.scss'

const CartIcon = ({toggleCartHidden}) => {
    return(
        <div className="cart-icon">
            <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden}></ShoppingIcon>
            <span className='item-count'>0</span>
        </div>
    )
}

const mapDisplatchtoProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})
export default connect(null,mapDisplatchtoProps)(CartIcon)