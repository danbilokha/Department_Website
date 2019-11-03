import React from 'react';
import './index.css';
// import Headlines from '../../components/Study_Header (restricted)/main';
import Process from '../../components/Study_process/index';
import SubjectBachelors from '../../components/Study_SubjectBachelor/index';
import SubjectMaster from '../../components/Study_SubjectMaster/index';

import PracticeFinal from '../../components/Study_PracticeFinal/index';
import PracticeMaster from '../../components/Study_MasterPractice/index';

export default function StudyPage() {
  return (
    <div id="study_all">
      <section id="subject_list">
        <SubjectBachelors />
        <SubjectMaster />
      </section>

      <Process />

      <h4>Практика</h4>
      <article className="practice">
        <p>
          Практична підготовка студентів є обов´язковим компонентом
          освітньо-професійної програми для здобуття кваліфікаційного рівня і
          має на меті на буття ними професійних навичок та вмінь. Мета практики
          — оволодіння студентами сучасними методами, формами, засобами
          майбутньої професійної діяльності в галузі телекомунікацій, її
          організації, професійних умінь і навичок для прийняття самостійних
          рішень під час конкретної роботи в реальних ринкових і виробничих
          умовах, виховання потреби систематично поновлювати свої знання та
          творчо їх застосовувати в практичній діяльності.
        </p>

        <p>
          В процесі практики студенти також набувають досвіду суспільної,
          організаторської та виховної роботі в колективі. Поставлена мета
          досягається шляхом вирішення конкретних задач стосовно кожного виду
          практики:
        </p>

        <ul id="diploma_practice">
          <li>
            Переддипломна практика (4 курс, 6 курс). Під час цієї практики
            поглиблюються та закріплюються теоретичні знання з усіх дисциплін
            навчального плану, збирається фактичний матеріал для виконання
            кваліфікаційної роботи, дипломного проекту.
          </li>

          <li>
            Науково-дослідна практика (6 курс - магістри). Науково-дослідна
            практика магістрів є обов'язковим компонентом освітньо-професійної
            програми для здобуття кваліфікаційного рівня магістра з
            телекомунікацій і має на меті набуття студентом професійних навичок
            та вмінь здійснення самостійної наукової-дослідної роботи.​
          </li>
        </ul>

        <p>Обов'язки студента-практиканта:</p>
        <ul id="student_practice_list">
          <li>
            Повністю виконати завдання, які передбачені програмою практики.
          </li>
          <li>
            Студенти зобов’язані в відповідності з графіком прибувати до місця
            практики, виконувати вимоги внутрішнього розпорядку.
          </li>
          <li>На протязі проходження практики вести щоденник.</li>
          <li>
            Своєчасно подати керівникові практики письмовий звіт про виконання
            всіх завдань та щоденник.
          </li>
          <li>Скласти залік з практики.</li>
        </ul>

        <p className="practice_final">
          Чітке дотримання правил охорони праці і техніки безпеки під час
          проходження практики є обов'язковим для всіх студентів.{' '}
        </p>

        <p className="practice_final">
          За два тижні до початку практики студенти повинні пройти загальний
          інструктаж з техніки безпеки, а безпосередньо перед початком екскурсій
          практики інструктаж з охорони праці на об’єкті практики (на робочому
          місці).​​
        </p>

        <PracticeFinal />

        <section>
          <strong>Звіти практики</strong>

          <p>
            {' '}
            Зміст звіту з практики повинен бути індивідуальним. У звіті повинні
            бути відображені наступні питання:
          </p>

          <ul>
            <li>Загальна характеристика підприємства (організації);​</li>
            <li>
              Технологія виробництва (перелік послуг, що надаються
              організацією);
            </li>
            <li>Характеристика продукції (послуг);</li>
            <li>Опис робочих місць, на яких працював студент;</li>
            <li>Інструменти та обладнання;</li>
            <li>Індивідуальне завдання та результати його виконання.</li>
          </ul>

          <p>
            В окремих розділах звіту розглядаються питання охорони праці,
            організації та управління виробництвом і наданню послуг.{' '}
          </p>

          <p>
            Звіт виконується на одній стороні паперу формату А4 (297 х 210 мм),
            ілюструється необхідними схемами, графіками та рисунками,
            оформляється у відповідності з вимогами ЄСКД. Загальний обсяг звіту
            з практики може становити приблизно 10 - 30 с.​
          </p>
        </section>
      </article>

      <article className="practice">
        <section>
          <strong>Переддипломна практика 4-й курс</strong>

          <p>
            Переддипломна практика є важливим елементом практичної підготовки
            студентів та їх становленню як кваліфікованих працівників в сфері
            телекомунікацій та згідно навчального плану підготовки спеціалістів
            проходження переддипломної практики студентами 4- го курсу
            спеціальності 6.050903 “Телекомунікації” передбачено 3 тижні.
          </p>

          <p>
            Переддипломна практика проводиться згідно "Методичних рекомендацій
            по складанню програм практики студентів вищих навчальних закладів
            України" та навчального плану напряму 6.050903 “Телекомунікації”
          </p>

          <p>
            Метою практики є ознайомлення і вивчення безпосередньо на
            виробництві сучасних інформаційно-телекомунікаційних мереж та
            накопичення інформації для написання дипломної бакалаврської роботи.
          </p>
        </section>

        <section>
          <strong>Переддипломна практика 6-й курс</strong>

          <p>
            Переддипломна практика є важливим елементом практичної підготовки
            студентів та їх становленню як кваліфікованих працівників в сфері
            телекомунікацій та згідно навчального плану підготовки спеціалістів
            проходження переддипломної практики студентами 6- го курсу
            спеціальності 7.05090301 «Інформаційні мережі звя'зку» передбачено 7
            тижнів.
          </p>

          <p>
            Переддипломна практика проводиться згідно "Методичних рекомендацій
            по складанню програм практики студентів вищих навчальних закладів
            України" та навчального плану спеціальності 7.05090301 «Інформаційні
            мережі звя'зку».
          </p>

          <p>
            Метою практики є ознайомлення і вивчення безпосередньо на
            виробництві сучасних інформаційно-телекомунікаційних мереж.
          </p>

          <PracticeMaster />
        </section>
      </article>

      <article>
        <h5>Науково-дослідна практика</h5>
        <p>
          Науково-дослідна практика є важливим елементом науково-дослідної
          роботи магістрів в плані опрацювання прикладної та експериментальної
          частини їх дисертаційної роботи, реалізації їх ідей, досліджень,
          отриманих результатів на практиці та становленню їх як кваліфікованих
          працівників в сфері телекомунікацій. Вона є складовою частиною
          навчального плану підготовки магістрів на завершальному етапі їх
          роботи над магістерською дисертацією, а саме в 4 семестрі.
          Науково-дослідна практика проводиться згідно "Методичних рекомендацій
          по складанню програм практики студентів вищих навчальних закладів
          України" та навчального плану за спеціальністю 8.05090301
          «Інформаційні мережі зв’язку».
        </p>

        <p>
          Метою практики є ознайомлення з основними видами робіт, що передбачені
          умовами щодо складання ТЗ з НДР при проектуванні нових чи модернізації
          існуючих розподілених інформаційних систем, розробці програмного
          забезпечення телекомунікаційних систем та інше.
        </p>
      </article>

    </div>
  );
}
