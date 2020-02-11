import CartActionType from './cart.type'
import {addItemtoCart, removeItemfromCart} from './cart.util'



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
        case CartActionType.CLEAR_ITEM_FROM_CART : 
        return {
            ...state,
            cartItems : state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.id
            )
        }
        case CartActionType.REMOVE_ITEM : 
        return {
            ...state,
            cartItems : removeItemfromCart(state.cartItems,action.payload)
        }
        default : 
        return state
    }
}

export default cartReducer