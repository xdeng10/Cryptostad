import React, { Component } from 'react';
import './Signin.css';
import { Link } from 'react-router-dom';


class Signin extends Component {
    render() {
        return (
            <main>
                <div className="signin-container">
                    <h1>Sign In</h1>
                    <div className="signin-form-container">
                        <form class="signin-form" action="" method="post">
                            <fieldset>
                                <div className="input-container">
                                    <label for="userEmail"><b>Email</b></label><br />
                                </div>
                                <input type="email" placeholder="Enter Your Email Address..." name="userEmail" required />
                                <div className="input-container">
                                    <label for="userPsw"><b>Password</b></label><br />
                                    <Link className="forgotPsw-link" to="" title="forgotPsw">Forgot Password?</Link>
                                </div>
                                <input type="password" placeholder="Enter Your Password..." name="userPsw" required />
                            </fieldset>
                            <button className="signin-button">
                                SIGN IN
                            </button>
                            <br />
                            <div className="new-signup">
                                <span>New to CryptoExchange? </span>
                                <Link className="new-signup-link" to="/signup" title="Signup">Create an account</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        );
    }
}

export default Signin;