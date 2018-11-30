import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import Yelp from './util/Yelp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [] 
    };
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    Yelp.searchYelp(term, location, sortBy).then((businesses) => {
      this.setState({ businesses: businesses });
    });
  }

  render() {
    return (
      <div className="app">
        <h1>YELP CLONE</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        {this.state.businesses && <BusinessList businesses={this.state.businesses} />}
      </div>
    );
  }
}

export default App;
