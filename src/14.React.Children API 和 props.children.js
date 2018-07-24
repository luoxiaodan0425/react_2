import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
            { React.Children.map(this.props.children,(child,i)=>{
              return React.cloneElement(child,{
                name:'rails365'
              })
            })}
        </ul>
        { React.Children.count(this.props.children) }
      </div>
    );
  }
}

export default App;
