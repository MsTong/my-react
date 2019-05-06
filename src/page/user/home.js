import React, { Component } from 'react';
import './home.scss';
import UserHeader from './components/userHeader'

class App extends Component {
  render() {
    return (
      <div className="App">
       <UserHeader/>
      </div>
    );
  }
}

export default App;
