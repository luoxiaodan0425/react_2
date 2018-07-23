import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

class Hello extends Component{
  // static defaultProps={
  //   name:"rails365"
  // }

  render() {
    return (
      <div>
        <h1>Hello, { this.props.money }, { this.props.name }</h1>
        <ul>
          {
            this.props.movies.map(movie => <li key={ movie.id }>{ movie.title }</li>)
          }
        </ul>
      </div>
    )
  }
}

Hello.propTypes={
  money: PropTypes.number,
  // name:PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired,
  name:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    visit_count: PropTypes.number
  }))
}
// Hello.defaultProps={
//   name:"rails365"
// }

class App extends Component {
  onChange() {
  }

  state = {
    movies: [
      { id: 1, title: 'title 1', visit_count: 1 },
      { id: 2, title: 'title 2', visit_count: 2 }
    ]
  }

  render() {
    return (
      <div className="App">
        <Hello money={ 99 } movies={ this.state.movies } name={ "rails365" } onChange={ this.onChange } />
    </div>
    );
  }
}

export default App;
