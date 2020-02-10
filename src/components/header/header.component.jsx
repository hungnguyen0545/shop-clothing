import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import  { auth } from '../../firebase/firebase.utilis'
import {ReactComponent as Logo } from '../../assets/4.4 crown.svg.svg'
import {connect} from 'react-redux'

import './header.style.scss'

class Header extends Component  {
    render()
    {
        const {currentUser}  = this.props;
        return(
            <div className="header">
               <Link className="logo-container" to="/">
                   <Logo className="logo"></Logo>
               </Link>
               <div className="options">
                   <Link className="option" to="/shop">SHOP</Link>
                   <Link className="option" to="/shop">CONTACT</Link>
                   {
                       currentUser ? 
                       (<div className="option" onClick={() => auth.signOut()}>
                       SIGN OUT
                       </div>)
                       :(<Link className="option" to="/signin">
                       SIGN IN
                       </Link>)
                   }
               </div>
            </div>
        )
    }
}
const mapStatetoProps = state => ({
    currentUser : state.user.currentUser
})
export default connect(mapStatetoProps)(Header)