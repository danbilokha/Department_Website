import React from 'react';
import image1 from '../../containers/KafedraPage/images/TUD.jpg';
import Img from '../../components/Img/index';

function Slider(props) {
    return (
      <div className = "conteiner_image_for_slider">
        <Img src={image1}  className = 'image1'/>
      </div>
    );
  }
  
export default Slider;