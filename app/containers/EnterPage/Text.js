import React from 'react';
import './Text.css';

import Img from '../../components/Img/index';

import ForEntrant from '../../components/ForEntrant/index'
import { FormattedMessage } from 'react-intl';
import Table from '../../components/Table/index';
import WordLink from '../../components/WordLink';
import { Link } from 'react-router-dom';

import image_diagram from './images/diagram.gif'

export default function Text(){
    return(
        <div className = 'text'>
            <div className = "Information_for_Students">
                <h1>Вступ</h1>
                <ForEntrant/>
            </div>
            <hr/>
            <Link>
                <h4>Положення про кафедру технічної кібернетики ФІОТ КПІ ім.Ігоря Сікорського</h4>
            </Link>  
            <hr/>
            <h4>ФАХОВІ РІВНІ ПІДГОТОВКИ</h4> 
            <Table/>
            <hr/>
            <h4>НАПРЯМИ ПІДГОТОВКИ</h4>
            <Img src={image_diagram}  className = 'image_diagram'/>
            <hr/>
        </div>
    );
}