import React, { Component } from 'react';
import './App.css';
import Container from './Container';
class App extends Component {
  
  render() {
  return (
    <div className="App">     
      <div className="container">
        <div className="item item1">
         <Container />
        </div>
      </div>
    </div>
  );
}
}
export default App;
