import React, { Component } from 'react';
import './home.scss';
import UserHeader from './components/userHeader';
// import Title from './components/Title';

class App extends Component {
  render() {
    return (
      <div className="App">
       <UserHeader/>
       {/*<Title/>*/}
      </div>
    );
  }
}

export default App;
