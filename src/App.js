import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

const PropsLogger = (WrapperComponent)=>{
  return class extends Component{
    render(){
      return <WrapperComponent {...this.props} />
    }
  }
}

const Hello = PropsLogger((props)=>{
  return(
    <p>Hello {props.name}</p>
  )
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello name="sdfasf"/>
      </div>
    );
  }
}

export default App;
