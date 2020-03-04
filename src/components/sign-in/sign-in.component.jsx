import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {auth,SignInWithGoogle} from '../../firebase/firebase.utilis'

import './sign-in.style.scss'

class Signin extends Component
{
    constructor()
    {
        super();
        this.state = {
            email : '',
            password : ''
         }
    }
    handleSubmit = async (e) => {
        e.preventDefault();

        const {email, password}  = this.state;

        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email :'' , password : ''});
        }
        catch(error)
        {
            console.log(error);
        }

    }
    handleChange = (e) => {
        const {name,value} = e.target;

        this.setState({[name] : value});
    }
    render()
    {
        const {email,password} = this.state;
        return(
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>              
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    type="email" name="email" 
                    handleChange={this.handleChange} 
                    value={email}
                    label="email" 
                    required/>                  
                    <FormInput
                     type ="password" name="password" 
                     handleChange={this.handleChange} 
                     value={password} 
                     label ="password"
                     required/>
                    <div className="buttons">
                    <CustomButton type="submit" value="Submit Form">SIGN IN</CustomButton>
                    <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                    </div>       
                </form>
            </div>
        )
    }
}

export default Signin