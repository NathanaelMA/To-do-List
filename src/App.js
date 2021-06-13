import React from 'react';
import Header from "./component/header"
import Todo from "./component/ToDo"
import './App.css';

function App() {
  return (
    <div className="App">
    <Header/>
    <div className="todoBody">
    <Todo/>
    </div>
    </div>
  );
}

export default App;
