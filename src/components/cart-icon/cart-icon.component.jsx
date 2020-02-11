import React from 'react'
import {connect} from 'react-redux'

import {ReactComponent as ShoppingIcon} from '../../assets/11.3 shopping-bag.svg.svg'
import {toggleCartHidden} from '../../redux/cart/cart.action'
import {selectCartItemsCount} from '../../redux/cart/cart.selector'

import './cart-icon.style.scss'

const CartIcon = ({toggleCartHidden,Itemcount}) => {
    return(
        <div className="cart-icon">
            <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden}></ShoppingIcon>
            <span className='item-count'>
               {Itemcount}
            </span>
        </div>
    )
}


const mapDisplatchtoProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})

const mapStatetoProps = (state) => {
    return(
        {
            Itemcount : selectCartItemsCount(state)
        }
    )
}
export default connect(mapStatetoProps,mapDisplatchtoProps)(CartIcon)