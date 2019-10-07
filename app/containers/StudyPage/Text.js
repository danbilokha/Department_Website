import React from 'react';
import './Text.css';

export default class Hello_component extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          massage: "Hello world!"
      }
  
    }
    render() {
      return (
        <div id="firstBlock">
          <h1>{this.state.massage}</h1>
        </div>
      );
    }
  };