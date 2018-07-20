import React, { Component, PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';

class Temp extends PureComponent {
  render(){
    console.log('render Temp')
    return (
      <div>{this.props.val}</div>
    );
  }
}

class App extends Component {
  state={
    val:1
  }
  componentDidMount(){
    setInterval(()=>{
      this.setState({
        val:1
      })
    },200)
  }

  render() {
    console.log('render App')
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Temp val={this.state.val}/>
      </div>
    );
  }
}

export default App;
