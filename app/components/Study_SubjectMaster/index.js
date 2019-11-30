import React from 'react';
import './index.css';

export default class SubjectBachelors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (


      <div id="master_subjects">
        <p class="study_topic">Перелік предметів магістрів</p>
    
        <label>Cпеціальні навчальні дисципліни:</label>

        <br/>
        
        <dl id="subject_list">
          <dt>З</dt>
          <dd>
            <a href="">
              Завадостійке кодування в телекомунікаціних технологіях
            </a>
          </dd>

          <dt>I</dt>
          <dd>
            <a href="">Імітаційне моделювання систем та процесів</a>
          </dd>
          <dd>
            <a href="">Іноземна мова професійного спрямування</a>
          </dd>
          {/* <dd>
            <a href="">Інтелектуальна власність</a>
          </dd> */}
          <dd>
            <a href="">Інтелектуальна обробка інформації</a>
          </dd>
          <dd>
            <a href="">
              Інформаційнк забезпечення синхронізації часу в телекомунікаціних
              мережах
            </a>
          </dd>

          <dt>M</dt>
          <dd>
            <a href="">Маркетинг підприємства зв'язку</a>
          </dd>
          <dd>
            <a href="">Математичне моделювання систем та процесів</a>
          </dd>
          <dd>
            <a href="">
              Математичні методи аналізу та проектування телекомунікаціних
              систем та мереж
            </a>
          </dd>
          <dd>
            <a href="">Математичні методи оптимізації</a>
          </dd>
          <dd>
            <a href="">Менеджмент в телекомунікаціях</a>
          </dd>
          <dd>
            <a href="">Методи проектування в телекомунікаціях</a>
          </dd>

          <dt>O</dt>
          <dd>
            <a href="">Операторська платформа надання послуг</a>
          </dd>
          <dd>
            <a href="">
              Організація наукових досліджень та розробок в галузі
              телекомунікацій
            </a>
          </dd>
          {/* <dd>
            <a href="">Основи наукових досліджень</a>
          </dd> */}
          <dd>
            <a href="">
              Основи прикладної теорії інформації для телекомунікацій
            </a>
          </dd>
          {/* <dd>
            <a href="">Основи сталого розвитку суспільства</a>
          </dd>
          <dd>
            <a href="">Охорона праці</a>
          </dd> */}

          <dt>П</dt>
          {/* <dd>
            <a href="">Патентознавство та авторське право</a>
          </dd>
          <dd>
            <a href="">Педагогіка вищої школи</a>
          </dd> */}
          <dd>
            <a href="">Програмування апаратних засобів</a>
          </dd>

          <dt>P</dt>
          <dd>
            <a href="">Розробка інформаційних ресурсів та систем</a>
          </dd>

          <dt>C</dt>
          <dd>
            <a href="">Системи абонентського доступу</a>
          </dd>
          <dd>
            <a href="">
              Системи розподіленої обробки інформації в телекомунікаційних
              мережах
            </a>
          </dd>
          <dd>
            <a href="">Системне проектування телекомунікаційних мереж</a>
          </dd>

          <dt>T</dt>
          <dd>
            <a href="">Теорія мереж та управління</a>
          </dd>
          <dd>
            <a href="">Теорія прийняття рішень та системний аналіз</a>
          </dd>
          <dd>
            <a href="">Технології обслуговування телекомунікаційних систем</a>
          </dd>

         {/*  <dt>Ф</dt>
          <dd>
            <a href="">Філосовські проблеми наукового пізнання</a>
          </dd>

          <dt>Ц</dt>
          <dd>
            <a href="">Цивільний захист</a>
          </dd>

          <dt>Ч</dt>
          <dd>
            <a href="">Чинники успішного працевлаштування за фахом</a>
          </dd> */}

        </dl>
      </div>
    );
  }
}
