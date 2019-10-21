import React from 'react';
import './index.css';
import Headlines from '../../components/Study_Header/main';
import Process from '../../components/Study_process/index';
import SubjectBachelors from '../../components/Study_SubjectBachelor/index';
import SubjectMaster from '../../components/Study_SubjectMaster/index';

export default function StudyPage() {
  return (
    <div id="main">
      <Headlines />
      <Process />
      <h2>Перелік предметів бакалаврів</h2>
      <SubjectBachelors />
      <h3>Перелік предметів магістрів</h3>
      <SubjectMaster />
      {/* <h4>Практика</h4>
      <article>
      <p>Практична підготовка студентів є обов´язковим компонентом освітньо-професійної програми для здобуття кваліфікаційного рівня і має 
        на меті на буття ними професійних навичок та вмінь. Мета практики — оволодіння студентами сучасними методами, формами, засобами майбутньої
        професійної діяльності в галузі телекомунікацій, її організації, професійних умінь і навичок для прийняття самостійних рішень під час 
        конкретної роботи в реальних ринкових і виробничих умовах, виховання потреби систематично поновлювати свої знання та творчо їх застосовувати 
        в практичній діяльності.</p>
      </article>
      */}
    </div>
  );
}
