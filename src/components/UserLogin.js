import React, { Component } from "react";

import "./style.css"

class UserLogin extends Component {
    constructor(){
        super();

        this.state = {
            username: "",
            password: "",
            isValid: false
        }
    }
    
    handleUsername =(e)=>{
        this.setState({
            username: e.target.value
        })
    }

    handlePassword=(e)=>{
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.state);
    
      const user = {
        username: this.state.username,
        password: this.state.password
      };
    
      if (this.props.userDetails.some((u) => u.username === user.username && u.password === user.password)) {
        this.setState(
          {
            isValid: !this.state.isValid
          },
          () => {
            console.log("you are logged in");
            console.log(this.state.isValid); // This will log the updated isValid state
          }
        );
      } else {
        alert("incorrect details");
      }
    
      this.setState({
        username: "",
        password: ""
      });
    }
    

  render() {
    return (
        <div className="container" id="container">
            <div className="form-container sign-in-container">
		        <form action="#" onSubmit={this.handleSubmit}>
			        <h1>Sign in</h1>
			        <div className="social-container">
				        <a href="https://www.google.com/" className="social"><i className="fab fa-facebook-f"></i></a>
				        <a href="https://www.google.com/" className="social"><i className="fab fa-google-plus-g"></i></a>
				        <a href="https://www.google.com/" className="social"><i className="fab fa-linkedin-in"></i></a>
			        </div>
			        <span>or use your account</span>
			        <input type="username" placeholder="Username" value={this.state.username} onChange={this.handleUsername}/>
			        <input type="password" placeholder="Password" value={this.state.password} onChange={this.handlePassword}/>
			        <a href="https://www.google.com/">Forgot your password?</a>
			        <button onClick={(this.state.isValid) ? this.props.enableTodoPage : this.handleSubmit}>Sign In</button>
		        </form>
	        </div>

            <div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button className="ghost" id="signUp" onClick={this.props.loginToggle}>Sign Up</button>
			</div>
		</div>
	</div>
        </div>
    );
  }
}

export default UserLogin;
