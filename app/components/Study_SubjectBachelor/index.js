/* eslint-disable prettier/prettier */
import React from 'react';
import './index.css';

export default class SubjectBachelors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {/* <dl>
  <dt>Fruits I like:</dt>
  <dd>Apples</dd>
  <dd>Bananas</dd>
  <dd>Oranges</dd>
</dl> */}
       <dl id="subject_list">
              <dt>В</dt>
        <dd><a href="">Вища математика</a></dd>
        <dd><a href="">Вступ до спеціальності</a></dd>

        <dt>Д</dt>
        <dd>Дипломне проектування</dd>
        <dd>Дослідження операцій</dd>

        <dt>Е</dt>
        <dd>Екологічні навчальні дисципліни</dd>
        <dd>Економіка і організація виробництва</dd>
        <dd>Економіка організації та планування виробництва</dd>
        <dd>Електродинаміка та поширення радіохвиль</dd>

        <dt>З</dt>
        <dd>Загальна фізика</dd>
        <dd>Захист інформації в телекомунікаційних системах</dd>

        <dt>I</dt>
        <dd>Інженерна та комп'ютерна графіка</dd>
        <dd>Іноземна мова</dd>
        <dd>Інтернет системи</dd>
        <dd>Інформатика</dd>
        <dd>Інформаційне забезпечення мобільних мереж телекомунікацій</dd>
        <dd>Інформаційне забезпечення телекомунікаційних мереж</dd>
        <dd>Історія науки і техніки</dd>
        <dd>Історія України</dd>
        <dd>Історія української культури</dd>

        <dt>M</dt>
        <dd></dd>
        <dd></dd>
        <dd></dd>

        <dt>Н</dt>
        <dd></dd>

        <dt>O</dt>
        <dd></dd>
        <dd></dd>
        <dd></dd>
        <dd></dd>
        <dd></dd>

        <dt>П</dt>
        <dd></dd>
        <dd></dd>
        <dd></dd>
        <dd></dd>
        <dd></dd>

        <dt>C</dt>
        <dd></dd>
        <dd></dd>

        <dt>Т</dt>
        <dd></dd>
        <dd></dd>
        <dd></dd>

        <dt>У</dt>
        <dd></dd>

        <dt>Ф</dt>
        <dd></dd>

            </dl>
      </div>
    );
  }
}
