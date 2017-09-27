import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import doneList from '../done-todo-list.gif';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">To-Do List</h1>
        </header>
        <p className="App-intro">
          <img src={doneList} className="" alt="logo" />
            <div>do the thing</div>
        </p>
      </div>
    );
  }
}

export default App;
