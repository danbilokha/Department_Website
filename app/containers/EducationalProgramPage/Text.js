import React from 'react';
import './Text.css';
import '../GlobalPageSetting.css';

import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import Img from '../../components/Img/index';

import specialization_image from './images/specialization.jpg'
import TermDescription from '../../components/TermDescription';
import BlockList from '../../components/BlockList';

export default function Text() {
  return (
    <div className="page_content">
      <h1>Освітня програма</h1>
      <div className="welcome_part">
        <p>Опис освітньої програми <b>„Інженерія та програмування інфокомунікацій”</b></p>
        <Img src={specialization_image}/>
      </div>
      <p>Сукупність інформаційних та телекомунікаційних систем/технологій, які у процесі обробки
         та передачі інформації діють як єдине ціле, визначається терміном <b>інфокомунікації.</b></p>
      <p>Сучасний розвиток галузі інфокомунікацій характеризується зростанням її конвергенції комунікаційної архітектури з комп'ютерними та інформаційними технологіями і, як наслідок, все більшим наповненням інфокомунікаційних систем програмними засобами. Ця тенденція та потреба в прискоренні процесів створення та реалізації таких засобів вказує на необхідність підготовки фахівців, що володітимуть не лише знаннями зі створення та експлуатації засобів електронних комунікацій, розповсюджених загальних засад програмування, а й знаннями з реалізації спеціалізованих програмних засобів передачі, обробки і зберігання даних.<br/>
      Зростання попиту на інфокомунікаційні послуги, розвиток таких систем і технологій вимагає постійного удосконалення відповідних засобів: від простих електронних пристроїв – до складних апаратно-програмних комплексів, що вирішують не тільки задачі безпосереднього прийому, передачі, оброблення та відтворення інформації, а також збільшення гнучкості, продуктивності та надійності при створенні різноманітних програмованих структур комунікацій.<br/>
      У відповідності до стрімкого зростання попиту на інфокомунікаційні системи і послуги має місце нагальна постійна потреба у підготовці фахівців, які володітимуть не лише знаннями з розробки, налагодження, адміністрування та вдосконалення інфокомунікаційної інфраструктури операторів/провайдерів послуг зв’язку (особливо мобільних стільникових систем 5G), телебачення, передачі даних (Інтернет-послуг), а також знання інфокомунікаційних систем і технологій формування програмної платформи, мов і засобів програмування, спеціалізованих програмних застосувань, протоколів та технологій оброблення і передачі даних із заданою якістю обслуговування, а також - кібербезпеки, штучного інтелекту, віртуальної реальності, "хмарних" технологій, інтернет-речей  IoT (Internet of Thinks) та систем міжмашинної взаємодії M2M/D2D.<br/>
      </p>
      <div>
        <p>
        Освітня програма <b>"Інженерія та програмування інфокомунікацій"</b> забезпечує фундаментальну теоретичну та прикладну практичну підготовку і спрямована на опанування випускниками спеціальних знань із:
        <ul>
          <li>конфігурування та організації комп’ютерних мереж, систем мережного каналоутворення та комутації; створення та вдосконалення архітектур, служб та технологій інфокомунікацій; керування та адміністрування інфокомунікаційними мережами; </li>
          <li>захисту інформації, протидії хакерським атакам, кібербезпеки;</li>
          <li>програмної інженерії та тестування програмного забезпечення, мови програмування (С/С++, Java, Python, Goland, Ruby та ін.); баз даних, WEB-програмування, бізнес-аналізу;</li>
          <li>програмування мережних застосувань та мобільних пристроїв, програмно-конфігурованих мереж SDN, програмно-орієнтованих інфокомунікаційних пристроїв SDR, програмно-апаратного забезпечення систем та пристроїв інфокомунікацій;</li>
          <li>розробки систем мультимедіа та віртуальної реальності, хмарних обчислень та GRID-технологій, штучного інтелекту, стільникових мобільних систем 5-го покоління (5G), IoT, M2M/D2D, супутникових та міжпланетарних комунікацій.</li>
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
          bold_and_italic_name="Рівень бакалавра "
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
          bold_and_italic_name="Рівень магістра "
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
          bold_and_italic_name="Рівень доктора філософії "
          text="забезпечує надбання компетенцій по здійсненню наукових досліджень, пошукових робіт та прогнозуванню напрямків розв​итку інформаційно-комунікаційних технологій, створенню та впровадженню технологій всепроникаючого компьютінгу, ІоТ, BigData."
        />
      </section>
      <p>Плідна співпраця з провідними виробниками обладнання інфокомунікацій та розробниками спеціалізованого програмного забезпечення таких як Alcatel-Lucent- a Nokia Corporation Company, Ericsson, EPAM, Huaway, Intel, Infopuls, GlobalLogic а також операторами мобільного зв’язку Київстар, Lifecell, Vodafone дозволяє нашим випускникам бути повністю адаптованими для роботи як в зазначених компаніях, так і компаніях, що займаються створенням інфокомонікацій і підтримкою їх сервісів, програмного забезпечення та антихакерської протидії.</p>
      <a><p><span className="link_with_line">Схема дисциплін за освітньою програмою "Інженерія та програмування інфокомунікацій"</span></p></a> 
      <a><p><span className="link_with_line">Освітня програма "Інженерія та програмування інфокомунікацій"</span></p></a>     
    </div>
  );
}
