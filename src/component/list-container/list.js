import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import UpdateIcon from "@material-ui/icons/Update";
import "./list.css";

class List extends Component {
  state = {
    todos: [],
  };

  checkBox = (check) => {
    //alert(check);
  };

  rendertodos() {
    if (this.state.todos.length === 0)
      return <p>Please enter to do list tasks</p>;

    return (
      <ul>
        {" "}
        {this.state.todos.map((todo) => (
          <p
            key={todo[0]}
            style={{
              color: "black",
              textDecoration: this.checkBox() ? "Line-through" : null,
            }}
          >
            {" "}
            <input
              type="checkbox"
              //checked={this.isChecked}
              onChange={() => this.checkBox(todo[0])}
              id="checkbox"
            />
            {todo[0]} <p1> </p1>
            <span className="dateTime">{todo[1]} </span>
            <IconButton id="delete">
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

  removeItem = (todo) => {
    let arr = this.state.todos;
    return this.setState({
      todos: arr.filter((item) => item !== todo),
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
    for (let i of arr) {
      if (i.includes(words)) return alert("No duplicates allowed");
    }

    this.setState({
      todos: [
        ...arr,
        [words, new Date().toLocaleString().replace(",", ""), false],
      ],
    });
  };
}

export default List;
