import React from 'react';

import './index.css';
import Img from '../../components/Img/index';

import icon_certificate from '../../containers/KafedraPage/images/icon_certificate.png';
import icon_diploma from '../../containers/KafedraPage/images/icon_diploma.png';
import icon_graduate_student from '../../containers/KafedraPage/images/icon_graduate_student.png';
import icon_scroll from '../../containers/KafedraPage/images/icon_scroll.png';


function ForEnterer(props) {
    return (
    <div className = "Block">
      <div className = "container_item_forEnterer">
          <div>
            <Img src={icon_certificate}  className = 'icon_ForEnterer'/>
          </div>
          <p className = "boldName">Вступ на 1-й курс</p>
          <p className = "numberName">за сертифікатами ЗНО</p>
      </div>
      <div className = "container_item_forEnterer">
          <div>
            <Img src={icon_diploma}  className = 'icon_ForEnterer'/>
          </div>
          <p className = "boldName">Вступ на 1-й курс</p>
          <p className = "numberName">"за дипломом молодшого спеціаліста</p>
      </div>
      <div className = "container_item_forEnterer">
          <div>
            <Img src={icon_graduate_student}  className = 'icon_ForEnterer'/>
          </div>
          <p className = "boldName">Вступ на 5-й курс</p>
          <p className = "numberName"></p>
      </div>
      <div className = "container_item_forEnterer">
          <div>
            <Img src={icon_scroll}  className = 'icon_ForEnterer'/>
          </div>
          <p className = "boldName">Офіційні документи</p>
          <p className = "numberName"></p>
      </div>
    </div>);
  }
  
export default ForEnterer;