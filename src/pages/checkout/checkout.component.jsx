import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import { selectCartItems, selectTotal} from '../../redux/cart/cart.selector'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import  StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

import './checkout.style.scss'

class CheckoutPage extends Component
{
    render(){
        const {cartItems,total} = this.props;
        return(
            <div className='checkout-page'>
                <div className='checkout-header'>
                    <div className='header-block'>
                        <span>Product</span>
                    </div>
                    <div className='header-block'>
                        <span>Description</span>
                    </div>
                    <div className='header-block'>
                        <span>Quantity</span>
                    </div>
                    <div className='header-block'>
                        <span>Price</span>
                    </div>
                    <div className='header-block'>
                        <span>Remove</span>
                    </div>
                </div>
                    {
                        cartItems.map(cartItem => 
                        (
                            <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
                        )
                        )
                    }
                <div className='total'>
                    {
                        <span>TOTAL : ${total}</span>
                    }
                </div>
                <StripeCheckoutButton price={total}></StripeCheckoutButton>
            </div>
        );
     }
}

const mapStatetoProps = createStructuredSelector({
    cartItems : selectCartItems,
    total : selectTotal
})
export default connect(mapStatetoProps)(CheckoutPage)