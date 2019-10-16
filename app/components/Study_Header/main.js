import React from 'react';
import './main.css';

export default class Headlines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      one: `Звіти практики`,
      two: `Переддипломна практика 4-й курс`,
      three: `Переддипломна практика 6-й курс`,
    };
  }

  render() {
    return (
      <div>
        <ul id="headlines">
          <li>{this.state.one}</li>
          <li>{this.state.two}</li>
          <li>{this.state.three}</li>
        </ul>
      </div>
    );
  }
}
