import React from 'react';
import './index.css';

function TermDescription(props) {
  return (
    <p className="degree_content clearfix">
      <b>
        {props.bold_and_italic_name}
      </b>
      {props.text}
    </p>
  );
}

export default TermDescription;
