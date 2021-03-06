import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import Body from './components/Body';
import { Footer } from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
