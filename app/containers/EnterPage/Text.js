import React from 'react';
import './Text.css';

import Img from '../../components/Img/index';

import ForEntrant from '../../components/ForEntrant/index'
import { FormattedMessage } from 'react-intl';


export default function Text(){
    return(
        <div className = 'text'>
            <div className = "Information_for_Students">
                <h1>Інформація для студентів</h1>
                    <ForEntrant/>
                {/* entrant */}   
            </div>
        </div>
    );
}