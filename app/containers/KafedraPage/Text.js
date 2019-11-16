import React from 'react';
import './Text.css';
import BlockList from '../../components/BlockList/index';
import LearningForm from '../../components/LearningForm/index';
import Information from '../../components/InformationBox/index';

import '../GlobalPageSetting.css';

import image_Collective from './images/Collective.jpg';
import image_Welcome from './images/Welcome_on_main_page.jpg';
import image_allow from './images/arrow.png'

import Img from '../../components/Img/index';

import News from '../../components/News/index';
import '../../components/News/index.css';

import Contacts from '../../components/Contacts';
import ContactsList from '../../components/ContactsList';

import ReadMore from '../../components/ReadMore';

import { FormattedMessage } from 'react-intl';
import WordLink from '../../components/WordLink';
import Second_Diploma_news from '../../components/Diploma';
import { Link } from 'react-router-dom';

export default function Text() {
  return (
    <div className="page_content">
      <section className="container_introduction_KafedraPage">
        <div className="header_box">
          <div className="header_box_cover"><h1>Кафедра Інформаційно-Телекомунікаційних мереж</h1></div>
          <a href="kafedra_ITM#benefits"><div className="header_box_sub1"><h1>Чому саме до нас</h1></div></a>
          <Link to="history"><div className="header_box_sub2"><h1>Історія кафедри</h1></div></Link>
          <h3 id="kafedra_ITM">Спеціальність</h3>
          <h2>172 Телекомунікації та радіотехніка</h2>
          <h3>Спеціалізація</h3>
          <h2>Інформаційно-комунікаційні технології</h2>
            <div className="motivation_box">
              <div className="motivation_box_Why">
                <h2>Шановні Абітурієнти!</h2>
                <p>Ви кожного дня використовуєте «хмарні» послуги та різноманітні гаджети?</p>
                <p>Вважаєте себе достатньо мотивованою людиною?</p>
                <p>Хочете стати справжнім майстром своєї справи? </p>
                <p>Не пливеш за течією, а намагаєшся досягти більшого ніж інші?</p>
              </div>
              <div className="arrow_box"><Img src={image_allow}  id="arrow_KafedraPage" /></div>
              <div className="motivation_box_know">
                <h2>Тоді вам необхідно знати</h2>
                <p>Домінуючою стратегією розвитку цивілізованих країн стає концепція інформаційного суспільства, в якому матеріальною основою стають інформаційно-комунікаційні технології (спеціалізація нашої кафедри) та системи, де тісно переплітаються завдання формування, зберігання, обробки та вільного обміну в необмеженому просторовому ресурсі значних обсягів інформації, які рухаються від джерел до чисельних споживачів. </p>
              </div>
            </div>
        </div>
      </section>
      <section className="container_about_KafedraPage">
      <div className="presented_article clearfix">
        <h2>Лідер в сфері інфокомунікацій</h2>
        <p><Img src={image_Collective}  id="image_Collective" />
        Науковий керівник кафедри - академік НАНУ, доктор технічних наук,
          заслужений діяч науки і техніки України, лауреат Державних премій
          СРСР, УРСР та України в галузі науки і техніки Ільченко Михайло
          Юхимович. Виконуючий обов'язки завідувача кафедри - доцент, кандидат
          технічних наук, Явіся Валерій Сергійович. Вчений секретар кафедри -
          старший викладач Петрова Валентина Миколаївна.</p>
      </div>
      <p id="benefits">
        <a className="inline_link" href="history#history_kafedra">
          Кафедра{' '}
        </a>
        <a className="inline_link" href="enter#history_kafedra">
          Інформаційно-телекомунікаційних мереж{' '}
        </a>
        готує фахівців за спеціальністю Телекомунікації та радіотехніка та
        спеціалізацією Інформаційно-комунікаційні технології (ІКТ).
      </p>
      <p>
        Кафедра телекомунікацій займає найвищі позиції у рейтингу університету,
        зокрема, за рейтингами науково-педагогічних працівників,
        науково-інноваційної діяльності, індексом творчих досягнень студентів,
        активності міжнародної діяльності.
      </p>
      <p>
        Після проходження навчання студенти без зусиль знаходять роботу в сфері
        інфотелекомунікацій. Наші Випускники працюють на інженерних та
        управлінських посадах провідних підприємств, організацій та їх
        представництв: в сфері електроніки, телекомунікацій, програмного
        забезпечення і інформаційних технологій. Зокрема, Alcatel-Lucent, Nokia
        Corporation, Lifecell (Астеліт), Vodafone (МТС), Укртелеком, Київстар та
        інш.
      </p>
      </section>
      <hr className="hr_KafedraPage"/>
      <section className="Second Degree">
      <h1 className="center">Подвійний диплом</h1>
      <Second_Diploma_news />
      </section>
      <section className="contacts_KafedraPage">
        <h1 id="contacts_KafedraPage">Контакти</h1>
        <ContactsList>
          <Contacts
            h2="Кафедра ITM"
            addressName="Адреса факультету:"
            addressIndex="03056"
            address="м. Київ, пров. Індустріальний, 2, корпус №30, к. 316"
            telephoneTitle="Телефон:"
            telephone="(044) 204-98-91"
            faxTitle="Факс:"
            fax="(044) 204-82-99"
            e_mailTitle="E-mail:"
            e_mail="itm@its.kpi.ua"
          />
          <Contacts
            h2="Деканат"
            addressName="Адреса:"
            addressIndex="03056"
            address="м. Київ, пров. Індустріальний, 2, корпус №30, к. 312"
            telephoneTitle="Телефон:"
            telephone="(044) 236-40-14"
            e_mailTitle="E-mail:"
            e_mail="its@its.kpi.ua"
          />
          <div className="institute_location clearfix">
            <h2>Де нас знайти?</h2>
            <iframe className="institute_location_map "
              width="450"
              height="350"
              src="http://maps.google.co.uk/maps?q=м. Київ, пров. Індустріальний, 2 &amp;output=embed"
            />
            <ReadMore readMore="Зворотній зв'язок" />
          </div> 
        </ContactsList>
      </section>
      {/*
      <div className="Qualification">
        <div>
          <h1>Опис професії</h1>
          <h2>Кваліфікаційні рівні</h2>
        </div>
        <div className="Block">
          <BlockList
            center_level="I"
            numberName="Перший"
            boldName="Бакалаврський"
          />
          <BlockList
            center_level="II"
            numberName="Другий"
            boldName="Магістрський"
          />
          <BlockList
            center_level="III"
            numberName="Третій"
            boldName="Освітньо-науковий"
          />
        </div>
      </div>
      
      <div className="Learning_Form">
        <h2>Форми навчання</h2>
        <div className="Block">
          <LearningForm numberName="Форма навчання" boldName="Денна" />
          <LearningForm numberName="Форма навчання" boldName="Заочна" />
        </div>
      </div>
      <div className="Text_Information">
        <div className="Block">
          <Information
            header="
                        Унікальні специфічні знання, вміння та навички якими володіють випускники
                        "
            content="
                        Кафедра інформаційно-телекомунікаційних мереж здійснює підготовку фахівців у напрямку забезпечення користувачів послугами телекомунікаційних мереж та програмним забезпеченням їх функціонування. Випускники володіють знаннями, вміннями та навичками, ща дозволяє їм аналізувати та впроваджквати телекоунікаційні технології, розробляти програмне забезпечення прийому-передавання інформації та абонентського доступу до ресурсів телекомунікаційних мереж, виконувати моніторинг, проводити моделювання, системний аналіз, дослідження операцій, забезпечувати захист інформації в інформаційно-телекомунікаційному середовищі.
                        "
          />
          <Information
            header="
                        Теми дипломних робіт (основні напрямки магістерських досліджень)
                        "
            content="
                        Магістерські роботи направлені на дослідження в сфері удосконалення технологій надання послуг користувачам телекомунікаційних мерж шляхом аналізу, розрахунку та комп’ютерного моделювання. До напрямків робіт належать: алгоритмічне та програмне забезпечення захисту інформації в мобільних мережах; дослідження можливості підвищення якості послуг в супутникових мережах зв’язку; автоматизація технологій тестування працездатності базових станцій систем стільникового зв’язку; гетерогенні телекомунікаційні мережі наджання мультимедійних послуг.
                        "
          />
          <Information
            header="
                        Ким можуть працювати випускники відповідно до державного класифікатора професій
                        "
            content="
                        Випускники ІТС можуть працювати в якості керівників середнього та нижчого рівнів управління, спеціалістів виробничих підрозділів підприємств, консультантів з інформаційного забезпечення. Бакалаври можуть працювати на інженерних посадах телекомунікаційних компаній та організацій з експлуатації та обслуговування апаратури. Магістри можуть працювати на організаційних науково-дослідних та керівних посадах в галузі телекомунікацій і виконувати наукові дослідження та розробки інформаційно-телекомунікаційних технологій, приймати тактичні та стратегічні рішення з технологічних задач роботи обладнання систем та мереж зв’язку.
                        "
          />
          <Information
            header="
                        Де працюють випускники
                        "
            content="
                        Випускники ІТС працюють в установах державної та недержавної форм власності: ВАТ “Укртелеком”, „Датагруп”, МТС, „Київстар”, ЗАТ “УкрСат”, „Голден Телеком”, “Воля Кабель”, “Моторола”, „HUAWEY TECHNOLOGIES”, банківських установах – “Банкомзв’язок”, в компаніях з інформаційними послугами ТОВ “Комп’ютер та сервіс”, ТОВ “Телеком – дистрибюшен”, СП ТОВ “Інтернешнл Телеком’юнікешен Компані”, НДЦ „Квазар” та в багатьох інших.
                        "
          />
          <Information
            header="
                        Додаткова освіта: підвищення кваліфікації, друга вища, тренінги, тощо
                        "
            content="
                        ІТС готує фахівців за другою вищою освітою за спеціальністю: Інформаційно-комунікаційні технології​
                        "
          />
          <Information
            header="
                        Місця проходження практики
                        "
            content="
                        ВАТ Укртелеком, ТОВ “Голден Телеком”, ЗАТ ”ДАТАГРУП”, ЗАТ “Київстар Дж.Ес.Ем.”, ЗАТ “Український Мобільний Зв’язок”, ТОВ “Глобал Телеком”, ВАТ “Бамкомзв’язок”, АТ Банк “ТАВРИКА”, Huawei Technologies Co., LTD., “ІНВЕКС Телеком” т.і. 
                        "
          />
        </div>
      </div>
      
      <div className="contacts_inf">
      
        <h2>Контакти вибіркової комісії ІТС</h2>
        <p className="telephone">
          <b>Телефон відбірковї комісії ІТС: </b>(068)-357-08-44
        </p>
        <p className="mail">
          <b>Електронна пошта відбіркової комісії ІТС: </b>novikov1967@ukr.net
        </p>
      </div>
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
