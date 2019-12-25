/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable camelcase */
import React from 'react';
import './Text.css';
import '../GlobalPageSetting.css';
import image_Collective from './images/Collective.jpg';
import image_allow from './images/arrow.png';
import Img from '../../components/Img/index';
import '../../components/News/index.css';
import Contacts from '../../components/Contacts';
import Second_Diploma_news from '../../components/Diploma';
import { Link } from 'react-router-dom';

export default function Text() {
  return (
    <div className="page_content">
      <section>
        <div className="header_box">
          <div className="header_box_cover">
            <h1>Кафедра Інформаційно-Телекомунікаційних мереж</h1>
          </div>

          <Link className="Why" to="history">
            <div className="header_box_sub2">
              <h1>Історія кафедри</h1>
            </div>
          </Link>
          <a className="Why" href="/#benefits">
            <div className="header_box_sub1">
              <h1>Чому саме до нас?</h1>
            </div>
          </a>

          <h3 id="kafedra_ITM">Спеціальність</h3>
          <h2>172 Телекомунікації та радіотехніка</h2>
          <h3>Спеціалізація</h3>
          <h2>Інформаційно-комунікаційні технології</h2>
          <div className="motivation_box">
            <div className="motivation_box_Why">
              <h2>Шановні Абітурієнти!</h2>
              <p>
                Ви кожного дня використовуєте «хмарні» послуги та різноманітні
                гаджети?
              </p>
              <p>Вважаєте себе достатньо мотивованою людиною?</p>
              <p>Хочете стати справжнім майстром своєї справи? </p>
              <p>
                Не пливеш за течією, а намагаєшся досягти більшого ніж інші?
              </p>
            </div>
            <div className="arrow_box">
              <Img src={image_allow} id="arrow_KafedraPage" />
            </div>
            <div className="motivation_box_know">
              <h2>Тоді вам необхідно знати</h2>
              <p>
                Домінуючою стратегією розвитку цивілізованих країн стає
                концепція інформаційного суспільства, в якому матеріальною
                основою стають інформаційно-комунікаційні технології
                (спеціалізація нашої кафедри) та системи, де тісно
                переплітаються завдання формування, зберігання, обробки та
                вільного обміну в необмеженому просторовому ресурсі значних
                обсягів інформації, які рухаються від джерел до чисельних
                споживачів.{' '}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container_about_KafedraPage">
        <div className="presented_article clearfix">
          <h2>Лідер в сфері інфокомунікацій</h2>
          <p>
            <Img src={image_Collective} id="image_Collective" />
            Науковий керівник кафедри - академік НАНУ, доктор технічних наук,
            заслужений діяч науки і техніки України, лауреат Державних премій
            СРСР, УРСР та України в галузі науки і техніки Ільченко Михайло
            Юхимович. Виконуючий обовязки завідувача кафедри - доцент, кандидат
            технічних наук, Явіся Валерій Сергійович. Вчений секретар кафедри -
            старший викладач Петрова Валентина Миколаївна.
          </p>
        </div>
        <p id="benefits">
          <Link className="inline_link" to="history#history_kafedra">
            Кафедра{' '}
          </Link>
          <Link className="inline_link" to="enter/#Enter">
            Інформаційно-телекомунікаційних мереж{' '}
          </Link>
          готує фахівців за спеціальністю Телекомунікації та радіотехніка та
          спеціалізацією Інформаційно-комунікаційні технології (ІКТ).
        </p>
        <p>
          Кафедра телекомунікацій займає найвищі позиції у рейтингу
          університету, зокрема, за рейтингами науково-педагогічних працівників,
          науково-інноваційної діяльності, індексом творчих досягнень студентів,
          активності міжнародної діяльності.
        </p>
        <p>
          Після проходження навчання студенти без зусиль знаходять роботу в
          сфері інфотелекомунікацій. Наші Випускники працюють на інженерних та
          управлінських посадах провідних підприємств, організацій та їх
          представництв: в сфері електроніки, телекомунікацій, програмного
          забезпечення і інформаційних технологій. Зокрема, Alcatel-Lucent,
          Nokia Corporation, Lifecell (Астеліт), Vodafone (МТС), Укртелеком,
          Київстар та інш.
        </p>
      </section>
      <hr className="hr_KafedraPage" />
      <section className="Second Degree">
        <h1 className="center">Подвійний диплом</h1>
        <Second_Diploma_news />
      </section>
      <Contacts />
{/*       
      <a href="#">Поширені запитання (FAQ)</a>

      <h1>Новини</h1>
      <div className="container_News">
        <News
          mainHeader="Захар Савчук рассказал как правильно настраивать спутниковую антену"
          date="06.01.19"
          content="Студенти НТУУ «КПІ» мають можливість навчатися по програмам магістратури НТУУ «КПІ» «Інформаційні мережі зв’язку» у поєднанні з програмою магістратури ТУД «Інженерія розподілених систем» (Distributed Systems Engineering) для отримання другої вищої освіти. Формування та підготовка груп студентів починається з другого року їх навчання в НТУУ «КПІ» за результатами завершення першого року навчання..."
          readMore="Читати далі"
        />
        <News
          mainHeader="Группа студентов- волонтеров поехала проводить элетричество"
          date="06.01.19"
          content="Студенти НТУУ «КПІ» мають можливість навчатися по програмам магістратури НТУУ «КПІ» «Інформаційні мережі зв’язку» у поєднанні з програмою магістратури ТУД «Інженерія розподілених систем» (Distributed Systems Engineering) для отримання другої вищої освіти. Формування та підготовка груп студентів починається з другого року їх навчання в НТУУ «КПІ» за результатами завершення першого року навчання..."
          readMore="Читати далі"
        />
        <News
          mainHeader="Илон Маск согласился кооперировать с факультетами ИТС"
          date="06.01.19"
          content="Студенти НТУУ «КПІ» мають можливість навчатися по програмам магістратури НТУУ «КПІ» «Інформаційні мережі зв’язку» у поєднанні з програмою магістратури ТУД «Інженерія розподілених систем» (Distributed Systems Engineering) для отримання другої вищої освіти. Формування та підготовка груп студентів починається з другого року їх навчання в НТУУ «КПІ» за результатами завершення першого року навчання..."
          readMore="Читати далі"
        />
      </div>
       */}
    </div>
  );
}
