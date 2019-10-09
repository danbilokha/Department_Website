import React from 'react';
import './index.css';

export default class Process extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="proc">
        <h1>Навчальний процес</h1>
        <p>Навчальні плани</p>
        <table>
          <tr>
            <td>
              <img
                src="https://github.com/PashaKarlin/Department_Website/blob/studypage/app/components/Study_process/noun_XML_761101.png"
                alt=""
              />
            </td>
            <td />
            <td />
            <td />
          </tr>
          <tr>
            <td /> <td /> <td /> <td />
          </tr>
          <tr>
            <td /> <td /> <td /> <td />
          </tr>
          <tr>
            <td /> <td /> <td /> <td />
          </tr>
          <tr />
        </table>
      </div>
    );
  }
}
