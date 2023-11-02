import {Component} from "react";
import UserRegistration from "./components/UserRegistration";

class App extends Component{
  render(){
    return(
      <div>
        <h1>Welcome to ReactJs</h1>
        <UserRegistration />
      </div>
    )
  }
}

export default App;