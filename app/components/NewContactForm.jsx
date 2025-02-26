'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useContacts } from '../contexts/contactsContext';
import { validateFormInputs } from '../utils/validateForm';

function NewContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [imgURL, setImgURL] = useState('');
  const [phoneNum, setPhoneNum] = useState('');

  const { addContact } = useContacts();

  function generateId() {
    return Math.round(Math.random() * 100000000);
  }

  const router = useRouter();

  function onSubmit(e) {
    e.preventDefault();
    if (validateFormInputs(name, email, phoneNum)) {
      addContact({ name, email, imgURL, phoneNum, id: generateId() });
      router.push('/contacts');
    }
  }

  return (
    <form className="container" action="" onSubmit={onSubmit}>
      <div className="row">
        <div className="mb-3 col">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            className="form-control"
            type="text"
            id="name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3 col">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-control"
            type="email"
            id="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="mb-3 col">
          <label className="form-label" htmlFor="imgURL">
            Image URL
          </label>
          <input
            className="form-control"
            type="url"
            id="imgURL"
            value={imgURL}
            required
            onChange={(e) => setImgURL(e.target.value)}
          />
        </div>
        <div className="mb-3 col">
          <label className="form-label" htmlFor="phoneNum">
            Phone Number
          </label>
          <input
            className="form-control"
            type="tel"
            id="phoneNum"
            value={phoneNum}
            required
            onChange={(e) => setPhoneNum(e.target.value)}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default NewContactForm;
