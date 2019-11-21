/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Itemwriter from './Teacheritem';

export default function TeachersList({ people }) {
  return (
    <div className="TeacherList">
      {people.map(person => (
        <div className="TeacherItem">
          <img src={person.img} className="portret" />
          <div className="fullName">
            <div>
              <a href="#">{person.fullName}</a>
            </div>
          </div>
          <div className="info">
            <p>{person.description}</p>
            <p>
              <span className="ItemTitle">Освіта: </span>
              <span>{person.education}</span>
            </p>
            <Itemwriter
              title="Науковий ступінь і вчене звання: "
              content={person.scienceDegree}
            />
            <Itemwriter
              title="Викладає дисципліни: "
              content={person.disciplines}
            />
            <Itemwriter
              title="Сфера наукової діяльності: "
              content={person.sphere}
            />
            <Itemwriter title="Здобутки: " content={person.achievements} />
            <Itemwriter
              title="Інформація на порталі Intellect: "
              content={person.contacts}
            />
            <div />
          </div>
        </div>
      ))}
    </div>
  );
}
