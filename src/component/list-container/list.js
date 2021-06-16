import React, { Component } from "react";

import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import UpdateIcon from "@material-ui/icons/Update";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import "./list.css";
import { IconButton } from "@material-ui/core";

class List extends Component {
  state = {
    todos: [],
    isCheck: false,
  };

  rendertodos() {
    if (this.state.todos.length === 0)
      return <p>Please enter to do list tasks</p>;

    return (
      <ul>
        {" "}
        {this.state.todos.map((todo) => (
          <p key={todo[0]}>
            {" "}
            <IconButton id="update" onClick={() => this.boxChecked(todo)}>
              <Checkbox />
            </IconButton>
            <span
              className={
                this.state.isCheck ? "listComplete" : "listNotComplete"
              }
            >
              <p1> </p1>
              {todo[0]} <p1> </p1>
              <span className="dateTime">{todo[1]} </span>
            </span>
            <IconButton id="update" onClick={() => this.updateItem(todo)}>
              <UpdateIcon />
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

        <div className="listOutput">{this.rendertodos()}</div>
      </span>
    );
  }

  boxChecked = (todoID) => {
    let booln = this.state.isCheck;
    let updateTodo = this.state.todos.map((todo) => {
      if (todo === todoID) {
        return this.setState({
          isCheck: !booln,
        });
      }
    });
  };

  removeItem = (todo) => {
    let arr = this.state.todos;
    return this.setState({
      todos: arr.filter((item) => item !== todo),
    });
  };

  updateItem = (todo) => {
    let arr = this.state.todos;
    this.removeItem(todo), this.increaseArr();
  };

  increaseArr = () => {
    let arr = this.state.todos;
    let words = this.props.text;
    for (let i of arr) {
      if (i.includes(words)) return alert("No duplicates allowed!");
    }
    if (words.length < 1) return alert("Please enter a list item!");

    this.setState({
      todos: [
        [words, new Date().toLocaleString().replace(",", ""), true],
        ...arr,
      ],
    });
  };
}

export default List;
