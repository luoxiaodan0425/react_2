import React, { Component, Fragment } from 'react';
// import logo from './logo.svg';
import './App.css';
import { list } from 'postcss';

const Temp=(props)=> {
  return (
    <Fragment>
      <li>55</li>
      <li>66</li>
    </Fragment>
  );
}

class App extends Component {
  render() {
    console.log('render App')
    return (
      <ul className="App">
        <Temp />
      </ul>
    );
  }
}

export default App;
