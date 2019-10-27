import React from 'react'

function TermDescription(props) {
    return (
    <p>
        <b><i>{props.bold_and_italic_name} </i></b>
        {props.text}
    </p>);
  }
  
export default TermDescription;