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
    </div>
  );
}
