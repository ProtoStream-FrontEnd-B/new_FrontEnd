import React from 'react'
import Overlay1 from "../../Assets/Illustrations/Overlay1.svg"
import Overlay2 from "../../Assets/Illustrations/Overlay2.svg"
import './css/Auth.css'

function Signin() {
    return (
        <section className="auth">
            <div className="overlay1"><img src={Overlay1} alt="" /></div>
            <div className="overlay2"><img src={Overlay2} alt="" /></div>
            <div className="container">
                <div className="heading">Sign Up</div>
                <div className="sub-head">Sign up and start your Entrepreneurial Journey</div>
                <form action="" className="form">
                    <input type="email" placeholder="E-mail" className="inp-box" />
                    <input type="password" placeholder="Password" className="inp-box" />
                    <input type="password" placeholder="Confirm Password" className="inp-box" />
                    <p className="para">Already have an Account? <a href="/signin">Sign in</a></p>
                    <button className="sign-btn">Signup</button>
                </form>
            </div>
        </section>
    )
}

export default Signin
