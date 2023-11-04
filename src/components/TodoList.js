import { Component } from "react";
import styled from "styled-components";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todo: "",
      todoList: [],
    };
  }

  componentDidMount() {
    // Retrieve data from local storage when the component mounts
    const storedTodoList = localStorage.getItem("todoList");
    if (storedTodoList) {
      this.setState({ todoList: JSON.parse(storedTodoList) });
    }
  }

  handleInput = (event) => {
    this.setState({
      todo: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState(
      (prev) => ({
        todoList: [...prev.todoList, this.state.todo],
      }),
      () => {
        // Save the updated todoList to local storage
        localStorage.setItem("todoList", JSON.stringify(this.state.todoList));
      }
    );
    this.setState({
      todo: "",
    });
  };

  handleDeleteTodo = (index) => {
    const updatedTodoList = [...this.state.todoList];
    updatedTodoList.splice(index, 1);
    this.setState({ todoList: updatedTodoList }, () => {
      // Save the updated todoList to local storage
      localStorage.setItem("todoList", JSON.stringify(this.state.todoList));
    });
  };

  render() {
    return (
      <Body style={{ height: "100vh", width: "100vw" }}>
        <Div style={{ marginTop: "-390px" }}>
          <Form onSubmit={this.handleSubmit}>
            <Div>
              <H2 id="myTodo">My Todo List</H2>
              <Input
                type="text"
                value={this.state.todo}
                placeholder="What else you want to do..."
                onChange={this.handleInput}
              />
            </Div>

            <Button type="submit">ADD</Button>
          </Form>

          {this.state.todoList.map((todo, i) => (
            <TodoItem key={i}>
              <p style={{ fontFamily: "cursive", fontWeight: "bold" }}>
                {i + 1 + ". "}{todo}
              </p>
              <i
                style={DeleteBtn}
                onClick={() => this.handleDeleteTodo(i)}
                className="fa-solid fa-trash"
              ></i>
            </TodoItem>
          ))}
        </Div>
      </Body>
    );
  }
}

export default TodoList;

const Body = styled.body`
  background-color: white;
  border: 2px solid black;
`;

const Div = styled.div`
  width: 90vw;
  background-color: green;
`;

const Form = styled.form`
  // border: 2px solid green;
`;

const H2 = styled.h2`
  color: white;
`;

const Input = styled.input`
  color: black;
  font-weight: bold;
  font-family: cursive;
`;

const Button = styled.button`
  color: white;
`;

const TodoItem = styled.ol`
  background-color: skyblue;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:nth-child(2n) {
    background-color: #eee;
  }

  &:nth-child(2n + 1) {
    background-color: #f9f9f9;
  }
`;

const DeleteBtn = {
  padding: '20px',
  color: 'red',
  transition: 'color 0.2s',
  cursor: 'pointer'
};
