import React from 'react';
import './Text.css';
import '../GlobalPageSetting.css';

import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import Img from '../../components/Img/index';


export default function Text() {
  return (
    <div className="page_content">
      <h1>Вступ на 5 курс (сертифікат ЗНО)</h1>
      <div>
        <p>Кафедра інформаційно-телекомінікаційних мереж готує фахівців за</p>
        <h2>СПЕЦІАЛЬНІСТЮ 172: ТЕЛЕКОМУНІКАЦІЇ ТА РАДІОТЕХНІКА</h2>
        <h3>(ГАЛУЗЬ ЗНАНЬ 17: ЕЛЕКТРОНІКА ТА ТЕЛЕКОМУНІКАЦІЇ)</h3>
      </div>
      <p>за освітньою програмою:</p>
      <p><a><span className="link_with_line">Інженерія та програмування інфокомунікацій</span></a></p>  
      <p>2-й рівень вищої освіти:</p>
      <ul>
        <li>
        <b><strong>Магістр за освітньо-науковою програмою - 1 рік 9 місяців </strong></b>
        </li>
        <li>
        <b><strong>Магістр за освітньо-професійною програмою - 1 рік 4 місяці </strong></b>
        </li>
      </ul>
      <p>
      Прийом документів (подання заяв) та проведення конкурсних заходів 
      для вступників на навчання за ступенем магістра проводиться у наступні терміни:
      </p>
      <ul>
        <li>
        прийом документів (подання заяв): з 01.07 до 02.08;
        </li>
        <li>
        вступні випробування (фахові, з іноземної мови та додаткові): з 05.07 до 09.07 та з 05.08 до 09.08 
        поточного року згідно з розкладом, затвердженим головою відповідної атестаційної комісії.
        </li>
      </ul>
      <p>Результати конкурсних заходів атестаційні комісії оголошують 
        у наступний день після проведення відповідних випробувань. 
      </p>
      <a><span className="link_with_line">Правила прийому ДЛЯ ЗДОБУТТЯ СТУПЕНЯ МАГІСТРА</span></a>
      <div>
        <h4>Програми фахового випробування:</h4>
        <a><p><span className="link_with_line">Програма_вступного_іспиту_ТК_2019.pdf</span></p></a>
        <a><p><span className="link_with_line">Програма_додаткового_вступного_іспиту_ІТС 2019.pdf</span></p></a>
        <a><p><span className="link_with_line">Результати вступних випробувань</span></p></a>
      </div>
    </div>
  );
}
