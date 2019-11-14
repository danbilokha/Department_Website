import React from 'react';

import './index.css';
import Img from '../Img/index';

import icon_certificate from '../../containers/KafedraPage/images/icon_certificate.png';
import icon_diploma from '../../containers/KafedraPage/images/icon_diploma.png';
import icon_graduate_student from '../../containers/KafedraPage/images/icon_graduate_student.png';
import icon_scroll from '../../containers/KafedraPage/images/icon_scroll.png';
import icon_contacts from '../../containers/EnterPage/images/icon_contacts.png';

function ForEntrant(props) {
  return (
    <div className="Block">
      <div className="container_item_forEnterer">
        <div>
          <Img src={icon_certificate} className="icon_ForEnterer" />
        </div>
        <a href="http://its.kpi.ua/Pages/Abiturient/%d0%92%d1%81%d1%82%d1%83%d0%bf%d0%bd%d0%b8%d0%ba%d0%b0%d0%bc-%d0%b1%d0%b0%d0%ba%d0%b0%d0%bb%d0%b0%d0%b2%d1%80%d0%b0%d0%bc.aspx">
          <p className="boldName_ForEnterer">Вступ на 1-й курс</p>
        </a>
        <p className="numberName_ForEnterer">за сертифікатами ЗНО</p>
      </div>
      <div className="container_item_forEnterer">
        <div>
          <Img src={icon_diploma} className="icon_ForEnterer" />
        </div>
        <a href="http://its.kpi.ua/SiteAssets/%d0%92%d1%81%d1%82%d1%83%d0%bf%20%d0%bd%d0%b0%201%20%d0%ba%d1%83%d1%80%d1%81%20(%d0%97%d0%b0%20%d0%b4%d0%b8%d0%bf%d0%bb%d0%be%d0%bc%d0%be%d0%bc%20%d0%bc%d0%be%d0%bb%d0%be%d0%b4%d1%88%d0%be%d0%b3%d0%be%20%d1%81%d0%bf%d0%b5%d1%86i%d0%b0%d0%bbi%d1%81%d1%82%d0%b0).aspx?PageView=Shared&InitialTabId=Ribbon.WebPartPage&VisibilityContext=WSSWebPartPage">
          <p className="boldName_ForEnterer">Вступ на 1-й курс</p>
        </a>
        <p className="numberName_ForEnterer">
          за дипломом молодшого спеціаліста
        </p>
      </div>
      <div className="container_item_forEnterer">
        <div>
          <Img src={icon_graduate_student} className="icon_ForEnterer" />
        </div>
        <a href="http://its.kpi.ua/Pages/Abiturient/%d0%92%d1%81%d1%82%d1%83%d0%bf%20%d0%bd%d0%b0%205-%d0%b9%20%d0%ba%d1%83%d1%80%d1%81.aspx">
          <p className="boldName_ForEnterer">Вступ на 5-й курс</p>
        </a>
        <p className="numberName_ForEnterer" />
      </div>
      <div className="container_item_forEnterer">
        <div>
          <Img src={icon_scroll} className="icon_ForEnterer" />
        </div>
        <a href="http://pk.kpi.ua/documents/">
          <p className="boldName_ForEnterer">Офіційні документи</p>
        </a>
        <p className="numberName_ForEnterer" />
      </div>
      <div className="container_item_forEnterer">
        <div>
          <Img src={icon_contacts} className="icon_ForEnterer" />
        </div>
        <a href="/contacts">
          <p className="boldName_ForEnterer">Контакти</p>
        </a>
        <p className="numberName_ForEnterer" />
      </div>
    </div>
  );
}

export default ForEntrant;
