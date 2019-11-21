import React from 'react';
import './Text.css';
import '../GlobalPageSetting.css';

import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import Img from '../../components/Img/index';

import ForEntrant from '../../components/ForEntrant/index';
import Table from '../../components/Table/index';

import BlockList from '../../components/BlockList/index';

import image_microsoft from './images/microsoft.png';
import image_huawei from './images/huawei.png';
import image_nokia from './images/nokia.png';
import image_ericsson from './images/ericsson.png';
import image_Benefits from './images/Benefits.png';
import image_diagram from './images/diagram.gif';
import image22 from '../DonatorsPage/images/image 27.png';

import TermDescription from '../../components/TermDescription';

export default function Text() {
  return (
    <div className="page_content">
      <div className="Information_for_Students">
        <h1 id="Enter">Вступ</h1>
        <ForEntrant />
      </div>
      <hr />
      <h2 id="information_about_specialization">
        Спеціалізація «ІНФОРМАЦІЙНО-КОМУНІКАЦІЙНІ ТЕХНОЛОГІЇ»
      </h2>
      <p>
        <b>
          Спеціалізація <i>«Інформаційно-комунікаційні технології» </i>
        </b>
        забезпечує фундаментальну теоретичну та прикладну практичну підготовку
        за загальною програмою
        <b>
          {' '}
          галузі ​знань <i>«Електроніка та телекомунікації»</i>
        </b>
        ,
        <b>
          {' '}
          спеціальності <i>«Телекомунікації та радіотехніка» </i>
        </b>
        на трьох рівнях вищої освіти: бакалавр, магістр, доктор філософії.
      </p>
      <div>
        <p>
          <b>Спеціалізація</b> спрямована на опанування випускниками спеціальних
          знань із:
          <Img src={image_Benefits} id="image_Benefits" />
          <ul className="benefits">
            <li>
              проектування гетерогенних програмно-апаратних платформ, які
              забезпечують отримання сучасних Інтернет-послуг та сервісів у
              будь-який час і у будь-якому місці, працюють в глобальному
              середовищі;
            </li>
            <li>
              проектування «хмарних» (програмно визначуваних) дата-центрів у
              поєднанні з сучасними 3G, 4G та 5G- комунікаційними мережами;
            </li>
            <li>
              створення та використання новітніх технологій IoT (Internet of
              Things), а також побудова інформаційно-комунікаційних систем на їх
              основі;
            </li>
            <li>
              проектування програмно-апаратних платформ, вузлів обробки даних,
              інтелектуальних засобів їх взаємодії;
            </li>
            <li>
              створення енергоефективних інтелектуальних ​протоколів та засобів
              паралельної, колективної ​обробки значних обсягів інформації у
              вузлах дата-центрів, застосування «хмарних ресурсів та сервісів».​
            </li>
          </ul>
        </p>
      </div>
      <section className="degree_level">
        <div className="container_EnterPage clearfix">
          <BlockList
            center_level="I"
            numberName="Перший"
            boldName="Бакалаврський"
          />
        </div>
        <TermDescription
          bold_and_italic_name="Рівень бакалавра"
          text="забезпечує надбання випускниками компетенцій стосовно теоретичних основ побудови, налагодження, адміністрування, контролю і діагностування стану, інформаційно-комунікаційної інфраструктури операторів зв’язку та провайдерів Інтернет-послуг. "
        />
        <div className="container_EnterPage clearfix">
          <BlockList
            center_level="II"
            numberName="Другий"
            boldName="Магістрський"
          />
        </div>
        <TermDescription
          bold_and_italic_name="Рівень магістра"
          text="забезпечує надбання компетенцій по вдосконаленню, проектуванню та створенню  апаратно-програмної інфраструктури, гетерогенних Інтранет-базованих середовищ, «хмарних» технологій у поєднанні з сучасними 3G, 4G та 5G- комунікаційними мережами. "
        />
        <div className="container_EnterPage clearfix">
          <BlockList
            center_level="III"
            numberName="Третій"
            boldName="Освітньо-науковий"
          />
        </div>
        <TermDescription
          bold_and_italic_name="Рівень доктора філософії"
          text="забезпечує надбання компетенцій по здійсненню наукових досліджень, пошукових робіт та прогнозуванню напрямків розв​итку інформаційно-комунікаційних технологій, створенню та впровадженню технологій всепроникаючого компьютінгу, ІоТ, BigData."
        />
      </section>
      <div>
        <p>
          <b>Cпівпраця з провідними компаніями</b> - розробниками
          спеціалізованого програмного забезпечення, зокрема{' '}
          <b>Microsoft, Ericsson, EPAM, Huawei, Nokia Corporation</b>, а також{' '}
          <b>операторами зв’язку та провайдерами Інтернет-послуг</b> адаптує
          наших випускників до роботи як в зазначених компаніях, так і на
          підприємствах, що займаються:
          <ul className="benefits">
            <li>інформаційно-комунікаційними технологіями;</li>
            <li>програмними платформами та сервісами;</li>
            <li>базами даних;</li>
            <li>сховищами інформації;</li>
            <li>дата-центрами;​</li>
            <li>
              обчисленнями в глобальному середовищі на адміністративних посадах;
            </li>
          </ul>
          в якості розробників Інтернет-послуг і адміністраторів дата-центрів,
          баз даних, електронних сховищ інформації.
        </p>
      </div>
      <div className="container_companies">
        <a href="https://www.microsoft.com" target="_blank">
          <Img
            src={image_microsoft}
            alt="microsoft.png"
            className="companies"
          />
        </a>
        <a href="https://consumer.huawei.com" target="_blank">
          <Img 
          src={image_huawei} 
          alt="huawei.png" 
          className="companies" />
        </a>
        <a href="https://www.nokia.com" target="_blank">
          <Img 
          src={image_nokia} 
          alt="nokia.png"  
          className="companies" />
        </a>
        <a href="https://www.ericsson.com" target="_blank">
          <Img 
          src={image_ericsson} 
          alt="ericsson.png" 
          className="companies" />
        </a>
        <a href="https://www.lifecell.ua/uk" target="_blank">
          <Img 
          src={image22} 
          alt="lifecell.png" 
          className="companies" />
        </a>
      </div>
      <p>
        <b>Вивчають:</b> технології, мови та засоби програмування, побудову{' '}
        <b>програмно-апаратних платформ</b> для отримання Інтернет-послуг та
        сервісів, підходи щодо створення, адміністрування та супроводу
        програмно-апаратної інфраструктури операторів зв’язку, провайдерів
        Інтернет-послуг,{' '}
        <b>елементи гетерогенного середовища на базі Інтернет</b>, Інтранет,{' '}
        <b>«хмарних» технологій</b> у поєднанні з сучасними <b>3G, 4G</b> та{' '}
        <b>5G- комунікаційними мережами</b> для забезпечення якісного
        обслуговування користувачів, технології <b>IoT (Internet of Things)</b>,
        організацію інформаційної взаємодії комунікацій.
      </p>
      <p>
        Можуть працювати​: <b>у в центрах обробки даних</b> та{' '}
        <b>
          з програмними сервісами міжнародних та вітчизняних телекомунікаційних
          компаній, в структурі ІТ-оператора, компаніях мобільного оператора, в
          ІТ-
        </b>
        компаніях, що застосовують <b>програмно-визначальні базові мережі, </b>
        надають послуги зв'язку та Internet, у фірмах-розробниках спеціального
        ПЗ, в технічних відділах банків та організацій різних форм власності, що
        використовують мережні технології​.
      </p>
      <hr />
      <Link>
        <h4>
          Положення про кафедру технічної кібернетики ФІОТ КПІ ім.Ігоря
          Сікорського
        </h4>
      </Link>
      <hr />
      {/* <h4>ФАХОВІ РІВНІ ПІДГОТОВКИ</h4> 
            <Table/>
            <hr/> */}
      <h4>НАПРЯМИ ПІДГОТОВКИ</h4>
      <Img src={image_diagram} className="image_diagram" />
      <hr />
    </div>
  );
}
