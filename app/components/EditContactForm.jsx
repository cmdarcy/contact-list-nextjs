'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import { useContacts } from '../contexts/contactsContext';

function EditContactForm({
  contactName,
  contactEmail,
  contactImgURL,
  contactPhoneNum,
  contactID,
}) {
  const [name, setName] = useState(contactName);
  const [email, setEmail] = useState(contactEmail);
  const [imgURL, setImgURL] = useState(contactImgURL);
  const [phoneNum, setPhoneNum] = useState(contactPhoneNum);

  const { editContact } = useContacts();

  const router = useRouter();

  function onSubmit(e) {
    e.preventDefault();
    editContact(contactID, {
      name,
      email,
      imgURL,
      phoneNum,
      id: contactID,
    });
    router.push('/contacts');
  }

  return (
    <form action="" onSubmit={onSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="imgURL">Image URL</label>
      <input
        type="url"
        id="imgURL"
        value={imgURL}
        onChange={(e) => setImgURL(e.target.value)}
      />
      <label htmlFor="phoneNum">Phone Number</label>
      <input
        type="tel"
        id="phoneNum"
        value={phoneNum}
        onChange={(e) => setPhoneNum(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

EditContactForm.propTypes = {
  contactName: PropTypes.string,
  contactEmail: PropTypes.string,
  contactImgURL: PropTypes.string,
  contactPhoneNum: PropTypes.string,
  contactID: PropTypes.number,
};

export default EditContactForm;
