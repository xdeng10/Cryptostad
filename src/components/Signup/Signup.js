import React, { Component } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';


class Signup extends Component {
    render() {
        return (
            <main>
                <div className="signup-container">
                    <h1>Sign Up</h1>
                    <div className="signup-form-container">
                        <form class="signup-form" action="" method="post">
                            <fieldset>
                                <div className="signup-credential-container">
                                    <div>
                                        <label for="userFName"><b>First Name</b></label><br />
                                        <input type="input" placeholder="First Name" name="userFName" required />
                                    </div>
                                    <div>
                                        <label for="userLName"><b>Last Name</b></label><br />
                                        <input type="input" placeholder="Last Name" name="userLName" required />
                                    </div>
                                </div>
                                <label for="userEmail"><b>Email</b></label><br />
                                <input type="email" placeholder="Enter Your Email Address..." name="userEmail" required />
                                <br />
                                <label for="userPsw"><b>Password</b></label><br />
                                <input type="password" placeholder="Enter Your Password..." name="userPsw" required />
                            </fieldset>

                            <button className="signup-button">
                                SIGN UP
                            </button>
                            <br />
                            <div className="signin-redirect">
                                <span>Already Have an Account? </span>
                                <Link className="signin-redirect-link" to="/signin" title="Signin">Sign in</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        );
    }
}

export default Signup;