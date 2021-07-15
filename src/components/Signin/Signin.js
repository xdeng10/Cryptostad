import React, { Component } from 'react';
import './Signin.css';
import { Link } from 'react-router-dom';


class Signin extends Component {
    constructor(props){
        super(props);
        this.state={
            signInEmail: '',
            signInPassword: '',
            signInError: false,
        }
    }
    setSignInEmail(signInEmail) {
        this.setState({ signInEmail: signInEmail });
    }
    setSignInPassword(signInPassword) {
        this.setState({ signInPassword: signInPassword });
    }
    setSignInError(signInError) {
        this.setState({ signInError: signInError });
    }

    //Check if email and password is a valid user information
    onSubmitSignIn(event){
        this.setSignInError(false);
        event.preventDefault()
        fetch('http://localhost:3500/signin', {
            method:'post',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(response => response.json())
        .then(data => {  //Check if we successfully login or not
            if(data === "Success!"){
                this.props.history.push('/');
            }else{
                this.setSignInError(true);
            }
        })
    }

    displayErrorMess(){
        if(this.state.signInError){
            return <p className="red">You have entered incorrect information. <br />Check your email and password and try again.</p>
        }
    }


    render() {
        return (
            <main>
                <div className="signin-container">
                    <h1>Sign In</h1>
                    <div className="signin-form-container">
                        {this.displayErrorMess()}
                        <form className="signin-form" action="" method="post">
                            <fieldset>
                                <div className="input-container">
                                    <label htmlFor="userEmail"><b>Email</b></label><br />
                                </div>
                                <input 
                                    type="email" 
                                    placeholder="Enter Your Email Address..." 
                                    name="userEmail" 
                                    onChange={(event) => this.setSignInEmail(event.target.value)}
                                    required />
                                <div className="input-container">
                                    <label htmlFor="userPsw"><b>Password</b></label><br />
                                    <Link className="forgotPsw-link" to="" title="forgotPsw">Forgot Password?</Link>
                                </div>
                                <input 
                                    type="password" 
                                    placeholder="Enter Your Password..." 
                                    name="userPsw" 
                                    onChange={(event) => this.setSignInPassword(event.target.value)}
                                    required />
                            </fieldset>
                            <button className="signin-button" onClick={this.onSubmitSignIn.bind(this)}>
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