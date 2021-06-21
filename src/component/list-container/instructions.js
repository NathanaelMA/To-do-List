import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Edit from "@material-ui/icons/Edit";

export default function Instructions() {
  return (
    <div>
      <h3>Todo List Instructions</h3>
      <p>
        <Checkbox /> - Check complete{" "}
      </p>
      <p>
        <AddCircleIcon /> - Add new list item
      </p>
      <p>
        <Edit /> - Enter new todo text in textfield, then click edit
      </p>
      <p>
        <DeleteIcon /> - Deletes list item
      </p>
    </div>
  );
}
