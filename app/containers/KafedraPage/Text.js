import React from 'react';
import './Text.css';
import BlockList from '../../components/BlockList/index';
import LearningForm from '../../components/LearningForm/index';
import Information from '../../components/InformationBox/index';



import image_Collective from './images/Collective.jpg';

import Img from '../../components/Img/index';

import News from '../../components/News/index';
import '../../components/News/index.css';

import Contacts from '../../components/Contacts';
import ContactsList from '../../components/ContactsList';

import ReadMore from '../../components/ReadMore';

import { FormattedMessage } from 'react-intl';
import WordLink from '../../components/WordLink';
import Second_Diploma_news from '../../components/Diploma';

export default function Text(){
    return(
        <div className = 'text'>
            <div className = "header_box">
                <h2>Спеціальність</h2>
                <h2>172 Телекомунікації та радіотехніка</h2>
                <h3>Спеціалізація: Інформаційно-комунікаційні технології</h3>
            </div>
            <hr/>
            <div className = "presented_article">
                <h2>Лідер в сфері інфокомунікацій<Img src={image_Collective}  id = 'image_Collective'/></h2>
                <p>Науковий керівник кафедри - академік НАНУ, доктор технічних наук, заслужений діяч науки і техніки України, лауреат Державних премій СРСР, УРСР та України в галузі науки і техніки Ільченко Михайло Юхимович.
Виконуючий обов'язки завідувача кафедри - доцент, кандидат технічних наук, Явіся Валерій Сергійович.
Вчений секретар кафедри - старший викладач Петрова Валентина Миколаївна.</p>
            </div>
            <div>
            <p>
                <WordLink to="/history">
                    Кафедра
                </WordLink>
                <WordLink to="/enter"> 
                    Інформаційно-телекомунікаційних мереж
                </WordLink>
                 готує фахівців за спеціальністю Телекомунікації та радіотехніка та спеціалізацією Інформаційно-комунікаційні технології (ІКТ).
            </p>
            </div>
            <p>Кафедра  телекомунікацій займає найвищі позиції у рейтингу університету, зокрема, за рейтингами науково-педагогічних працівників, науково-інноваційної діяльності, індексом творчих досягнень студентів, активності міжнародної діяльності.</p>
            <p>Після проходження навчання студенти без зусиль знаходять роботу в сфері інфотелекомунікацій. Наші Випускники працюють на інженерних та управлінських посадах провідних підприємств, організацій та їх представництв: в сфері електроніки, телекомунікацій, програмного забезпечення і інформаційних технологій. Зокрема, Alcatel-Lucent, Nokia Corporation, Lifecell (Астеліт), Vodafone (МТС), Укртелеком, Київстар та інш.</p>
            <hr/>
            <h1 className = "center">Подвійний диплом</h1>
            <Second_Diploma_news/>
            <div className = "Qualification">
                <div>
                    <h1>Опис професії</h1>
                    <h2>Кваліфікаційні рівні</h2>
                </div>
                <div className = "Block">
                    <BlockList center_level="I" numberName="Перший" boldName="Бакалаврський" />
                    <BlockList center_level="II" numberName="Другий" boldName="Магістрський" />
                    <BlockList center_level="III" numberName="Третій" boldName="Освітньо-науковий" />
                </div>
            </div>
            <div className = "Learning_Form">
                <h2>Форми навчання</h2>
                <div className = "Block">
                        <LearningForm  numberName="Форма навчання" boldName="Денна" />
                        <LearningForm  numberName="Форма навчання" boldName="Заочна" />
                </div>
            </div>
            <div className = "Text_Information">
                <div className = "Block"> 
                    <Information header="
                        Унікальні специфічні знання, вміння та навички якими володіють випускники
                        " content="
                        Кафедра інформаційно-телекомунікаційних мереж здійснює підготовку фахівців у напрямку забезпечення користувачів послугами телекомунікаційних мереж та програмним забезпеченням їх функціонування. Випускники володіють знаннями, вміннями та навичками, ща дозволяє їм аналізувати та впроваджквати телекоунікаційні технології, розробляти програмне забезпечення прийому-передавання інформації та абонентського доступу до ресурсів телекомунікаційних мереж, виконувати моніторинг, проводити моделювання, системний аналіз, дослідження операцій, забезпечувати захист інформації в інформаційно-телекомунікаційному середовищі.
                        "/> 
                    <Information header="
                        Теми дипломних робіт (основні напрямки магістерських досліджень)
                        " content="
                        Магістерські роботи направлені на дослідження в сфері удосконалення технологій надання послуг користувачам телекомунікаційних мерж шляхом аналізу, розрахунку та комп’ютерного моделювання. До напрямків робіт належать: алгоритмічне та програмне забезпечення захисту інформації в мобільних мережах; дослідження можливості підвищення якості послуг в супутникових мережах зв’язку; автоматизація технологій тестування працездатності базових станцій систем стільникового зв’язку; гетерогенні телекомунікаційні мережі наджання мультимедійних послуг.
                        "/> 
                    <Information header="
                        Ким можуть працювати випускники відповідно до державного класифікатора професій
                        " content="
                        Випускники ІТС можуть працювати в якості керівників середнього та нижчого рівнів управління, спеціалістів виробничих підрозділів підприємств, консультантів з інформаційного забезпечення. Бакалаври можуть працювати на інженерних посадах телекомунікаційних компаній та організацій з експлуатації та обслуговування апаратури. Магістри можуть працювати на організаційних науково-дослідних та керівних посадах в галузі телекомунікацій і виконувати наукові дослідження та розробки інформаційно-телекомунікаційних технологій, приймати тактичні та стратегічні рішення з технологічних задач роботи обладнання систем та мереж зв’язку.
                        "/> 
                    <Information header="
                        Де працюють випускники
                        " content="
                        Випускники ІТС працюють в установах державної та недержавної форм власності: ВАТ “Укртелеком”, „Датагруп”, МТС, „Київстар”, ЗАТ “УкрСат”, „Голден Телеком”, “Воля Кабель”, “Моторола”, „HUAWEY TECHNOLOGIES”, банківських установах – “Банкомзв’язок”, в компаніях з інформаційними послугами ТОВ “Комп’ютер та сервіс”, ТОВ “Телеком – дистрибюшен”, СП ТОВ “Інтернешнл Телеком’юнікешен Компані”, НДЦ „Квазар” та в багатьох інших.
                        "/> 
                    <Information header="
                        Додаткова освіта: підвищення кваліфікації, друга вища, тренінги, тощо
                        " content="
                        ІТС готує фахівців за другою вищою освітою за спеціальністю: Інформаційно-комунікаційні технології​
                        "/> 
                    <Information header="
                        Місця проходження практики
                        " content="
                        ВАТ Укртелеком, ТОВ “Голден Телеком”, ЗАТ ”ДАТАГРУП”, ЗАТ “Київстар Дж.Ес.Ем.”, ЗАТ “Український Мобільний Зв’язок”, ТОВ “Глобал Телеком”, ВАТ “Бамкомзв’язок”, АТ Банк “ТАВРИКА”, Huawei Technologies Co., LTD., “ІНВЕКС Телеком” т.і. 
                        "/> 
                </div>
            </div>
            <div className = "contacts_inf">
                {/* Чи можна використовувати ForwardMessage длclassName = "Drezden_article" номера телефону та пошти*/}
                <h2>Контакти вибіркової комісії ІТС</h2>
                <p className = "telephone"><b>Телефон відбірковї комісії ІТС: </b>(068)-357-08-44</p>
                <p className = "mail"><b>Електронна пошта відбіркової комісії ІТС: </b>novikov1967@ukr.net</p>
            </div>
            <a href="#">Поширені запитання (FAQ)</a>
            
            <h1>Новини</h1>
            <div className = "container_News">
                <News 
                mainHeader = "Захар Савчук рассказал как правильно настраивать спутниковую антену"
                date = "06.01.19"
                content = "Студенти НТУУ «КПІ» мають можливість навчатися по програмам магістратури НТУУ «КПІ» «Інформаційні мережі зв’язку» у поєднанні з програмою магістратури ТУД «Інженерія розподілених систем» (Distributed Systems Engineering) для отримання другої вищої освіти. Формування та підготовка груп студентів починається з другого року їх навчання в НТУУ «КПІ» за результатами завершення першого року навчання..."
                readMore = "Читати далі"
                />
                <News 
                mainHeader = "Группа студентов- волонтеров поехала проводить элетричество"
                date = "06.01.19"
                content = "Студенти НТУУ «КПІ» мають можливість навчатися по програмам магістратури НТУУ «КПІ» «Інформаційні мережі зв’язку» у поєднанні з програмою магістратури ТУД «Інженерія розподілених систем» (Distributed Systems Engineering) для отримання другої вищої освіти. Формування та підготовка груп студентів починається з другого року їх навчання в НТУУ «КПІ» за результатами завершення першого року навчання..."
                readMore = "Читати далі"
                />
                <News 
                mainHeader = "Илон Маск согласился кооперировать с факультетами ИТС"
                date = "06.01.19"
                content = "Студенти НТУУ «КПІ» мають можливість навчатися по програмам магістратури НТУУ «КПІ» «Інформаційні мережі зв’язку» у поєднанні з програмою магістратури ТУД «Інженерія розподілених систем» (Distributed Systems Engineering) для отримання другої вищої освіти. Формування та підготовка груп студентів починається з другого року їх навчання в НТУУ «КПІ» за результатами завершення першого року навчання..."
                readMore = "Читати далі"
                />
            </div>
            <h1>Контакти</h1>
            <ContactsList>

            <iframe width="450" height="350" src="http://maps.google.co.uk/maps?q=м. Київ, пров. Індустріальний, 2 &amp;output=embed"></iframe>
                <Contacts
                    h2 = "Кафедра ITM"
                    addressName = "Адреса факультету:" 
                    addressIndex = "03056" 
                    address = "м. Київ, пров. Індустріальний, 2, корпус №30, к. 316" 
                    telephoneTitle = "Телефон:" 
                    telephone = "(044) 204-98-91" 
                    faxTitle = "Факс:"
                    fax = "(044) 204-82-99" 
                    e_mailTitle = "E-mail:"
                    e_mail = "itm@its.kpi.ua"
                 />
                    <Contacts 
                    h2 = "Деканат" 
                    addressName = "Адреса:" 
                    addressIndex = "03056" 
                    address = "м. Київ, пров. Індустріальний, 2, корпус №30, к. 312" 
                    telephoneTitle = "Телефон:" 
                    telephone = "(044) 236-40-14" 
                    e_mailTitle = "E-mail:"
                    e_mail = "its@its.kpi.ua"
                />
                <ReadMore readMore = "Зворотній зв'язок"/>
            </ContactsList>
        </div>
    );
}