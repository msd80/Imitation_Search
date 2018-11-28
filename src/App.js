import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList.js';
import SearchBar from './components/SearchBar/SearchBar.js'


class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>YELP CLONE</h1>
        <SearchBar />
        <BusinessList />
      </div>
    );
  }
}

export default App;
