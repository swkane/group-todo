import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import doneList from '../done-todo-list.gif';
import Home from '../containers/Home';
// import ToDoList from '../containers/ToDoList';

class App extends Component {
  render() {
    return (
      <div className="container">

        <Home />
      </div>
    );
  }
}

export default App;
