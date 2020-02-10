import CartActionType from './cart.type'
import {addItemtoCart} from './cart.util'


const INITIAL_STATE = {
    hidden : true,
    cartItems : []
}

const cartReducer = (state=INITIAL_STATE, action) => {
    switch(action.type)
    {
        case CartActionType.TOGGLE_CART_HIDDEN : 
        return {
            ...state,
            hidden : !state.hidden
        }
        case CartActionType.ADD_ITEMS : 
        return {
            ...state,
            cartItems : addItemtoCart(state.cartItems,action.payload)
        }
        default : 
        return state
    }
}

export default cartReducer