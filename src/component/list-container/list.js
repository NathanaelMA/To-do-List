import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import "./list.css";

class List extends Component {
  state = {
    todos: [
      {
        // text: "",
        // timestamp: "",
        // isChecked: false,
      },
    ],
  };

  checkBox = (check) => {
    if (!this.isChecked) return true;
    return !this.todos.isChecked;
  };

  rendertodos() {
    if (this.state.todos.length < 2)
      return <p>Please enter to do list tasks</p>;

    return (
      <ul>
        {" "}
        {this.state.todos.map((todo) => (
          <p
            key={todo.text}
            style={{
              color: "black",
              textDecoration: this.checkBox() ? "Line-through" : null,
            }}
          >
            {" "}
            <input
              type="checkbox"
              //checked={this.isChecked}
              onClick={() => this.checkBox()}
              id="checkbox"
            />
            {todo.text}
            {todo.timestamp} <span className="dateTime"> </span>
            <IconButton id="delete" onClick={() => this.removeItem(todo.text)}>
              <DeleteIcon />
            </IconButton>{" "}
          </p>
        ))}{" "}
      </ul>
    );
  }

  removeItem = (todo) => {
    let arr = this.state.todos;
    return this.setState({
      todos: arr.filter((item) => item.text !== todo),
    });
  };

  render() {
    return (
      <span>
        <button className="pressButton" onClick={this.increaseArr}>
          ADD
        </button>
        <div className="listOutput">{this.rendertodos()}</div>
      </span>
    );
  }

  increaseArr = () => {
    let arr = this.state.todos;
    let words = this.props.text;
    if (arr.includes(words)) return alert("No duplicates allowed");
    this.setState({
      todos: [
        ...arr,
        {
          text: words,
          timestamp: new Date().toLocaleString().replace(",", ""),
          isChecked: false,
        },
      ],
    });
  };
}

export default List;
