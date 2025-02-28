'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useContacts } from '../contexts/contactsContext';
import { validateFormInputs } from '../utils/validateForm';

/**
 * Renders a form for creating a new contact
 *
 * @component
 * @returns {JSX.Element} A form for adding a new contact
 */
function NewContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [imgURL, setImgURL] = useState('');
  const [phoneNum, setPhoneNum] = useState('');

  const { addContact } = useContacts();

  /**
   * Generates a random unique ID for a new contact
   *
   * @returns {number} A randomly generated ID
   */
  function generateId() {
    return Math.round(Math.random() * 100000000);
  }

  const router = useRouter();

  /**
   * Handles form submission, validates inputs, and adds a new contact
   *
   * @param {Event} e - Form submission event
   */
  function onSubmit(e) {
    e.preventDefault();
    if (validateFormInputs(name, email, phoneNum)) {
      addContact({
        name,
        email,
        imgURL,
        phoneNum,
        id: generateId(),
        isError: false,
      });
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
            placeholder="###-###-####"
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
