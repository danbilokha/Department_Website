import React from 'react';
import './Text.css';

import Img from '../../components/Img/index';

import ForEntrant from '../../components/ForEntrant/index'
import { FormattedMessage } from 'react-intl';
import Table from '../../components/Table/index';
import { Link } from 'react-router-dom';

import image_microsoft from './images/microsoft.png'
import image_huawei from './images/huawei.png'
import image_nokia from './images/nokia.png'
import image_ericsson from './images/ericsson.png'

import image_Benefits from './images/Benefits.png'
import image_diagram from './images/diagram.gif'
import TermDescription from '../../components/TermDescription';

export default function Text(){
    return(
        <div className = 'text'>
            <div className = "Information_for_Students">
                <h1>Вступ</h1>
                <ForEntrant/>
            </div>
            <hr/>
            <h2>Спеціалізація «ІНФОРМАЦІЙНО-КОМУНІКАЦІЙНІ ТЕХНОЛОГІЇ»</h2>
            <p>
                <b>Спеціалізація <i>«Інформаційно-комунікаційні технології» </i></b>
                 забезпечує фундаментальну теоретичну та прикладну практичну підготовку за загальною програмою 
                 <b> галузі ​знань <i>«Електроніка та телекомунікації»</i></b>,  
                 <b> спеціальності <i>«Телекомунікації та радіотехніка» </i></b>
                  на трьох рівнях вищої освіти: бакалавр, магістр, доктор філософії.
            </p>
            <div>
                <Img src={image_Benefits}  id = 'image_Benefits'/>
                <p><b>Спеціалізація</b> спрямована на опанування випускниками спеціальних знань із:
                    <ul className = "benefits">
                        <li>проектування гетерогенних програмно-апаратних платформ, які забезпечують отримання сучасних Інтернет-послуг та сервісів у будь-який час і у будь-якому місці, працюють в глобальному середовищі;</li>
                        <li>проектування «хмарних» (програмно визначуваних) дата-центрів у поєднанні з сучасними 3G, 4G та 5G- комунікаційними мережами;</li>
                        <li>створення та використання новітніх технологій IoT (Internet of Things), а також побудова інформаційно-комунікаційних систем на їх основі;</li>
                        <li>проектування програмно-апаратних платформ, вузлів обробки даних, інтелектуальних засобів їх взаємодії;</li>
                        <li>створення енергоефективних інтелектуальних   ​протоколів та засобів паралельної, колективної ​обробки значних обсягів інформації у вузлах дата-центрів, застосування «хмарних ресурсів та сервісів».​</li>
                    </ul>
                </p>
            </div>
            <TermDescription bold_and_italic_name = "Рівень бакалавра" text = "забезпечує надбання випускниками компетенцій стосовно теоретичних основ побудови, налагодження, адміністрування, контролю і діагностування стану, інформаційно-комунікаційної інфраструктури операторів зв’язку та провайдерів Інтернет-послуг. " />
            <TermDescription bold_and_italic_name = "Рівень магістра" text = "забезпечує надбання компетенцій по вдосконаленню, проектуванню та створенню  апаратно-програмної інфраструктури, гетерогенних Інтранет-базованих середовищ, «хмарних» технологій у поєднанні з сучасними 3G, 4G та 5G- комунікаційними мережами. " />
            <TermDescription bold_and_italic_name = "Рівень доктора філософії" text = "забезпечує надбання компетенцій по здійсненню наукових досліджень, пошукових робіт та прогнозуванню напрямків розв​итку інформаційно-комунікаційних технологій, створенню та впровадженню технологій всепроникаючого компьютінгу, ІоТ, BigData." />
            <div>
                <p><b>Cпівпраця з провідними компаніями</b> - розробниками спеціалізованого програмного забезпечення, зокрема <b>Microsoft, Ericsson, EPAM, Huawei, Nokia Corporation</b>, а також <b>операторами зв’язку та провайдерами Інтернет-послуг</b> адаптує наших випускників до роботи як в зазначених компаніях, так і на підприємствах, що займаються:
                <ul className = "benefits">
                    <li>інформаційно-комунікаційними технологіями;</li>
                    <li>програмними платформами та сервісами;</li>
                    <li>базами даних;</li>
                    <li>сховищами інформації;</li>
                    <li>дата-центрами;​</li>
                    <li>обчисленнями в глобальному середовищі на  адміністративних посадах;</li>
                </ul>
                в якості розробників Інтернет-послуг і адміністраторів дата-центрів, баз даних, електронних сховищ інформації.</p>
            </div>
            <p className = "container_companies">
                <Img src={image_microsoft} alt = "microsoft.png" className = 'companies'/>
                <Img src={image_huawei} alt = "huawei.png" className = 'companies'/>
                <Img src={image_nokia} alt = "nokia.png" className = 'companies'/>
                <Img src={image_ericsson} alt = "ericsson.png" className = 'companies'/>
            </p>
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