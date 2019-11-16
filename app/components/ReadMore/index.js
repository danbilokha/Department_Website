import React from 'react';
import './index.css'

function ReadMore(props) {
    return (
        <a href = {props.link} className = "container_readMore">
            <p  className = "readMore">{props.readMore}</p>
        </a>
    );
  }
  
export default ReadMore;