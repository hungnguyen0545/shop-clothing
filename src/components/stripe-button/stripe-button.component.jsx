import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const Publishablekey = 'pk_test_RxHQylYDxKEp9MlknRCTeQxi00Iz9N1foV';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }
    return (
        <StripeCheckout
        label = 'Pay Now'
        name = 'Shop Clothing Cop.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description = {`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel = 'Pay Now'
        token = {onToken}
        stripeKey={Publishablekey}
        >
        </StripeCheckout>
    )
}
export default StripeCheckoutButton