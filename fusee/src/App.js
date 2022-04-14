import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { response } from 'express';

class App extends Component {
  constructor (){
    super();
    this.state ={
    launches:[]
    }
  }
}

ComponentDidMount(){
  fetch("https://api.spacexdata.com/v3/launches")
  .then((response)) => response.json())
  .then (launches => this.setState(launches))
}

render() {
  return (
    <div className="App">
      <header className="App-header">
       
        <p></p>
        <a></a>
      </header>
    </div>
  );
}

export default App;
