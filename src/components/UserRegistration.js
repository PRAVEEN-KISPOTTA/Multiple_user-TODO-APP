import React, { Component } from "react";

class UserRegistration extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      username: "",
      password: "",
      repassword: "",
      userDetails: [] // Initialize an array to store multiple user details
    };
  }

  handleName = (event) => {
    this.setState({
      name: event.target.value
    });
  };

  handleUsername = (event) => {
    this.setState({
      username: event.target.value
    });
  };

  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    });
  };

  handleRePassword = (event) => {
    this.setState({
      repassword: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.password === this.state.repassword) {
      // Create a user object and add it to the array
      const user = {
        name: this.state.name,
        username: this.state.username,
        password: this.state.password
      };

      if(this.state.userDetails.some((u)=> u.username === user.username)){
        alert("This user already exist")
      }
      else{
        const userDetails = [...this.state.userDetails, user];

        this.setState({
          userDetails
        });
  
        // Store the updated array in localStorage
        localStorage.setItem("userDetails", JSON.stringify(userDetails));
  
        console.log("Account created");
      }

    
    } else {
      alert("Password does not match");
    }
  };

  render() {
    return (
      <div>
        <div style={centerLayout}>
          <form style={formLayout} onSubmit={this.handleSubmit}>
            <div>Name</div>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleName}
            />

            <div>Create Username</div>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleUsername}
            />

            <div>Create Password</div>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handlePassword}
            />

            <div>Re-enter Password</div>
            <input
              type="password"
              value={this.state.repassword}
              onChange={this.handleRePassword}
            />

            <div>
              <button type="submit">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default UserRegistration;

const centerLayout = {
  display: "flex",
  justifyContent: "center"
};

const formLayout = {
  border: "2px solid black",
  borderRadius: "20px",
  width: "11%",
  padding: "20px"
};
