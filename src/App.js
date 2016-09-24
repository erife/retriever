import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import ResultsList from './components/ResultsList';

class App extends Component {
  render() {
    return (
      <div className="App">

            <Search />
            <ResultsList />
        </div>
    );
  }
}

export default App;
