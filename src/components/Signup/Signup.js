import React, { Component } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';


class Signup extends Component {

    constructor(props){
        super(props);
        this.state={
            fname: '',
            lname: '',
            email: '',
            password: '',
            signInError: false,
        }
    }
    setFname(fname) {
        this.setState({ fname: fname });
    }
    setLname(lname) {
        this.setState({ lname: lname });
    }
    setEmail(email) {
        this.setState({ email: email });
    }
    setPassword(password) {
        this.setState({ password: password });
    }
    setSignInError(signInError) {
        this.setState({ signInError: signInError });
    }

    //Check if email and password is a valid user information
    onSubmitSignUp(event){
        //this.setSignInError(false);
        event.preventDefault();
        fetch('http://localhost:3500/signup', {
            method:'post',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                userFName: this.state.fname,
                userLName: this.state.lname,
                userEmail: this.state.email,
                userPsw: this.state.password,
            })
        })
        .then(response => response.json())
        .then(user => { 
            if(user){
                this.props.loadUser(user);
                console.log(this.state);
                console.log(this.props.user);
                this.props.history.push('/');
            }
        })
    }

    render() {
        return (
            <main>
                <div className="signup-container">
                    <h1>Sign Up</h1>
                    <div className="signup-form-container">
                        <form className="signup-form" action="" method="post">
                            <fieldset>
                                <div className="signup-credential-container">
                                    <div>
                                        <label htmlFor="userFName"><b>First Name</b></label><br />
                                        <input 
                                            type="input" 
                                            placeholder="First Name" 
                                            name="userFName" 
                                            onChange={(event) => this.setFname(event.target.value)}
                                            required />
                                    </div>
                                    <div>
                                        <label htmlFor="userLName"><b>Last Name</b></label><br />
                                        <input 
                                            type="input" 
                                            placeholder="Last Name" 
                                            name="userLName" 
                                            onChange={(event) => this.setLname(event.target.value)}
                                            required />
                                    </div>
                                </div>
                                <label htmlFor="userEmail"><b>Email</b></label><br />
                                <input 
                                    type="email" 
                                    placeholder="Enter Your Email Address..." 
                                    name="userEmail" 
                                    onChange={(event) => this.setEmail(event.target.value)}
                                    required />
                                <br />
                                <label htmlFor="userPsw"><b>Password</b></label><br />
                                <input 
                                    type="password" 
                                    placeholder="Enter Your Password..." 
                                    name="userPsw" 
                                    onChange={(event) => this.setPassword(event.target.value)}
                                    required />
                            </fieldset>

                            <button 
                                className="signup-button"
                                onClick={this.onSubmitSignUp.bind(this)}
                            >
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