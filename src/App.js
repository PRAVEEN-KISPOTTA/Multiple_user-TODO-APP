import {Component} from "react";
import UserRegistration from "./components/UserRegistration";
import UserLogin from "./components/UserLogin";
import TodoList from "./components/TodoList";

class App extends Component{
  constructor(){
    super();
    this.state = {
      toggle: false,
      loginPage: false,
      name: "",
      username: "",
      password: "",
      confirmPassword: "",
      userDetails: [] // Initialize an array to store multiple user details
    };
  }

  handleToggle =(event)=>{
    this.setState({
      toggle: !this.state.toggle
    })
  }

  handleTodoPage=()=>{
    this.setState({
      loginPage: !this.state.loginPage
    })
  }


  // ***************************************************
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

  handleConfirmPassword = (event) => {
    this.setState({
      confirmPassword: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.password === this.state.confirmPassword) {
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

    this.setState({
      name: "",
      username: "",
      password: "",
      confirmPassword: ""
    })
  };
  render(){
    return(
      <div>
        {(this.state.loginPage) ? <TodoList /> : 
                (!this.state.toggle) ? <UserLogin loginToggle={this.handleToggle}
                username={this.state.username}
                password={this.state.password}
                userDetails={this.state.userDetails}
                enableTodoPage={this.handleTodoPage}/> : 

     <UserRegistration regToggle={this.handleToggle}
                       handleName={this.handleName}
                       handleUsername={this.handleUsername}
                       handlePassword={this.handlePassword}
                       handleConfirmPassword={this.handleConfirmPassword}
                       handleSubmit={this.handleSubmit}
                       name={this.state.name}
                       username={this.state.username}
                       password={this.state.password}
                       confirmPassword={this.state.confirmPassword}/>}
      </div>
    )
  }
}

export default App;