import React from 'react';
import './index.css'

function ContactsInformation(props) {

  return (
    <div className="container_contacts">
      <h2>
        <b>{props.h2}:</b>
      </h2>
      <p>
        <b>{props.addressName}</b> {props.addressIndex}, {props.address}
      </p>
      <p>
        <b>{props.telephoneTitle}</b> {props.telephone}
      </p>
      <p>
        <b>{props.faxTitle}</b> {props.fax}
      </p>
      <p>
        <b>{props.e_mailTitle}</b> {props.e_mail}
      </p>
    </div>
  );
}

export default ContactsInformation;

