import React from 'react';
import './index.css'
import ContactsList from './ContactsList/index';
import ContactsInformation from './ContactsInformation/index.js';
import ReadMore from '../ReadMore/index';

function Contacts(props) {

  return (
    <div className="contacts_KafedraPage">
        <h1 id="contacts_KafedraPage">Контакти</h1>
        <ContactsList>
        <ContactsInformation
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
          <ContactsInformation
            h2="Деканат"
            addressName="Адреса:"
            addressIndex="03056"
            address="м. Київ, пров. Індустріальний, 2, корпус №30, к. 312"
            telephoneTitle="Телефон:"
            telephone="(044) 236-40-14"
            e_mailTitle="E-mail:"
            e_mail="its@its.kpi.ua"
          />
          <ContactsInformation
            h2="Контакти відбіркової комісії "
            addressName="Адреса:"
            addressIndex="03056"
            address="м. Київ, пров. Індустріальний, 2, корпус №30, к. 312"
            telephoneTitle="​Телефони відбіркової комісії ІТС:"
            telephone="+38093-027-90-40"
            e_mailTitle="Адреса електронної пошти відбіркової комісії ІТС:"
            e_mail="its.kpi@i.ua"
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
      </div>
  );
}

export default Contacts;

