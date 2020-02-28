import React from 'react'

import ProfileImage from '../../assets/chow-chow.jpg'
import './contact.style.scss'

const ContactPage = () =>{
    return(
        <div className="contact-page">
            <div className="title">
                <h1> Welcome to HUNG's <strike> SHOP CLOTHING</strike>  </h1>
            </div>
            <div  className="content">
                <div className="about-project">
                    <h1> ABOUT PROJECT</h1>
                    <p>HUNG's Shop Clothing is a Ecommecrce Website . </p>
                    <p> Some FrameWork , Library had used in this project : </p>
                    <ul className="Framework-Library">
                        <li>HTML5/CSS3/SCSS</li>
                        <li>ReactJS</li>
                        <li>Redux/Reselect</li>
                        <li>redux-persist</li>
                    </ul>
                   
                </div>
                <div className= "about-me"> 
                    <div className="img-box">
                    <img src={ProfileImage} alt="Profile"></img>
                    </div>
                    
                    <div className="description">
                        <p className ="name"><b>Name</b>: Nguyễn Sỹ Cảnh Hưng</p>
                        <p className="age"><b>Age</b>: 20</p>
                        <p className="study"> 
                            <b>Studying at</b>: Univesity Information Technology (UIT)
                        </p>
                        <p className="email"><b>Email</b> : syhung15061999@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage