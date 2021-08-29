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
                <div className="heading">Sign in</div>
                <div className="sub-head">Sign in and continue your Entrepreneurial Journey</div>
                <form action="" className="form">
                    <input type="email" placeholder="E-mail" className="inp-box" />
                    <input type="password" placeholder="Password" className="inp-box" />
                    <div className="remember">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Remember me</label>
                    </div>
                    <p className="para"><a href="#">Forgot Password.</a> New here? <a href="/signup">Sign up</a></p>
                    <button className="sign-btn">Login</button>
                </form>
            </div>
        </section>
    )
}

export default Signin
