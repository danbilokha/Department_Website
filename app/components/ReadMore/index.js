import React from 'react';
import './index.css'

function ReadMore(props) {
    return (
        <div className = "container_readMore">
            <a href = {props.link} className = "readMore">{props.readMore}</a>
        </div>
    );
  }
  
export default ReadMore;