import React from "react";
import Header from "./component/header";
import "./App.css";
import ListUpdate from "./component/list-container/listUpdate.js";

function App() {
  return (
    <div className="App">
      <Header />
      <ListUpdate />
    </div>
  );
}

export default App;
