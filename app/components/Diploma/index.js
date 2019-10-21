import React from 'react';
import ReadMore from '../ReadMore/index'
import './index.css'

function InformationSlider(props) {
    return (
    <p className = "container_information_slider">
        <h1>{props.mainHeader}</h1>
        <h2>{props.header}</h2>
        <p>{props.content}</p>
        <ReadMore readMore = "Читати докладніше"/>
    </p>);
  }
  
export default InformationSlider;