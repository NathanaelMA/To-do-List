import React, { Component } from "react";
import List from "./list";
import TextField from "@material-ui/core/TextField";
import "./listUpdate.css";

class ListUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };

    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInput(event) {
    this.setState({ username: event.target.value });
  }

  handleSubmit() {
    console.log("Your input value is: " + this.state.username);
  }
  render() {
    return (
      <span className="addToDo">
        <TextField
          label="Add a To-Do!"
          placeholder="buy milk, workout, etc"
          onChange={this.updateInput}
        />
        <List text={this.state.username} />
      </span>
    );
  }
}

export default ListUpdate;
