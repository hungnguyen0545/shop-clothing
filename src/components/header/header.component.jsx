import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import  { auth } from '../../firebase/firebase.utilis'
import {ReactComponent as Logo } from '../../assets/4.4 crown.svg.svg'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {selectCurrentUser} from '../../redux/user/user.selector'
import {selectCartHidden} from '../../redux/cart/cart.selector'

import './header.style.scss'

class Header extends Component  {
    render()
    {
        const {currentUser,hidden}  = this.props;
        return(
            <div className="header">
               <Link className="logo-container" to="/">
                   <Logo className="logo"></Logo>
               </Link>
               <div className="options">
                   <Link className="option" to="/shop">SHOP</Link>
                   <Link className="option" to="/contact">CONTACT</Link>
                   {
                       currentUser ? 
                       (<div className="option" onClick={() => auth.signOut()}>
                       SIGN OUT
                       </div>)
                       :(<Link className="option" to="/signin">
                       SIGN IN
                       </Link>)
                   }
                   <CartIcon></CartIcon>
               </div>
                   {
                       hidden ? null : <CartDropdown></CartDropdown>
                   }
            </div>
        )
    }
}
const mapStatetoProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden : selectCartHidden
})
export default connect(mapStatetoProps)(Header)