import React from 'react';
import './index.css'

export default class BackToTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick() {
        console.log('По кнопке кликнули');
      }

  backToTop() {
        $("body,html").animate({
          scrollTop:0
        },1000);
      }

  render() {
    return (<a href="#" className="back-to-top" onClick={this.backToTop.bind(this)}></a>);
  }
}
