'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import { useContacts } from '../contexts/contactsContext';
import { validateFormInputs } from '../utils/validateForm';

/**
 * Renders a form for editing an existing contact
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.contactName - Current name of the contact
 * @param {string} props.contactEmail - Current email of the contact
 * @param {string} props.contactImgURL - Current image URL of the contact
 * @param {string} props.contactPhoneNum - Current phone number of the contact
 * @param {number} props.contactID - Unique identifier for the contact
 * @returns {JSX.Element} A form for editing contact details
 */
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

  /**
   * Handles form submission, validates inputs, and updates contact
   *
   * @param {Event} e - Form submission event
   */
  function onSubmit(e) {
    e.preventDefault();
    if (validateFormInputs(name, email, phoneNum)) {
      editContact(contactID, {
        name,
        email,
        imgURL,
        phoneNum,
        id: contactID,
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

EditContactForm.propTypes = {
  contactName: PropTypes.string.isRequired,
  contactEmail: PropTypes.string.isRequired,
  contactImgURL: PropTypes.string,
  contactPhoneNum: PropTypes.string.isRequired,
  contactID: PropTypes.number.isRequired,
};

export default EditContactForm;
