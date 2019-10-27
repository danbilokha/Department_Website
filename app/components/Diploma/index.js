import React from 'react';
import ReadMore from '../ReadMore/index'
import './index.css'
import Img from '../../components/Img/index';
import image_TUD from './image/TUD.jpg';

function Second_Diploma_news(props) {
    return (
    <>
      <div className="container_image_and_text_TUD">                
          <div className = "container_text_TUD">
              <h2>Єдина магістерська програма</h2>
              <p>У рамках Європейської програми магістратури Distributed Systems Engineering, Інститут телекомунікаційних систем Національного технічного університету України «Київський політехнічний інститут» (НТУУ «КПІ») та факультет Інформатики Технічного університету м. Дрездена (ТУД) пропонують єдину міжнародну програму «Інженерія розподілених систем».</p>
              <ReadMore readMore = "Читати докладніше"/>
          </div>
          <div>
            <Img src={image_TUD}  id = 'image_TUD'/>
          </div>
      </div>
    </>);
  }
  
export default Second_Diploma_news;