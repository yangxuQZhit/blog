import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: '' };
  }
  callAPI() {
    axios.get('http://localhost:9000/testAPI')
    .then(res => {
      this.setState({ apiResponse: res.data });
    })
    .catch(err => {
      console.error(err); 
    })
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>{ this.state.apiResponse }</p>
        </header>
      </div>
    );
  }
}

export default App;
