import React from 'react';
import './index.css';
import XML from './XML.png';

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
          <tr name="head_table">
            <th>Тип</th>
            <th>Nazva</th>
            <th>Zmineno</th>
            <th>Kym zmineno</th>
          </tr>

          <tr name="first">
            <td>
              <img src={XML} alt="XML" />
            </td>
            <td>
              <a href="">НП_бакалаври__2016_2015_ІТС</a>
            </td>
            <td />
            <td />
          </tr>

          <tr name="second">
            <td>
              <img src={XML} alt="XML" />
            </td>
            <td>
              <a href="">НП_бакалаври__2016_2015_ІТС</a>
            </td>
            <td /> <td />
          </tr>

          <tr name="third">
            <td>
              <img src={XML} alt="XML" />
            </td>
            <td>
              <a href="">НП_бакалаври__2016_2015_ІТС</a>
            </td>
            <td /> <td />
          </tr>

          <tr name="fourth">
            <td>
              <img src={XML} alt="XML" />
            </td>
            <td>
              <a href="">НП_бакалаври__2016_2015_ІТС</a>
            </td>
            <td /> <td />
          </tr>

          <tr name="fifth">
            <td>
              <img src={XML} alt="XML" />
            </td>
            <td>
              <a href="">НП_млад.специалист_2017_ІТС_ІТМ-ПЕРЕХОДНОЙ_2018</a>
            </td>
            <td /> <td />
          </tr>
        </table>
      </div>
    );
  }
}
