import React, { Component } from "react";

import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import Edit from "@material-ui/icons/Edit";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import "./list.css";
import { IconButton } from "@material-ui/core";

class List extends Component {
  state = {
    todos: [],
  };

  renderTodos() {
    if (this.state.todos.length === 0)
      return <p>Please enter to do list tasks</p>;

    return (
      <ul>
        {" "}
        {this.state.todos.map((todo, index) => (
          <p key={todo.word}>
            {" "}
            <IconButton id="update" onClick={() => this.toggleCheck(index)}>
              <Checkbox />
            </IconButton>
            <span
              className={todo.isComplete ? "listComplete" : "listNotComplete"}
            >
              <p1> </p1>
              {todo.word} <p1> </p1>
              <span className="dateTime">{todo.date} </span>
            </span>
            <IconButton id="update" onClick={() => this.updateItem(todo)}>
              <Edit />
            </IconButton>
            <IconButton id="delete" onClick={() => this.removeItem(todo)}>
              <DeleteIcon />
            </IconButton>{" "}
          </p>
        ))}{" "}
      </ul>
    );
  }

  render() {
    return (
      <span>
        <IconButton id="add" onClick={this.increaseArr}>
          <AddCircleIcon />
        </IconButton>
        <div className="listOutput">{this.renderTodos()}</div>
      </span>
    );
  }

  toggleCheck = (index) => {
    this.setState((prevState) => {
      prevState.todos[index].isComplete = !prevState.todos[index].isComplete;
      return {
        todos: prevState.todos,
      };
    });
  };

  removeItem = (todo) => {
    let arr = this.state.todos;
    return this.setState({
      todos: arr.filter((item) => item !== todo),
    });
  };

  updateItem = (todo) => {
    this.removeItem(todo);
    let arr = this.state.todos;
    let words = this.props.text;
    //return alert(arr.indexOf(todo));

    return;
  };
  //adds the user inputted task to the  array
  increaseArr = () => {
    let arr = this.state.todos;
    let words = this.props.text;
    if (words.length < 1) return alert("Please enter a list item!");
    for (let i of arr) {
      if (i.word.includes(words)) return alert("No duplicates allowed!");
    }

    this.setState((prevState) => {
      return {
        todos: [
          ...prevState.todos,
          {
            word: words,
            date: new Date().toLocaleString().replace(",", ""),
            isComplete: false,
          },
        ],
      };
    });
  };
}

export default List;
