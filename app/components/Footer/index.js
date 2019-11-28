import React from 'react';
import A from 'components/A';
import TodoLists from './Lists/lists';
import './Wrapper.css';
import Vector from './vector.png';

function Footer() {
  return (
    <div className="Wrapper">
      {/* <A href="/">
        <img className="ButtonUp" src={Vector} alt="scroll up" />
      </A> */}
      <TodoLists />
    </div>
  );
}

export default Footer;
