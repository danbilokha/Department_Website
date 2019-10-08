import React from 'react';
import image1 from '../../containers/KafedraPage/images/image1.png';
import Img from '../../components/Img/index';

function Slider(props) {
    return (
      <div className = "image_for_slider">
        <Img src={image1}  className = 'image1'/>
      </div>
    );
  }
  
export default Slider;