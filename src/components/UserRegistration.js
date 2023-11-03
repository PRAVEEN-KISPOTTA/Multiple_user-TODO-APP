import React, { Component } from "react";
import "./style.css";

class UserRegistration extends Component {
  

  render() {
    return (
      <div className={(this.props.regToggle) ? "container right-panel-active" : "container"} id="container">
        <div className="form-container sign-up-container">
		      <form action="#" onSubmit={this.props.handleSubmit}>
			      <h1>Create Account</h1>
			      <div className="social-container">
				      <a href="https://www.google.com/" className="social"><i className="fab fa-facebook-f"></i></a>
				      <a href="https://www.google.com/" className="social"><i className="fab fa-google-plus-g"></i></a>
				      <a href="https://www.google.com/" className="social"><i className="fab fa-linkedin-in"></i></a>
			      </div>
			      <span>or use your username for registration</span>
			      <input type="text" placeholder="Name" value={this.props.name} onChange={this.props.handleName}/>
			      <input type="text" placeholder="Usename" value={this.props.username} onChange={this.props.handleUsername}/>
			      <input type="password" placeholder="Password" value={this.props.password} onChange={this.props.handlePassword}/>
            <input type="password" placeholder="Confirm Password" value={this.props.confirmPassword} onChange={this.props.handleConfirmPassword}/>
			      <button>Sign Up</button>
		      </form>
	      </div>

        <div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button className="ghost" id="signIn" onClick={this.props.regToggle}>Sign In</button>
			</div>
		</div>
	</div>
      </div>
    )
  }
}

export default UserRegistration;
