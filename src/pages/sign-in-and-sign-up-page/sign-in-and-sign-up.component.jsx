import React from 'react'
import Signin from '../../components/sign-in/sign-in.component'
import Signup from '../../components/sign-up/sign-up.component'

import './sign-in-and-sign-up.style.scss'



const SigninandSignupPage = ()  => {
    return(
        <div className='sign-in-and-sign-up'>
        <Signin></Signin>
        <Signup></Signup>       
        </div>   
    )
}

export default SigninandSignupPage