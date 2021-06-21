import React, { Component } from "react";
import List from "./list";
import TextField from "@material-ui/core/TextField";
import "./listUpdate.css";
import Instructions from "./instructions";

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
        <div className="todoBody">
          <Instructions />
          <div className="listItems">
            <TextField
              label="Add a To-Do!"
              placeholder="buy milk, workout, etc"
              onChange={this.updateInput}
              data-testid="new-item-input"
            />

            <List text={this.state.userText} />
          </div>
        </div>
      </span>
    );
  }
}

export default ListUpdate;
