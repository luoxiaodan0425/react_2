import React, { Component } from 'react';
import './App.css';

const Wrapper=({ children })=>children;

const Hello=({name})=>{
  return (
    <Wrapper>
      <h1>React 16 rocks</h1>
      <p>Hello,{name}</p> 
    </Wrapper>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello name="lsnsm" />
      </div>
    );
  }
}

export default App;