import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import "./list.css";

class List extends Component {
  state = {
    tags: [],
    isChecked: false,
  };

  checkBox = (check) => {
    if (!this.isChecked) return true;
    return this.setState({ isChecked: !this.isChecked });
  };

  rendertags() {
    if (this.state.tags.length === 0)
      return <p>Please enter to do list tasks</p>;

    return (
      <ul>
        {" "}
        {this.state.tags.map((tag) => (
          <p
            key={tag}
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
            {tag}{" "}
            <span className="dateTime">
              {" "}
              {new Date().toLocaleString().replace(",", "")}{" "}
            </span>
            <IconButton id="delete" onClick={() => this.removeItem(tag)}>
              <DeleteIcon />
            </IconButton>{" "}
          </p>
        ))}{" "}
      </ul>
    );
  }

  removeItem = (tag) => {
    let arr = this.state.tags;
    return this.setState({ tags: arr.filter((item) => item !== tag) });
  };

  render() {
    return (
      <span>
        <button className="pressButton" onClick={this.increaseArr}>
          ADD
        </button>
        <div className="listOutput">{this.rendertags()}</div>
      </span>
    );
  }

  increaseArr = () => {
    let arr = this.state.tags;
    let words = this.props.text;
    if (arr.includes(words)) return alert("No duplicates allowed");
    this.setState({
      tags: [...arr, words],
    });
  };
}

export default List;
