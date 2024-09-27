import React from 'react';
import './Sign_up.css'


import user_icon from '../assets/person.png';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';


function SignUp() {

    return <div className="apna-s-container">
        <div className="apna-s-header">
            <div className="apna-s-text">
                Sign Up
            </div>
            <div className="apna-s-underline"></div>
        </div>
        <div className="apna-s-inputs">
            <div className="apna-s-input">
                <img src={user_icon} alt="user icon" />
                <input type="text" placeholder="User Name....." />
            </div>
            <div className="apna-s-input">
                <img src={email_icon} alt="email icon" />
                <input type="email" placeholder="Email....." />
            </div>
            <div className="apna-s-input">
                <img src={password_icon} alt="password icon" />
                <input type="password" placeholder="Password....." />
            </div>
        </div>
        <div className="apna-s-forgot-password">Forgot Password? <span>Click Here!</span></div>
        <div className="apna-s-submit-container">
            <div className="apna-s-submit">Sign Up</div>
            <div className="apna-s-submit">Log In</div>
        </div>
    </div>
}


export default SignUp;