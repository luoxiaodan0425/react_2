import React, { Component } from 'react';
import './App.css';
import { State } from 'react-powerplug'

class Counter extends Component {
  render() {
    return (
      <State initial={{counter:0}}>
        {({state,setState})=>(
          <div className="App">
            <div>Counter: { state.counter }</div>
            <button onClick={()=>setState({counter:state.counter+1})}>Increment</button>
            <button onClick={()=>setState({counter:state.counter-1}) }>Decrement</button>
          </div>
        )}
      </State>
    );
  }
}

export default Counter;