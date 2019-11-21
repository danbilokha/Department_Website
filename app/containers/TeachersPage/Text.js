import React from 'react';
import { Helmet } from 'react-helmet';
import './Wrapper.css';
import '../GlobalPageSetting.css';
import TeachersList from './Teacherlist';
import { Teachers } from './Lists/Fulltime';
import { PartTime } from './Lists/Parttime';
import { Personal } from './Lists/personal';

export default function Text() {
  return (
    <div className="page_content">
      <Helmet>
        <title>Teachers Page</title>

        <meta name="" content="" />
      </Helmet>
      <div className="mainContainer">
        <h1>Викладачі кафедри</h1>
        <TeachersList people={Teachers} />
        <TeachersList people={PartTime} />
        <h2>Інженерно-допоміжний персонал</h2>
        <TeachersList people={Personal} />
      </div>
    </div>
  );
}
