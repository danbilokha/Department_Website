import React from 'react';
import './index.css';

function TermDescription(props) {
  return (
    <p className="degree_content clearfix">
      <b>
        <i>{props.bold_and_italic_name} </i>
      </b>
      {props.text}
    </p>
  );
}

export default TermDescription;
