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
              <p>Студенти НТУУ «КПІ» мають можливість навчатися по програмам магістратури НТУУ «КПІ» «Інформаційні мережі зв’язку» у поєднанні з програмою магістратури ТУД «Інженерія розподілених систем» (Distributed Systems Engineering) для отримання другої вищої освіти. Формування та підготовка груп студентів починається з другого року їх навчання в НТУУ «КПІ» за результатами завершення першого року навчання.</p>
              <ReadMore link = "http://its.kpi.ua/Pages/default.aspx?section=doublemaster" readMore = "Читати докладніше"/>
          </div>
          <div>
            <Img src={image_TUD} className="clearfix" id = 'image_TUD'/>
          </div>
      </div>
    </>);
  }
  
export default Second_Diploma_news;