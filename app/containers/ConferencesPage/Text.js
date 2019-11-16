import React from 'react';
import './Text.css';

import UkrMico from './images/UkrMico.png'
import MCT from './images/Modern_Challenges_ In Telecommunications.jpg'
import IEEE_BlackSeaCom from './images/IEEE-BlackSeaCom.png'
import ACS from './images/ACS.png'

import '../GlobalPageSetting.css';

import '../../components/News/index.css';

import Img from '../../components/Img/index';


export default function Text() {
  return (
    <div className="page_content">
      <div className="container_conference">
        <div className="container_conference_content">
          <div className="container_conference_image">
            <div className="container_conference_picture">
              <Img src={UkrMico} className="conference_picture" id="UkrMico_picture" />
            </div>
          </div>
          <div className="container_conference_content_image_article">
            <a href="http://ukrmico.kpi.ua/" target="_blank">
            The Fourth International Conference on Information and Telecommunication Technologies and Radio Electronics (UkrMiCo’2019)  
            </a>
            <div className="container_conference_content_usefull_information">
              <p>
              9 September 2019
              </p>
              <p>
                Odesa 
              </p>
            </div>
            <p>
            The contributions, including but not limited to the following technical areas, are invited: Infocommunications(IT, Cloud and Big Data technologies ets.), 
Telecommunications(telecommunication systems and networks, ets.), Radio Engineering(theory of circuits, signals and processes in radio engineering and electronics ets.), Electronics(electronic materials, electronic devices ets.).
            </p>
          </div>
        </div>
      </div>
      {/* -------------------------------------------------- */}
      <div className="container_conference">
        <div className="container_conference_content">
          <div className="container_conference_image">
            <div className="container_conference_picture">
              <Img src={MCT} className="conference_picture" id="MCT_picture" />
            </div>
          </div>
          <div className="container_conference_content_image_article">
            <a href="http://its.kpi.ua/conferences/Lists/PTUA/DispForm.aspx?ID=15&Source=/conferences/Lists/PTUA/" target="_blank">
            ХІІІ МНТК "Перспективи телекомунікацій 2019" і ХІ "ПРІТС-2019"
            </a>
            <div className="container_conference_content_usefull_information">
              <p>
              15.04-19.04.2019
              </p>
              <p>
                Київ 
              </p>
            </div>
            <p>
            На базі Міжнародної Науково-технічної Конференції "ПЕРСПЕКТИВИ ТЕЛЕКОМУНІКАЦІЙ"  щороку починаючи з 2009, проводиться
Міжнародна науково-технічна конференція студентів та аспірантів «Перспективи розвитку інформаційно-телекомунікаційних технологій та систем».
            </p>
          </div>
        </div>
      </div>
      {/* -------------------------------------------------- */}
      <div className="container_conference">
        <div className="container_conference_content">
          <div className="container_conference_image">
            <div className="container_conference_picture">
              <Img src={IEEE_BlackSeaCom} className="conference_picture" id="IEEE_BlackSeaCom_picture" />
            </div>
          </div>
          <div className="container_conference_content_image_article">
            <a href="https://blackseacom2020.ieee-blackseacom.org/" target="_blank">
            IEEE International Black Sea Conference on Communications and Networking 
            </a>
            <div className="container_conference_content_usefull_information">
              <p>
              26-29 May 2020
              </p>
              <p>
                Odesa/Ukraine 
              </p>
            </div>
            <p>
            The IEEE BlackSeaCom series of conferences are held in the countries surrounding the Black Sea. 
            The goal of the IEEE BlackSeaCom is to bring together visionaries in academia, 
            research labs and industry from all over the world to the shores of the Black Sea. 
            Here they will address many of the outstanding grand challenges that exist in the areas of 
            communications and networking while having an opportunity to explore this exciting and dynamic region 
            that has a rich history.
            </p>
          </div>
        </div>
      </div>
      {/* -------------------------------------------------- */}
      <div className="container_conference">
        <div className="container_conference_content">
          <div className="container_conference_image">
            <div className="container_conference_picture">
              <Img src={ACS} className="conference_picture" id="ACS_picture" />
            </div>
          </div>
          <div className="container_conference_content_image_article">
            <a href="http://acs.zut.edu.pl/" target="_blank">
            ACS 2018. Forward announcement and call for papers 21st international multi-conference on advanced computer systems
            </a>
            <div className="container_conference_content_usefull_information">
              <p>
              September 24-26, 2018
              </p>
              <p>
              Międzyzdroje/Poland 
              </p>
            </div>
            <p>
            The aim of ACS 2018 Multi-Conference is to bring artificial intelligence, 
            software technologies, biometrics, IT security and open and distance learning researchers 
            in contact with the ACS community, and to give ACS attendees an opportunity to exchange some 
            significant knowledge according to this areas of interest. Industrial and systems presentations 
            bearing new ideas and solution paradigms are welcome as well.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
// 