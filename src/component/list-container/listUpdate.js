import React, { Component } from "react";
import List from "./list";
import TextField from "@material-ui/core/TextField";
import "./listUpdate.css";


//ListUpdate is taking the functions from List.js
class ListUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userText: "",
    };

    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(event) {
    this.setState({ userText: event.target.value });
  }

  render() {
    return (
      <span className="addToDo">
        <TextField
          label="Add a To-Do!"
          placeholder="buy milk, workout, etc"
          onChange={this.updateInput}
          data-testid="new-item-input"
        />
        <List text={this.state.userText} />
      </span>
    );
  }
}

export default ListUpdate;
