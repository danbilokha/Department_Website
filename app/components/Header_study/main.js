import React from 'react';
import './main.css';

export default class Headlines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      one: `Звіти практики`,
      two: `Преддипломна практика 4-й курс`,
      three: `Преддипломна практика 6-йкурс`,
    };
  }

  render() {
    return (
      <div>
        <ol>
          <li>{this.state.one}</li>
          <li>{this.state.two}</li>
          <li>{this.state.three}</li>
        </ol>
      </div>
    );
  }
}
